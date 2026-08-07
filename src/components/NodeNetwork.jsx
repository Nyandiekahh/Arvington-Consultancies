import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function NodeNetwork({
  density = 0.00009,
  maxDistance = 150,
  goldRatio = 0.06,
  className = '',
  interactive = true,
}) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height, nodes, animationId, dpr

    const NAVY = '32, 29, 25'
    const GOLD = '169, 131, 43'

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initNodes()
    }

    function initNodes() {
      const count = Math.max(24, Math.floor(width * height * density))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1,
        gold: Math.random() < goldRatio,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        if (interactive) {
          const dx = mouseRef.current.x - n.x
          const dy = mouseRef.current.y - n.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            n.x -= dx * 0.002
            n.y -= dy * 0.002
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.35
            ctx.strokeStyle = `rgba(${NAVY}, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.gold ? `rgba(${GOLD}, 0.75)` : `rgba(${NAVY}, 0.45)`
        ctx.fill()
      }

      if (!reducedMotion) {
        animationId = requestAnimationFrame(step)
      }
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    window.addEventListener('resize', resize)
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove)
      canvas.addEventListener('mouseleave', handleMouseLeave)
    }

    if (reducedMotion) {
      step()
    } else {
      animationId = requestAnimationFrame(step)
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationId)
    }
  }, [density, maxDistance, goldRatio, interactive, reducedMotion])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
