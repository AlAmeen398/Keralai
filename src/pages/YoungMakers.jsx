import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ymImg from '../images/image10.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function YoungMakers() {
  const root = useRef(null)
  const heroImg = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!prefersReduced && root.current) {
        gsap.from(root.current.querySelectorAll('.enter'), {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 90%' }
        })

        if (heroImg.current) {
          gsap.fromTo(heroImg.current, { opacity: 0, y: 10, scale: 0.99 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out' })
          gsap.to(heroImg.current, { y: -6, repeat: -1, yoyo: true, duration: 3.2, ease: 'sine.inOut', delay: 0.6 })
        }
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-5 mt-5" ref={root}>
      <Container>
        <Row className="align-items-center mb-4 mt-5">
          <Col md={8}>
            <h1 className="enter">Empowering Young Adults with AI</h1>
            <p className="lead enter">Unlock creativity, accelerate your skills, and build a future-proof career with the power of Artificial Intelligence — designed for today’s rising generation.</p>
            <div className="enter mt-3">
              <Button variant="primary" className="me-2" onClick={() => toast.success('Start Learning — opened')}>Start Learning</Button>
              <Button variant="outline-primary" className="me-2" onClick={() => toast.success('Explore AI Tools — opened')}>Explore AI Tools</Button>
              <Button variant="secondary" onClick={() => toast.success('Joined the community')}>Join the Community</Button>
            </div>
          </Col>

          <Col md={4} className="text-center">
            <div style={{maxWidth:320, margin:'0 auto'}}>
              <img ref={heroImg} src={ymImg} alt="Young adults learning AI" className="img-fluid rounded shadow-sm" />
            </div>
          </Col>
        </Row>

        <Row className="mb-4 enter">
          <Col>
            <h3>About</h3>
            <p>Young adults between 17 and 27 are stepping into a world fully driven by technology. Our mission is to make AI accessible, practical, and future-ready — helping students, creators, freelancers, entrepreneurs, and early professionals use AI to level up their skills and careers.</p>
            <p>Whether you're working on college projects, building a portfolio, launching a startup idea, or exploring creativity, AI helps you think faster, work smarter, and create world-class output.</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="enter">
            <h4>Why AI for Young Adults?</h4>
            <ul>
              <li><strong>Boosts Creativity:</strong> Transform ideas into professional designs, videos and digital experiences.</li>
              <li><strong>Builds Future-Ready Skills:</strong> Learn AI workflows, automation, coding, data analysis and prompt engineering.</li>
              <li><strong>Enhances Learning & Work:</strong> From research to presentations — AI speeds up academic and professional tasks.</li>
              <li><strong>Opens Career & Business Opportunities:</strong> AI skills are essential for jobs, freelancing and entrepreneurship.</li>
            </ul>
          </Col>

          <Col md={6} className="enter">
            <h4>Features</h4>
            <ul>
              <li><strong>AI Learning Hub:</strong> Short courses, career pathways and tutorials tailored for young adults.</li>
              <li><strong>AI Creativity Studio:</strong> Create brand kits, marketing content and high-quality visuals with AI tools.</li>
              <li><strong>AI for College & Career:</strong> Assignment help, resume building, interview prep and portfolio tools.</li>
              <li><strong>Innovation Lab:</strong> Build chatbots, apps, workflows and automation tools with mentorship.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-4 enter">
          <Col>
            <h4>Success Stories</h4>
            <blockquote className="blockquote">“I built a startup landing page using AI in 2 hours.” — 22-year-old developer</blockquote>
            <blockquote className="blockquote">“AI helped me create a professional portfolio and get freelance clients.” — 19-year-old designer</blockquote>
            <blockquote className="blockquote">“I improved my productivity and scored higher in my college projects.” — 20-year-old student</blockquote>
          </Col>
        </Row>

        <Row className="mb-4 enter">
          <Col>
            <h4>What You Can Build</h4>
            <ul>
              <li>Full professional websites and portfolios</li>
              <li>UI/UX designs & brand kits</li>
              <li>Coding projects, automation tools and chatbots</li>
              <li>Study reports, presentations, videos and short-form content</li>
              <li>Business plans, pitch decks and resumes for applications</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <p>Students engage through study jams, hackathons and mentoring; they innovate by developing applications with GenAI and LLMs and contribute to Kerala-specific AI models and datasets through peer learning and industry training.</p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button variant="primary" className="me-2" onClick={() => toast.success('Start Your AI Journey — opened')}>Start Your AI Journey</Button>
            <Button variant="outline-primary" onClick={() => toast.success('See Project Challenges — opened')}>See Project Challenges</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}