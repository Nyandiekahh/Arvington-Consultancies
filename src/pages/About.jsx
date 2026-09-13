import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import PipelineDiagram from '../components/PipelineDiagram'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { pillars } from '../data/capabilities'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Arvington"
        title="Architecting Institutions. Building What Endures."
        description="Institutions are humanity's most consequential instruments for organising capital, knowledge, authority, capability and ambition. Their strength is not given; it is conceived, architected, built, governed and renewed. Arvington operates at this level of institutional consequence."
        tall
      />

      <section id="purpose" className="py-24 md:py-32 scroll-mt-24">
        <div className="container-institutional grid lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="right">
            <span className="eyebrow text-gold">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-5 mb-7 leading-tight">
              To Shape Institutions Capable of What the Future Demands.
            </h2>
            <div className="space-y-5 text-charcoal-soft leading-relaxed text-justify-pretty">
              <p>
                We work with Boards, leaders, owners and principals to shape the institutions
                entrusted to their stewardship, defining purpose, architecture, strategy,
                governance, capability and the systems required for enduring performance. We
                integrate strategy, intelligence, science, technology, economics, finance,
                governance and human capability into one coherent institutional architecture.
              </p>
              <p>
                Institutions determine what economies, societies and organisations are capable
                of becoming. Their trajectory is shaped by the architecture they establish, the
                decisions they make, the capabilities they cultivate and the systems through
                which those capabilities become performance. Arvington works with Boards,
                leaders, owners and those entrusted with stewardship to conceive what must
                become, architect what must be built, align the systems that make it possible
                and develop the capabilities required to perform, evolve and endure.
              </p>
              <p className="font-display text-navy text-lg leading-snug">
                We turn ambition into capability, and capability into enduring consequence. We
                help determine what institutions become, how they endure, and what they make
                possible.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <ImagePlaceholder label="Institutional Purpose" ratio="aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      <section id="philosophy" className="py-24 md:py-32 bg-pale/60 border-y border-navy/8 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Institutional Philosophy"
            title="The Institution Is Greater Than the Disciplines That Serve It."
            description="Institutions of consequence are built by integrating knowledge, judgement and capability around purpose, ambition and what must become. Arvington brings strategy, economics, intelligence, science, technology, finance, governance and human capability into one coherent institutional architecture; creating the depth, breadth and synthesis required to shape complex institutions and consequential decisions."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <Reveal direction="up">
              <div className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-navy mb-4">Twenty Verticals, One Architecture</h3>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  Our twenty Consulting Verticals form an interconnected architecture of
                  expertise, enabling the right capabilities to converge around each
                  institution, strategic imperative and opportunity.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-navy mb-4">Knowledge Organised Around the Institution</h3>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  We organise knowledge around the institution, integrate expertise around
                  consequence, and build capability around what must endure, rather than
                  organising ourselves around a fixed set of disciplines and asking the client
                  to fit inside them.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-navy mb-4">One Institution</h3>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  Twenty Verticals. One Institution. One architecture. Built for consequence,
                  led by directors who trust one another's judgement across disciplines.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="decision-intelligence" className="py-24 md:py-32 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Decision Intelligence"
            title="The Discipline of Turning Knowledge Into Consequence."
            description="Consequential decisions demand more than information. They require evidence, intelligence, judgement, context and institutional capability to converge before action is taken. Arvington's Decision Intelligence brings these elements into one coherent decision architecture connecting data, analysis, research, expertise, strategy, technology and institutional judgement from the point of inquiry to the point of consequence."
          />
          <div className="mt-16">
            <PipelineDiagram />
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <Reveal direction="up">
              <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                It is how evidence becomes intelligence, intelligence informs judgement,
                judgement becomes decision, and decision becomes institutional action,
                capability and enduring value. Decision Intelligence is the architecture through
                which better knowledge becomes better decisions and better decisions become
                stronger institutions.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                Arvington's engagements are structured to move deliberately through each of
                these stages, rather than jumping straight from a data request to a
                recommendation slide. It takes longer at the outset. It is, in our experience,
                considerably faster overall, because a decision that has genuinely been through
                this process rarely needs to be revisited eighteen months later.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="approach" className="py-24 md:py-32 bg-pale/60 border-y border-navy/8 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading eyebrow="Our Approach" title="Five Principles That Govern Our Work." />
          <div className="mt-16 grid md:grid-cols-5 gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} direction="up" delay={i * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <span className="font-display text-3xl text-gold/80">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-lg mt-4 mb-3 text-navy">{pillar.name}</h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={0.3}>
            <p className="mt-16 text-center font-display text-xl md:text-2xl text-navy leading-snug max-w-2xl mx-auto">
              Five principles. One standard: work worthy of the institutions we are entrusted to shape.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
