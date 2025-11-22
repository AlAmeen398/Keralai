import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Support() {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const safePartners = Array.isArray(partners) ? partners : []

  const partnerCardsRef = useRef([])
  const partnerTextRef = useRef(null)

  useEffect(() => {
    if (partnerCardsRef.current && partnerCardsRef.current.length > 0 && partnerCardsRef.current[0]) {
      gsap.from(partnerCardsRef.current, {
        scrollTrigger: {
          trigger: partnerCardsRef.current[0],
          start: 'top 85%'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }

    if (partnerTextRef.current) {
      gsap.from(partnerTextRef.current, {
        scrollTrigger: {
          trigger: partnerTextRef.current,
          start: 'top 85%'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  }, [])

  return (
    <main>
      <section className="py-5 mt-5">
        <Container>
          <h3 as="h3 " >Partners & Supporters</h3>
          <Badge bg="secondary">{loading ? 'Loading...' : safePartners.length}</Badge>

          {error && <div className="text-warning">{error}</div>}

          <Row className="mt-3">
            {safePartners.map((p, i) => (
              <Col md={4} key={p.id} className="mb-3 partner-item">
                <Card ref={(el) => (partnerCardsRef.current[i] = el)}>
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.type}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Support