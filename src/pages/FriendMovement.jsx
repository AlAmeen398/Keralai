import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fmImg from '../images/image11.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function FriendMovement() {
  const root = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!root.current) return
    const ctx = gsap.context(() => {
      if (prefersReduced) return

      gsap.from(root.current.querySelectorAll('.fm-animate'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' }
      })

      if (imgRef.current) {
        gsap.fromTo(imgRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' })
        gsap.to(imgRef.current, { y: -6, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut', delay: 0.6 })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-5 mt-5" ref={root}>
      <Container>
        <Row className="align-items-center mb-4 mt-4">
          <Col md={7} className="fm-animate">
            <h1 className="enter">Friends of the Movement</h1>
            <p className="lead">Educators • Professionals • Parents • Elders • Community Leaders</p>

            <p className="fm-animate">
              They are the pillars who support, guide, and uplift the young generation as they step into the world of AI.
              Our initiative welcomes individuals from all walks of life who believe in empowering society through knowledge,
              technology, and collective growth.
            </p>

            <h4 className="mt-3 fm-animate">Why their role matters</h4>
            <ul className="fm-animate">
              <li><strong>Guiding the next generation:</strong> Educators, parents and mentors help youngsters learn AI responsibly and creatively.</li>
              <li><strong>Bringing real-world wisdom:</strong> Professionals and community leaders provide practical insights about AI in industry.</li>
              <li><strong>Creating supportive environments:</strong> Homes, classrooms and communities help young people learn confidently and safely.</li>
              <li><strong>Ensuring ethical use:</strong> With guidance from elders and experts, we promote ethical, safe and purposeful AI adoption.</li>
            </ul>

            <h4 className="mt-3 fm-animate">Who can join?</h4>
            <ul className="fm-animate">
              <li><strong>Educators:</strong> Teachers introducing digital literacy and project-based learning.</li>
              <li><strong>Professionals:</strong> Industry experts who mentor youth and support AI-driven innovation.</li>
              <li><strong>Parents:</strong> Caregivers who want children to learn modern skills safely.</li>
              <li><strong>Elders & Retired Experts:</strong> Seniors offering decades of experience and mentorship.</li>
              <li><strong>Community Leaders:</strong> Advocates for digital inclusion and local learning hubs.</li>
            </ul>

            <h4 className="mt-3 fm-animate">How to support</h4>
            <ul className="fm-animate">
              <li>Mentor students and young adults.</li>
              <li>Conduct awareness sessions and public demonstrations.</li>
              <li>Volunteer at local workshops and events.</li>
              <li>Share domain knowledge in roundtables and sector-specific talks.</li>
              <li>Help bridge the digital divide with local hubs and resource sharing.</li>
            </ul>

            <div className="mt-4 fm-animate">
              <Button as="a" href="/support" variant="primary" className="me-2">Become a Mentor</Button>
              <Button as="a" href="/friends-movement" variant="outline-primary">Host an Event</Button>
            </div>
          </Col>

          <Col md={5} className="text-center fm-animate">
            <img ref={imgRef} src={fmImg} alt="Community workshop" className="img-fluid rounded shadow-sm" style={{ maxHeight: 420, objectFit: 'cover' }} />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="fm-animate">
            <h5>Mentorship</h5>
            <p>Pairing experienced professionals with students for guidance on projects, careers and ethical AI use.</p>
          </Col>
          <Col md={4} className="fm-animate">
            <h5>Awareness & Safety</h5>
            <p>Sessions on spotting misinformation, detecting deepfakes, and protecting privacy and security.</p>
          </Col>
          <Col md={4} className="fm-animate">
            <h5>Community Programs</h5>
            <p>Workshops, learning circles and demos that bring AI to neighbourhoods, schools and workplaces.</p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h5>Tagline ideas</h5>
            <ul>
              <li>“Together, We Shape the Future.”</li>
              <li>“Guiding the Next Generation into the AI Era.”</li>
              <li>“A Movement Powered by Community.”</li>
              <li>“Everyone Has a Role in Building a Smarter Tomorrow.”</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}