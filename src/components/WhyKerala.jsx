import React, { useEffect, useRef } from 'react'
// import GlitchTitle from './GlitchTitle'
import { Col, Container, Row } from 'react-bootstrap'
import StatCard from './StatCard'
import { Link } from 'react-router-dom'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

// images for the stat cards
import img1 from '../images/image3.jpg'
import img2 from '../images/image4.jpg'
import img3 from '../images/image5.jpg'

function WhyKerala() {


    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {

        // Title animation
        gsap.from(sectionRef.current.querySelector("h2"), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
            }
        });

        // Cards animation
        gsap.from(cardsRef.current, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Small underline reveal animation for the heading
        const underline = sectionRef.current.querySelector('.section-underline');
        if (underline) {
            gsap.fromTo(underline, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left center', duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 88%' } });
        }

    }, []);

    <style>

    </style>

    return (
        <>
            <section id="why" className="py-5 " ref={sectionRef}>
                <Container className='mt-5'>

                    <div className="d-flex align-items-center gap-3 ">
                        <h2 as="h2" className="mb-0"> Why Kerala needs AI literacy now?</h2>

                        <span className="rotate-badge" aria-hidden="true" title="AI growth badge">
                            <svg className="rotate-in-place" width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                                <circle cx="22" cy="22" r="11" stroke="#0c4ab6" strokeWidth="2" strokeLinecap="round" />
                                <path d="M22 6 L22 2" stroke="#0c4ab6" strokeWidth="2" strokeLinecap="round" />
                                <path d="M38 22 L42 22" stroke="#0c4ab6" strokeWidth="2" strokeLinecap="round" />
                                <path d="M22 38 L22 42" stroke="#0c4ab6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>

                    </div>
                    <div className="section-underline" aria-hidden="true" />


                    <Row className="g-3 mt-3">
                        {[
                            { title: 'Literacy for All', text: 'Equitable AI education that empowers every citizen; position Kerala as a global model.', image: img1, route: '/literacy' },
                            { title: 'Creators Not Consumers', text: 'Enable Keralites to innovate and build AI-driven solutions.', image: img2, route: '/creaters' },
                            { title: 'Knowledge as Public Good', text: 'Open, multilingual, grassroots-first approaches where learners become...', image: img3, route: '/knowldege' }
                        ].map((item, idx) => (
                            <Col md={4} key={idx}>
                                <Link to={item.route} className="text-decoration-none text-body">
                                    <div ref={el => cardsRef.current[idx] = el} role="button" tabIndex={0} aria-label={item.title}>
                                        <StatCard title={item.title} image={item.image}>
                                            {item.text}
                                        </StatCard>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WhyKerala
