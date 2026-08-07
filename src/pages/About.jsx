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
        title="An Institution Built Around a Single Idea."
        description="That the quality of an organisation's decisions, more than its resources or its ambitions, determines whether it rises or declines. Everything about how Arvington is structured follows from that premise."
      />

      <section id="purpose" className="py-24 md:py-32 scroll-mt-24">
        <div className="container-institutional grid lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="right">
            <span className="eyebrow text-gold">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-5 mb-7 leading-tight">
              Why Arvington Exists
            </h2>
            <div className="space-y-5 text-charcoal-soft leading-relaxed text-justify-pretty">
              <p>
                Most consulting engagements are commissioned to solve a problem that, on closer
                inspection, is actually a decision problem wearing the costume of a technical
                one. A market entry study is really a question about which risks a board is
                willing to underwrite. A digital transformation programme is really a question
                about which parts of an organisation are prepared to change how they work.
                Arvington was built to work at that underlying layer, rather than stopping at
                the surface of the brief we were originally handed.
              </p>
              <p>
                We exist because institutions, whether a government ministry, a bank, a
                university or a manufacturer, are ultimately judged by the decisions they make
                and the outcomes those decisions produce. A strategy that never accounts for how
                an organisation actually behaves under pressure is not a strategy anyone can
                rely on. Our purpose is to close that gap, between what an institution decides
                on paper and what it is actually capable of executing, using whichever
                combination of strategy, economics, data science, research and technical
                expertise the specific problem genuinely requires.
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
            title="Disciplines Are a Means, Not the Product."
            description="Arvington is organised around twenty consulting verticals, but a client rarely experiences the firm one vertical at a time. Almost every engagement worth taking on draws from at least three or four of them simultaneously, which is exactly why we built the firm to work this way from the outset rather than trying to retrofit collaboration onto a set of disconnected practice silos."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <Reveal direction="up">
              <div className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-navy mb-4">The Discipline Trap</h3>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  Many consultancies are organised the way universities are organised, by
                  discipline, with a strategy department, an economics department and a
                  technology department that occasionally speak to each other. That structure
                  serves the firm\u2019s internal convenience more than the client\u2019s actual problem.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-navy mb-4">The Arvington Alternative</h3>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  We assemble a team around the decision, drawing the specific combination of
                  economists, data scientists, engineers or governance specialists a problem
                  actually needs, led by whichever director\u2019s expertise sits closest to the
                  heart of the question.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-navy mb-4">What This Requires of Us</h3>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  It means our directors have to genuinely trust one another\u2019s judgement across
                  disciplines, and it means client relationships are owned by the institution,
                  not by whichever partner happened to answer the first phone call.
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
            title="The Framework Behind Every Engagement."
            description="Decision Intelligence is not a proprietary methodology we sell as a product. It is a description of how evidence actually has to travel, from raw data through to institutional impact, if a decision is going to hold up once it leaves the room it was made in."
          />
          <div className="mt-16">
            <PipelineDiagram />
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <Reveal direction="up">
              <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                Data on its own is not evidence, and evidence on its own is not a decision.
                Between raw information and an executive choice sits a great deal of work that
                is frequently skipped under time pressure: modelling that turns data into
                analysis, interpretation that turns analysis into intelligence, and judgement
                that turns intelligence into a specific, defensible direction.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                Arvington\u2019s engagements are structured to move deliberately through each of
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
          <SectionHeading eyebrow="Our Approach" title="Five Pillars We Hold Ourselves To." />
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
        </div>
      </section>
    </div>
  )
}
