import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import './Sticker.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import imgHead from '../images/image6.jpg'
import imgHand from '../images/image7.jpg'
import imgHeart from '../images/image8.jpg'
import bgImage from '../images/image2.jpg'

gsap.registerPlugin(ScrollTrigger)

function Approach() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // respect reduced motion preference
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduce) {
        // simple fade-in for reduced motion
        gsap.from([titleRef.current, ...cardsRef.current], { opacity: 0, duration: 0.6, stagger: 0.12 })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      tl.from(titleRef.current, { opacity: 0, y: -24, duration: 0.7, ease: 'power3.out' })

      tl.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.7,
        stagger: 0.18,
        ease: 'power3.out'
      }, '-=0.35')

      // subtle floating effect on card images
      cardsRef.current.forEach(card => {
        const img = card && card.querySelector('.stat-card-img')
        if (img) {
          gsap.to(img, { y: -6, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: Math.random() })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const items = [
    { title: 'Head', text: 'Understand how AI works and why it matters in daily life.', image: imgHead },
    { title: 'Hand', text: 'Build with AI tools, create projects, solve local problems.', image: imgHand },
    { title: 'Heart', text: 'Share knowledge, mentor others, and shape an inclusive AI future.', image: imgHeart }
  ]

  return (
    <section
      id="approach"
      className="py-5"
      style={{
        width: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      ref={sectionRef}
    >
      <Container>
        <div ref={titleRef} >
          <h3 style={{ color: 'white' }}>Our Approach — Head, Hand, Heart</h3>
        </div>

        <Row className="mt-2 approach-cards g-2 ">
          {items.map((item, idx) => (
            <Col xs={12} md={4} className="mb-2 d-flex" key={item.title}>
              <Figure
                className="h-100 info-card stat-card"
                style={{ width: '100%', padding: 12, borderRadius: 12, overflow: 'hidden', background: 'white', boxShadow: '0 6px 18px rgba(14,30,37,0.06)' }}
                ref={el => (cardsRef.current[idx] = el)}
              >
                <Figure.Image
                  alt={item.title}
                  src={item.image}
                  className="stat-card-img"
                  loading="lazy"
                  style={{ width: '100%', objectFit: 'cover', borderRadius: 8 }}
                />
                <Figure.Caption>
                  <div className="sticker">
                    <div style={{ fontSize: 18, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{item.text}</div>
                    <div className="tape" />
                    <div className="tape-bottom" />
                  </div>
                </Figure.Caption>
              </Figure>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Approach
