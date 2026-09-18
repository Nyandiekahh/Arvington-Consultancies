import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  size = 'default',
}) {
  const isCenter = align === 'center'
  const titleSize = size === 'large' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      {eyebrow && (
        <Reveal direction="up" duration={0.5}>
          <div className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}>
            <span className={`w-8 h-px ${light ? 'bg-gold' : 'bg-gold'}`} />
            <span className={`eyebrow ${light ? 'text-gold' : 'text-gold'}`}>{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08} duration={0.7}>
        <h2 className={`font-display font-medium leading-[1.08] ${titleSize} ${light ? 'text-paper' : 'text-navy'}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16} duration={0.7}>
          <p
            className={`mt-6 text-lg leading-relaxed text-justify-pretty w-full max-w-5xl ${
              light ? 'text-paper/75' : 'text-charcoal-soft'
            } ${isCenter ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
