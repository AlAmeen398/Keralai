import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import kuttyImg from '../images/image9.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function KuttyMakers() {
  const rootRef = useRef(null)
  const badgeRef = useRef(null)
  const eyesRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from(rootRef.current.querySelectorAll('.enter'), {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 90%' }
        })

        // playful badge bounce
        gsap.to(badgeRef.current, {
          y: -10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 0.9
        })

        // gentle float animation for image (subtle, kid-friendly)
        const imgEl = rootRef.current.querySelector('.kutty-img')
        if (imgEl) {
          gsap.fromTo(imgEl, { opacity: 0, y: 10, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out' })
          gsap.to(imgEl, { y: -8, repeat: -1, yoyo: true, duration: 3.5, ease: 'sine.inOut', delay: 0.5 })
        }
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const svgEl = eyesRef.current
    if (!svgEl) return

    const eyes = [
      { eye: svgEl.querySelector('#eye-left'), pupil: svgEl.querySelector('#pupil-left'), offsetX: 0 },
      { eye: svgEl.querySelector('#eye-right'), pupil: svgEl.querySelector('#pupil-right'), offsetX: 0 }
    ]

    const updateEye = (ev, { eye, pupil, offsetX }) => {
      const eyeRect = eye.getBoundingClientRect()
      const centerX = eyeRect.left + eyeRect.width / 2
      const centerY = eyeRect.top + eyeRect.height / 2

      const distX = ev.clientX - centerX
      const distY = ev.clientY - centerY

      const pupilRect = pupil.getBoundingClientRect()
      const maxDistX = pupilRect.width / 2
      const maxDistY = pupilRect.height / 2

      const angle = Math.atan2(distY, distX)

      const newPupilX = offsetX + Math.min(maxDistX, Math.max(-maxDistX, Math.cos(angle) * maxDistX))
      const newPupilY = Math.min(maxDistY, Math.max(-maxDistY, Math.sin(angle) * maxDistY))

      const svgCTM = svgEl.getScreenCTM()
      const scaledPupilX = svgCTM ? newPupilX / svgCTM.a : newPupilX
      const scaledPupilY = svgCTM ? newPupilY / svgCTM.d : newPupilY

      pupil.setAttribute('transform', `translate(${scaledPupilX}, ${scaledPupilY})`)
    }

    const calcOffset = () => {
      for (const props of eyes) {
        props.pupil.removeAttribute('transform')
        const eyeRect = props.eye.getBoundingClientRect()
        const pupilRect = props.pupil.getBoundingClientRect()
        props.offsetX = ((eyeRect.right - pupilRect.right) - (pupilRect.left - eyeRect.left)) / 2
      }
    }

    calcOffset()

    const onResize = () => calcOffset()
    window.addEventListener('resize', onResize)

    let frame = 0
    const onMouse = (ev) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        for (const e of eyes) updateEye(ev, e)
      })
    }

    window.addEventListener('mousemove', onMouse)

    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="py-5 mt-5" ref={rootRef}>
      <Container>
        <Row className="align-items-center mb-4 mt-4">
          <Col md={8}>
            <h1 className="enter">AI for Young Innovators </h1>
            <p className="lead enter">Learn, create, and explore the world of Artificial Intelligence — even if you’re just getting started.</p>

            <div className="enter mt-3">
              <Button href="/start-learning" className="me-2">Start Learning</Button>
              <Button href="/tools" variant="outline-primary" className="me-2">Try AI Tools</Button>
              <Button href="/community" variant="secondary">Join the Community</Button>
            </div>

            <div className="mt-4 enter">
              <h4>About</h4>
              <p>Kids and teens today are growing up in a digital world — and AI is the next big skill. Our track helps students aged 10 to 17 learn AI in fun, simple, and creative ways. From school projects to hobby learning, every youngster can use AI to think smarter and create amazing things.</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div ref={badgeRef} aria-hidden className="badge-robot" style={{ display: 'inline-block' }}>
              <svg width="80" height="80" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
                <rect x="8" y="18" width="48" height="34" rx="6" fill="#ffd54f" stroke="#ffb300" />
                <circle cx="24" cy="32" r="4" fill="#263238" />
                <circle cx="40" cy="32" r="4" fill="#263238" />
                <rect x="28" y="40" width="8" height="4" rx="2" fill="#263238" />
              </svg>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4 enter">
          <Col xs="auto" className="text-center">
            <div>
              <style>{`#eyes { --size: clamp(64px, 30vi, 256px); width: var(--size); height: var(--size); display:block; margin:0 auto; }
                .eyes-wrapper p { margin-top: .5rem; }
                .eyes-wrapper a { font-family: sans-serif; font-size: 1rem; color: #333; }
              `}</style>
              <div className="eyes-wrapper">
                <div className="eyes-space" style={{ display: 'inline-block' }}>
                  <svg ref={eyesRef} id="eyes" width="128" height="128" viewBox="0 0 128 128" role="img" aria-label="googly eyes emoji that track the mouse cursor">
                    <defs>
                      <linearGradient id="a" x1="0" x2="0" y1="46.676" y2="82.083" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: '#424242' }} />
                        <stop offset="1" style={{ stopColor: '#212121' }} />
                      </linearGradient>
                      <g id="eye-shape">
                        <path style={{ fill: '#fafafa' }} d="M34.16 106.51C18.73 106.51 6.19 87.44 6.19 64s12.55-42.51 27.97-42.51S62.13 40.56 62.13 64s-12.55 42.51-27.97 42.51" />
                        <path style={{ fill: '#b0bec5' }} d="M34.16 23.49c6.63 0 12.98 4 17.87 11.27 5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27C11.06 85.49 8.19 75.1 8.19 64s2.88-21.49 8.1-29.24c4.89-7.27 11.23-11.27 17.87-11.27m0-4C17.61 19.49 4.19 39.42 4.19 64s13.42 44.51 29.97 44.51S64.13 88.58 64.13 64 50.71 19.49 34.16 19.49" />
                      </g>
                      <path id="pupil-shape" style={{ fill: 'url(#a)' }} d="M25.63 59.84c-2.7-2.54-2.1-7.58 1.36-11.26.18-.19.36-.37.55-.54-1.54-.87-3.23-1.36-5.01-1.36-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7 13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05-3.24 2.33-7.11 2.64-9.38.51" />
                    </defs>
                    <use href="#eye-shape" id="eye-left" />
                    <use href="#pupil-shape" id="pupil-left" />
                    <g transform="translate(60 0)">
                      <use href="#eye-shape" id="eye-right" />
                      <use href="#pupil-shape" id="pupil-right" />
                    </g>
                  </svg>
                </div>

              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mb-4">
          <Col md={4} className="enter">
            <h4>Head — Understand</h4>
            <p>Help children grasp the idea of pattern recognition and simple logic. Use stories and visuals to explain how examples form the basis of decisions in AI.</p>
          </Col>
          <Col md={4} className="enter">
            <h4>Hand — Build</h4>
            <p>Hands-on activities with block tools (Scratch) and Teachable Machine let kids create simple projects and see models behave in real time.</p>
          </Col>
          <Col md={4} className="enter">
            <h4>Heart — Create</h4>
            <p>Encourage sharing, mentoring and presenting projects — children learn by teaching peers and connecting projects to local stories.</p>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <h4>Why AI is perfect for ages 10–17</h4>
            <ul>
              <li><strong>Easy to Learn:</strong> Simple tools help young minds explore AI without needing coding experience.</li>
              <li><strong>Helps with Studies:</strong> AI can assist with explanations, notes, presentations and project ideas.</li>
              <li><strong>Boosts Creativity:</strong> Design posters, write stories, create logos and build mini-apps with AI.</li>
              <li><strong>Encourages Problem-Solving:</strong> Learn to think like creators and engineers.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-3 enter">
          <Col md={6}>
            <h5>For ages 10–13</h5>
            <ul>
              <li>Create cartoon characters with AI.</li>
              <li>Make school project posters.</li>
              <li>Generate simple stories & poems.</li>
              <li>Build fun quiz apps.</li>
              <li>Learn basics of coding with visual tools.</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>For ages 14–17</h5>
            <ul>
              <li>Design a complete website.</li>
              <li>Build chatbot projects.</li>
              <li>Create animated short videos.</li>
              <li>Learn Python & AI basics.</li>
              <li>Make digital portfolios for school.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <h4>Features</h4>
            <ul>
              <li><strong>AI Creativity Zone:</strong> Designs, drawings, logo making, and story creation tools for young creators.</li>
              <li><strong>Study Helper:</strong> Homework explanations, science project ideas, notes, and smart study tools.</li>
              <li><strong>Beginner AI Lab:</strong> Hands-on practice to build chatbots, websites, and mini apps.</li>
              <li><strong>Project Challenges:</strong> Monthly AI challenges where students can submit creations and win badges.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 enter">
          <Col>
            <h4>Students' Success Stories</h4>
            <blockquote>“I used AI to make my science fair model look amazing!” — 12-year-old</blockquote>
            <blockquote>“AI helped me build a website for my school project.” — 15-year-old</blockquote>
            <blockquote>“I learned coding faster with AI tools.” — 17-year-old</blockquote>
          </Col>
        </Row>

        <Row className="mt-3 enter">
          <Col>
            <h5>Skills students will learn</h5>
            <ul>
              <li>Creativity & design</li>
              <li>Coding basics</li>
              <li>Logical thinking</li>
              <li>Problem-solving</li>
              <li>Website building</li>
              <li>Safe AI usage</li>
            </ul>
            <p><strong>Safe for young users:</strong> We provide AI learning that is child-safe, beginner-friendly, and parent/teacher-approved.</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="enter">
            <div className="rounded overflow-hidden" style={{ maxWidth: 360 }}>
              <img src={kuttyImg} alt="Kids learning with AI" className="img-fluid kutty-img" />
            </div>
          </Col>
          <Col md={6} className="enter">
            <p>Images and animations are used to create a friendly, tangible experience for children: bright illustrations, step-by-step project previews and live model previews help them connect cause and effect.</p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} className="enter">
            <h5>Who</h5>
            <p>Kids aged 10–17 who are curious and playful — students who like games, stories and making things with technology.</p>
          </Col>
          <Col md={6} className="enter">
            <h5>What</h5>
            <p>Develop curiosity and familiarity with foundational AI concepts such as pattern recognition and logic through short, guided projects.</p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} className="enter">
            <h5>Why</h5>
            <p>Children are already immersed in AI. A friendly, formal introduction guides their curiosity so they become creators and critical thinkers rather than passive consumers.</p>
          </Col>
          <Col md={6} className="enter">
            <h5>How</h5>
            <p>Through pattern recognition games, sorting exercises, AI storybooks and hands-on experiments using tools like Teachable Machine. Activities are short, repeatable and include a show-and-tell to reinforce learning.</p>
          </Col>
        </Row>

        <Row className="mt-3 enter">
          <Col>
            <h5>Playful, child-friendly animations (ideas)</h5>
            <ul>
              <li>Animated sprites that react when a model guesses correctly — kids get instant, joyful feedback.</li>
              <li>Small confetti bursts (GSAP-controlled SVG) when a project succeeds to celebrate learning milestones.</li>
              <li>Interactive storybook panels where children pick examples and watch a simple model adapt in real time.</li>
            </ul>
            <p className="mt-2">Animations are kept subtle and respect reduced-motion preferences. They are learning aids — not distractions.</p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button as="a" href="/young-makers" variant="primary" className="me-2">See Young Makers</Button>
            <Button as="a" href="/friends-movement" variant="outline-primary">For Educators</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default KuttyMakers