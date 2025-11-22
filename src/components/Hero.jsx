import React, { useEffect, useRef, useState } from 'react'
import {Button, Col, Container, Row } from 'react-bootstrap'
import CreepyButton from './CreepyButton'
import gsap from 'gsap';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/pexels-cottonbro-6153354.jpg';
import slide2 from '../images/pexels-tara-winstead-8386426.jpg';
import slide3 from '../images/pexels-thisisengineering-3861976.jpg';


function Hero({ onOpenPartner }) {
    const heroRef = useRef(null)
    const textRef = useRef(null);
    

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            }

        })
        // Left text animation
        tl.from(textRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out"
        });

        

    }, [])
    return (
        <>
            <header ref={heroRef} className="bg-light  border-bottom hero-fullscreen">

                <Container fluid style={{padding:'0'}}>
                    <div className='carousel-wrapper'>
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block w-100 carousel-image" src={slide1} alt="First slide" />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 carousel-image" src={slide2} alt="Second slide" />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 carousel-image" src={slide3} alt="Third slide" />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <div className="aiHeroSection">
                            <Row className="align-items-center">
                                <Col md={7} ref={textRef}>
                                    <h1 as="h1" className="display-5 fw-bold">AI for Everyone</h1>
                                    <p className="lead">A Statewide Initiative for AI Literacy — enabled by TinkerHub</p>
                                    <p className="mb-4 floating-quote">"We have a historical opportunity and responsibility to establish a human-centred framework for AI research, education, practice and policy." — Fei-Fei Li</p>
                                    <div>
                                        <CreepyButton className="me-2" onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}>Learn More</CreepyButton>
                                        <Button variant="outline-primary" onClick={() => onOpenPartner && onOpenPartner()}>Partner With Us</Button>
                                    </div>
                                </Col>
                               
                            </Row>
                        </div>
                    </div>
                </Container>
                
            </header>
        </>
    )
}

export default Hero