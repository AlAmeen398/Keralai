import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Knowledge() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.enter'), {
        opacity: 0,
        y: 26,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-5 mt-5" ref={sectionRef}>
      <Container>
        <Row className="mb-3">
          <Col>
            <h1 className="enter">Knowledge as a Public Good</h1>
            <p className="lead enter">Making AI knowledge a public good means ensuring that the methods, models, datasets, curricula and teaching practices are openly available, multilingual, and governed by communities — so every person can learn, adapt and contribute.</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} className="enter">
            <h3>Core Principles</h3>
            <ul>
              <li><strong>Open Access:</strong> Share datasets, models, and learning materials under permissive licenses so communities can reuse and build on them.</li>
              <li><strong>Multilingual & Culturally Relevant:</strong> Localize learning resources and interfaces to Kerala's languages and contexts so learning is inclusive.</li>
              <li><strong>Grassroots-first:</strong> Prioritise community needs and practitioner knowledge; learners become teachers within their communities.</li>
              <li><strong>Privacy & Rights-aware:</strong> Encourage small-data and privacy-preserving methods; place consent and dignity first.</li>
              <li><strong>Interoperability & Low-barrier Tools:</strong> Prefer lightweight, open formats and tooling that work offline and on modest devices.</li>
            </ul>
          </Col>

          <Col md={6} className="enter">
            <h3>Practical Programs</h3>
            <ul>
              <li><strong>Community Data & Model Libraries:</strong> Curated, documented datasets and small, task-specific models maintained by local stewards.</li>
              <li><strong>Open Curriculum & Teaching Kits:</strong> Modular lesson plans, exercises and assessments that local educators can adapt and translate.</li>
              <li><strong>Train-the-Trainer Networks:</strong> Programs that equip community facilitators to teach and mentor in their own languages.</li>
              <li><strong>Participatory Translation & Localization:</strong> Crowdsourced processes to translate datasets, prompts and UI into Malayalam and other regional languages.</li>
              <li><strong>Governance & Stewardship Councils:</strong> Community groups that set sharing norms, review sensitive datasets, and establish reuse guidelines.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <h3>Implementation Steps</h3>
            <ol>
              <li><strong>Co-design:</strong> Begin with community workshops to identify local problems and data sources; make projects demand-driven.</li>
              <li><strong>Tooling:</strong> Provide simple pipelines for data cleaning, labeling, and small-model training that work on low-spec hardware.</li>
              <li><strong>Capacity Building:</strong> Offer teacher training, peer-led study groups and accessible documentation to scale local expertise.</li>
              <li><strong>Funding & Incentives:</strong> Small grants and micro-fellowships help translate prototypes into sustained community services.</li>
              <li><strong>Measure & Share Outcomes:</strong> Track real-world impact (e.g., time saved, access improved) and publish results and lessons learned openly.</li>
            </ol>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <h4>Example Use-Cases</h4>
            <ul>
              <li>Open, Malayalam-language Q&A dataset that helps citizens find local government services.</li>
              <li>Small, locally-trained model that helps teachers quickly generate differentiated lesson prompts for classrooms.</li>
              <li>Community-curated image datasets for agriculture that enable farmer-facing advisory tools.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <Button as="a" href="/support" variant="primary" className="me-2">Support Knowledge Initiatives</Button>
            <Button as="a" href="/literacy" variant="outline-primary">Explore Literacy Programs</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Knowledge