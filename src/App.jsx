import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import FloatingActions from './components/FloatingActions'
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
import Experience from './pages/Experience'
import Faqs from './pages/Faqs'
import Partnerships from './pages/Partnerships'

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
          <Route path="/experience" element={<Experience />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/request-consultancy" element={<Contact key="consultancy" preset="consultancy" />} />
          <Route path="/request-proposal" element={<Contact key="proposal" preset="proposal" />} />
          <Route path="/executive-consultation" element={<Contact key="executive" preset="executive" />} />
          <Route path="/partnership-enquiry" element={<Contact key="partnership" preset="partnership" />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
