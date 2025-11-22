import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import gsap from 'gsap'
import heroImg from '../images/pexels-thisisengineering-3861976.jpg'
import CreepyButton from '../components/CreepyButton'
import { toast } from 'react-toastify'

function LiteracyForAll() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.enter'), { y: 18, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <main className="py-5 mt-5">
      <Container ref={ref}>
        <Row className="align-items-center g-4 mt-2">
          <Col md={6}>
            <h1 className="enter">Literacy for All — Equitable AI Education</h1>
            <p className="lead enter">Equitable AI education that empowers every citizen to understand and apply AI responsibly. As Kerala pioneered digital literacy before, we can position ourselves as a global model for AI education rooted in social responsibility and community well-being.</p>

            <Card className="mb-3 enter">
              <Card.Body>
                <Card.Title>Why this matters</Card.Title>
                <Card.Text>
                  AI is reshaping work, public services, and daily life. Broad-based literacy helps people use AI tools effectively, spot misinformation, protect their privacy, and participate in shaping local solutions.
                </Card.Text>
              </Card.Body>
            </Card>

            <div className="enter">
              <h5>Core goals</h5>
              <ul>
                <li>Accessible learning pathways for students, teachers and the wider public.</li>
                <li>Hands-on projects that solve local problems (multilingual datasets encouraged).</li>
                <li>Training educators to teach AI responsibly and inclusively.</li>
                <li>Open resources and community-led mentorship to scale impact.</li>
              </ul>
            </div>

            <div className="mt- enter d-flex align-items-center gap-2">
              <CreepyButton className="me-2" onClick={() => toast.success('We will Connect You Soon')}>Get Involved</CreepyButton>
              <Button variant="outline-primary" onClick={() => toast.error('Please try After Sometime')}>Resources</Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="enter">
              <img src={heroImg} alt="AI learning" style={{ width: '100%', borderRadius: 12, objectFit: 'cover', maxHeight: 420 }} />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={8}>
            <Card className="p-3 enter">
              <Card.Body>
                <h4>Program ideas</h4>
                <ol>
                  <li>Community workshops: short, hands-on modules tailored to local contexts.</li>
                  <li>School integration: project-based learning modules for STEM and humanities classes.</li>
                  <li>Open datasets and challenges: encourage local teams to build solutions for state needs.</li>
                </ol>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 enter">
              <Card.Body>
                <h5>Success metrics</h5>
                <ul>
                  <li>Number of trained educators and community mentors</li>
                  <li>Student projects deployed in communities</li>
                  <li>Open resources contributed and reused</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default LiteracyForAll