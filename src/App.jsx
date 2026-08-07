import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'
import Capabilities from './pages/Capabilities'
import ConsultingVerticals from './pages/ConsultingVerticals'
import Leadership from './pages/Leadership'
import Insights from './pages/Insights'
import InsightArticle from './pages/InsightArticle'
import Sectors from './pages/Sectors'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/consulting-verticals" element={<ConsultingVerticals />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightArticle />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
