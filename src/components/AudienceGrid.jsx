import React, { useEffect, useRef } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// images for audience cards
import aud1 from '../images/image9.jpg'
import aud2 from '../images/image10.jpg'
import aud3 from '../images/image11.jpg'

function AudienceGrid() {

    const cardsRef = useRef([])

    const audiences = [
        { id: 1, title: 'Kutty Makers', text: 'Pattern recognition games, Teachable Machine, Scratch — introduce foundational AI concepts.', image: aud1, route: '/kutty-makers' },
        { id: 2, title: 'Young Makers', text: 'Study jams, hackathons, GenAI projects, Kerala-specific datasets and peer learning.', image: aud2, route: '/young-makers' },
        { id: 3, title: 'Friends of the Movement', text: 'Educators, parents, elders: identify misinformation, deepfakes and practical AI impacts.', image: aud3, route: '/friends-movement' }
    ]

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 80%",
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.9,
                stagger: 0.2,
                ease: "power3.out"
            })
        }
    }, [])

    return (
        <>
            <section className="py-5 ">
                <Container>
                   
                    <h3 className=''>Who, What, Why, How</h3>
                    <Row className="mt-3">
                        {audiences.map((item, idx) => (
                            <Col md={4} className="mb-3" key={item.id}>
                                <Link to={item.route} className="text-decoration-none text-body d-block">
                                    <Card id={`audience-${item.id}`} className="h-100 info-card stat-card" ref={el => cardsRef.current[idx] = el} role="button" tabIndex={0}>
                                        <div className="stat-card-media">
                                            <img src={item.image} alt={item.title} className="stat-card-img" loading="lazy" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>
                                                <h5 as="h5">{item.title}</h5>
                                            </Card.Title>
                                            <Card.Text>
                                                {item.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AudienceGrid
