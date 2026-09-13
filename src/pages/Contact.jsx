import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import { verticals } from '../data/verticals'

const projectStages = [
  'Early Idea / Concept',
  'Research Stage',
  'Planning Stage',
  'Implementation Stage',
  'Existing Operation Requiring Improvement',
  'Transformation Stage',
  'Scaling Stage',
  'Other',
]

const engagementTypes = [
  'Consultation',
  'Feasibility Study',
  'Technical Assessment',
  'Data Analysis',
  'Strategy Development',
  'Research Support',
  'Institutional Advisory',
  'Training',
  'Project / Programme Advisory',
  'Long-Term Advisory',
  'Multidisciplinary Advisory',
]

const consultationModes = ['Online Meeting', 'Physical Meeting', 'Telephone Consultation']

const howHeardOptions = [
  'LinkedIn',
  'Facebook',
  'Website',
  'Referral',
  'Professional Network',
  'Research Community',
  'Other',
]

const verticalOptions = [
  ...verticals.map((v) => ({ id: String(v.id), label: v.name, tags: v.capabilities.slice(0, 2).join(' · ') })),
  {
    id: 'integrated',
    label: 'Integrated / Multidisciplinary Engagement',
    tags: 'For requirements spanning multiple Consulting Verticals, sectors or institutional functions.',
  },
]

const STEPS = [
  'Contact Details',
  'Consulting Vertical',
  'Project Information',
  'Consultation Scheduling',
  'Final Confirmation',
]

const inputClass =
  'w-full bg-transparent border-b border-navy/20 focus:border-gold px-0 py-3 text-navy placeholder:text-charcoal-soft/50 outline-none transition-colors duration-300'

const labelClass = 'eyebrow text-navy/60 mb-2 block'

const initialForm = {
  fullName: '',
  organisation: '',
  position: '',
  email: '',
  telephone: '',
  vertical: '',
  description: '',
  stage: '',
  engagementSelections: [],
  mode: '',
  date: '',
  time: '',
  howHeard: '',
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const toggleEngagement = (type) => {
    setForm((prev) => ({
      ...prev,
      engagementSelections: prev.engagementSelections.includes(type)
        ? prev.engagementSelections.filter((t) => t !== type)
        : [...prev.engagementSelections, type],
    }))
  }

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const canAdvance = () => {
    if (step === 1) return form.fullName && form.email
    if (step === 2) return Boolean(form.vertical)
    return true
  }

  return (
    <div>
      <PageHero
        eyebrow="Engage Arvington"
        title="Discuss an Engagement."
        description="Whether the challenge concerns strategy, transformation, investment, analytics, institutional performance, research, technology or a complex multidisciplinary problem, Arvington can assemble the appropriate expertise. Our 20 Consulting Verticals provide specialist depth across the disciplines required to address consequential institutional, commercial, technical and strategic questions."
        tall
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
                  A member of the relevant Consulting Vertical will review your enquiry and
                  coordinate the appropriate expertise. We respond within two business days to
                  confirm the next step, whether through an online meeting, telephone
                  consultation or in-person discussion.
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
                    A member of the relevant Consulting Vertical will review your enquiry and
                    coordinate the appropriate expertise. We respond within two business days to
                    confirm the next step.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key={`step-${step}`}
                  onSubmit={step === STEPS.length ? handleSubmit : (e) => { e.preventDefault(); next() }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {STEPS.map((label, i) => (
                      <div key={label} className="flex items-center gap-2">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono border ${
                            step === i + 1
                              ? 'bg-navy text-paper border-navy'
                              : step > i + 1
                                ? 'bg-gold/20 text-navy border-gold'
                                : 'border-navy/20 text-charcoal-soft/60'
                          }`}
                        >
                          {i + 1}
                        </span>
                        {i < STEPS.length - 1 && <span className="w-4 h-px bg-navy/15" />}
                      </div>
                    ))}
                  </div>
                  <p className="eyebrow text-gold mb-8">
                    Section {step} &middot; {STEPS[step - 1]}
                  </p>

                  {step === 1 && (
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Full Name</label>
                        <input
                          required
                          className={inputClass}
                          value={form.fullName}
                          onChange={(e) => update('fullName', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Organisation</label>
                        <input
                          className={inputClass}
                          value={form.organisation}
                          onChange={(e) => update('organisation', e.target.value)}
                          placeholder="Company / institution"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Position</label>
                        <input
                          className={inputClass}
                          value={form.position}
                          onChange={(e) => update('position', e.target.value)}
                          placeholder="Your role"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input
                          required
                          type="email"
                          className={inputClass}
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@organisation.com"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Telephone</label>
                        <input
                          className={inputClass}
                          value={form.telephone}
                          onChange={(e) => update('telephone', e.target.value)}
                          placeholder="+254 ..."
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <p className="text-charcoal-soft leading-relaxed text-justify-pretty mb-8">
                        Select the capability most relevant to your requirement.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 max-h-[32rem] overflow-y-auto pr-2">
                        {verticalOptions.map((opt, i) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => update('vertical', opt.id)}
                            className={`text-left p-4 border transition-colors duration-200 ${
                              form.vertical === opt.id
                                ? 'border-gold bg-pale/70'
                                : 'border-navy/12 hover:border-navy/30'
                            }`}
                          >
                            <span className="font-mono text-xs text-gold">
                              {opt.id === 'integrated' ? '★' : String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm text-navy font-medium mt-1 leading-snug">{opt.label}</p>
                            <p className="text-xs text-charcoal-soft/70 mt-1 leading-relaxed">{opt.tags}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="flex flex-col gap-10">
                      <div>
                        <label className={labelClass}>Briefly describe your consulting needs</label>
                        <p className="text-sm text-charcoal-soft/70 mb-3">
                          Tell us about the strategic question, institutional priority, project,
                          opportunity or challenge you would like to discuss.
                        </p>
                        <textarea
                          rows={5}
                          className={inputClass}
                          value={form.description}
                          onChange={(e) => update('description', e.target.value)}
                          placeholder="Describe your needs..."
                        />
                      </div>
                      <div>
                        <label className={labelClass}>What stage is your project currently at?</label>
                        <select
                          className={inputClass}
                          value={form.stage}
                          onChange={(e) => update('stage', e.target.value)}
                        >
                          <option value="">Select a stage</option>
                          {projectStages.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>What type of engagement are you seeking?</label>
                        <div className="flex flex-wrap gap-2.5 mt-2">
                          {engagementTypes.map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => toggleEngagement(type)}
                              className={`px-4 py-2 text-xs uppercase tracking-wide font-medium border transition-colors duration-200 ${
                                form.engagementSelections.includes(type)
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
                  )}

                  {step === 4 && (
                    <div className="flex flex-col gap-10">
                      <div>
                        <label className={labelClass}>Preferred Mode</label>
                        <div className="flex flex-wrap gap-2.5 mt-2">
                          {consultationModes.map((mode) => (
                            <button
                              type="button"
                              key={mode}
                              onClick={() => update('mode', mode)}
                              className={`px-4 py-2 text-xs uppercase tracking-wide font-medium border transition-colors duration-200 ${
                                form.mode === mode
                                  ? 'bg-navy text-paper border-navy'
                                  : 'border-navy/15 text-charcoal-soft hover:border-navy/40'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label className={labelClass}>Preferred Date</label>
                          <input
                            type="date"
                            className={inputClass}
                            value={form.date}
                            onChange={(e) => update('date', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Preferred Time</label>
                          <input
                            type="time"
                            className={inputClass}
                            value={form.time}
                            onChange={(e) => update('time', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="flex flex-col gap-10">
                      <div>
                        <label className={labelClass}>How did you hear about Arvington Ltd.?</label>
                        <select
                          className={inputClass}
                          value={form.howHeard}
                          onChange={(e) => update('howHeard', e.target.value)}
                        >
                          <option value="">Select an option</option>
                          {howHeardOptions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                      <div className="border border-navy/10 bg-pale/50 p-6">
                        <p className="eyebrow text-navy/50 mb-4">Review Your Request</p>
                        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                          <div>
                            <dt className="text-charcoal-soft/60">Name</dt>
                            <dd className="text-navy">{form.fullName || '—'}</dd>
                          </div>
                          <div>
                            <dt className="text-charcoal-soft/60">Organisation</dt>
                            <dd className="text-navy">{form.organisation || '—'}</dd>
                          </div>
                          <div>
                            <dt className="text-charcoal-soft/60">Consulting Vertical</dt>
                            <dd className="text-navy">
                              {verticalOptions.find((o) => o.id === form.vertical)?.label || '—'}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-charcoal-soft/60">Project Stage</dt>
                            <dd className="text-navy">{form.stage || '—'}</dd>
                          </div>
                          <div>
                            <dt className="text-charcoal-soft/60">Preferred Mode</dt>
                            <dd className="text-navy">{form.mode || '—'}</dd>
                          </div>
                          <div>
                            <dt className="text-charcoal-soft/60">Engagement Types</dt>
                            <dd className="text-navy">{form.engagementSelections.join(', ') || '—'}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  )}

                  <div className="mt-14 flex items-center justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={back}
                        className="inline-flex items-center gap-2 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                      >
                        &larr; Back
                      </button>
                    ) : <span />}

                    {step < STEPS.length ? (
                      <button
                        type="submit"
                        disabled={!canAdvance()}
                        className="inline-flex items-center gap-2 bg-navy text-paper px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue <span aria-hidden="true">&rarr;</span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-navy text-paper px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300"
                      >
                        Submit Consultation Request <span aria-hidden="true">&rarr;</span>
                      </button>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
