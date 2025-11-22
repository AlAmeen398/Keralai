import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CreepyButton from '../components/CreepyButton'
import { toast } from 'react-toastify'

gsap.registerPlugin(ScrollTrigger)

function Creaters() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.enter'), {
        opacity: 0,
        y: 28,
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
        <Row className="mb-4 mt-3">
          <Col>
            <h1 className="enter">Creators, Not Just Consumers</h1>
            <p className="lead enter">Enabling Keralites to innovate and build AI-driven solutions — not just use them. We support learners, makers, and communities to co-design practical AI that solves local challenges while protecting dignity and privacy.</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} className="enter">
            <h3>Programs & Activities</h3>
            <ul>
              <li>Hands-on maker workshops: rapid prototyping with open-source AI tools and local datasets.</li>
              <li>Community hackathons focused on public services, education and health.</li>
              <li>Mentorship networks linking domain experts, engineers and civic leaders.</li>
              <li>Seed grants and incubation for small teams building measurable impact projects.</li>
            </ul>
          </Col>

          <Col md={6} className="enter">
            <h3>Approach</h3>
            <p>We prioritize multilingual resources, participatory design, and small-data approaches that respect privacy. Projects are community-led, reproducible and evaluated against clear local outcomes.</p>

            <h4>Example Projects</h4>
            <ul>
              <li>AI-driven crop advisory for smallholder farmers using local weather and soil data.</li>
              <li>Local-language conversational agents that help citizens interact with government services.</li>
              <li>Teacher-assist tools that personalise learning plans for classrooms across Kerala.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="enter">
            <Button as="a" href="/support" variant="primary" className="me-2">Get Involved</Button>
            <CreepyButton href="/creaters" className="me-2" onClick={() => toast.success('We will Connect You Soon')}>See Workshops</CreepyButton>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Creaters