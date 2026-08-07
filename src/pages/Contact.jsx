import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'

const engagementTypes = [
  'Consultation',
  'Feasibility Study',
  'Technical Assessment',
  'Data Analysis',
  'Strategy Development',
  'Research Support',
  'Training',
  'Long-term Advisory',
]

const inputClass =
  'w-full bg-transparent border-b border-navy/20 focus:border-gold px-0 py-3 text-navy placeholder:text-charcoal-soft/50 outline-none transition-colors duration-300'

const labelClass = 'eyebrow text-navy/60 mb-2 block'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [engagementSelections, setEngagementSelections] = useState([])

  const toggleEngagement = (type) => {
    setEngagementSelections((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Engage Arvington"
        title="Discuss an Engagement."
        description="Whether the challenge concerns strategy, transformation, investment, analytics, institutional performance, research or a complex multidisciplinary problem, Arvington can assemble the appropriate expertise."
      />

      <section className="py-24 md:py-32">
        <div className="container-institutional grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 flex flex-col gap-10">
              <div>
                <p className="eyebrow text-gold mb-3">Correspondence</p>
                <p className="text-navy text-lg">engage@arvington.com</p>
              </div>
              <div>
                <p className="eyebrow text-gold mb-3">Location</p>
                <p className="text-charcoal-soft leading-relaxed">Nairobi, Kenya<br />Global Advisory Network</p>
              </div>
              <div>
                <p className="eyebrow text-gold mb-3">What Happens Next</p>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  A member of the relevant consulting vertical will review your enquiry and
                  respond within two business days to confirm a consultation, whether online,
                  by telephone or in person.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border border-gold/40 bg-pale/60 p-10 md:p-14"
                >
                  <span className="eyebrow text-gold">Request Received</span>
                  <h2 className="font-display text-2xl md:text-3xl text-navy mt-4 mb-5">
                    Thank You for Contacting Arvington Ltd.
                  </h2>
                  <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                    Your consultation request has been received successfully. Our team will
                    review your information and contact you regarding the next steps. We
                    appreciate the opportunity to support your strategic, analytical and
                    innovation objectives.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-14"
                >
                  <div>
                    <p className="eyebrow text-navy/40 mb-6">Section 1 &middot; Contact Details</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                      <div>
                        <label className={labelClass}>Full Name</label>
                        <input required type="text" className={inputClass} placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className={labelClass}>Organisation</label>
                        <input required type="text" className={inputClass} placeholder="Organisation name" />
                      </div>
                      <div>
                        <label className={labelClass}>Position</label>
                        <input type="text" className={inputClass} placeholder="Your role" />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input required type="email" className={inputClass} placeholder="you@organisation.com" />
                      </div>
                      <div>
                        <label className={labelClass}>Telephone</label>
                        <input type="tel" className={inputClass} placeholder="+254 ..." />
                      </div>
                      <div>
                        <label className={labelClass}>Area of Interest</label>
                        <select required className={`${inputClass} appearance-none`} defaultValue="">
                          <option value="" disabled>Select an area</option>
                          <option>Strategy</option>
                          <option>Analytics & AI</option>
                          <option>Economics & Finance</option>
                          <option>Research</option>
                          <option>Technology</option>
                          <option>Institutional Advisory</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow text-navy/40 mb-6">Section 2 &middot; Project Information</p>
                    <div className="flex flex-col gap-8">
                      <div>
                        <label className={labelClass}>Briefly describe your consulting needs</label>
                        <textarea
                          required
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="A general overview of your challenge, objectives or expected outcomes. Please avoid confidential information."
                        />
                      </div>
                      <div>
                        <label className={labelClass}>What stage is your project currently at?</label>
                        <select className={`${inputClass} appearance-none`} defaultValue="">
                          <option value="" disabled>Select a stage</option>
                          <option>Early idea / concept</option>
                          <option>Research stage</option>
                          <option>Planning stage</option>
                          <option>Implementation stage</option>
                          <option>Existing operation requiring improvement</option>
                          <option>Scaling stage</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>What type of engagement are you seeking?</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {engagementTypes.map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => toggleEngagement(type)}
                              className={`px-4 py-2 text-xs uppercase tracking-wide font-medium border transition-colors duration-200 ${
                                engagementSelections.includes(type)
                                  ? 'bg-navy text-paper border-navy'
                                  : 'border-navy/15 text-charcoal-soft hover:border-navy/40'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow text-navy/40 mb-6">Section 3 &middot; Consultation Scheduling</p>
                    <div className="grid sm:grid-cols-3 gap-x-8 gap-y-8">
                      <div>
                        <label className={labelClass}>Preferred Mode</label>
                        <select className={`${inputClass} appearance-none`} defaultValue="Online Meeting">
                          <option>Online Meeting</option>
                          <option>Physical Meeting</option>
                          <option>Telephone Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Preferred Date</label>
                        <input type="date" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Preferred Time</label>
                        <input type="time" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow text-navy/40 mb-6">Section 4 &middot; Final Confirmation</p>
                    <label className={labelClass}>How did you hear about Arvington Ltd.?</label>
                    <select className={`${inputClass} appearance-none max-w-sm`} defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option>LinkedIn</option>
                      <option>Facebook</option>
                      <option>Website</option>
                      <option>Referral</option>
                      <option>Professional Network</option>
                      <option>Research Community</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="self-start inline-flex items-center gap-2 bg-navy text-paper px-9 py-4 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300"
                  >
                    Submit Consultation Request <span aria-hidden="true">&rarr;</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
