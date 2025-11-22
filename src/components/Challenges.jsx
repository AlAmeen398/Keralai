import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bgImage from '../images/pexels-thisisengineering-3861976.jpg'


gsap.registerPlugin(ScrollTrigger);

function Challenges() {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const listRef = useRef([]);

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        // Title animation
        tl.from(titleRef.current, {
            opacity: 0,
            scale: 0.7,
            rotate: -5,
            y: 20,
            duration: 0.8,
            ease: "back.out(1.7)",
        });

        // List items stagger
        tl.from(listRef.current, {
            x: -40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.2
        }, "-=0.3");

    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className=" py-5 border-top mb-5"
                style={{
                    // Parallax-like fixed background image with a subtle white overlay for readability
                    background: `url(${bgImage}) center/cover fixed no-repeat`,
                }}
            >
                <Container >
                    <div ref={titleRef}>
                        <h3 as="h3" className='text-light'>The Challenge</h3>
                    </div>

                    <ul style={{ marginTop: "15px", color: 'white' }}>
                        {[
                            "Students graduating without AI skills that will define future careers.",
                            "Rapid workplace integration of AI creating job disruptions, especially for freshers.",
                            "Biases, deepfakes and misinformation hurting cultural representation and security — elders at risk."
                        ].map((text, i) => (
                            <li
                                key={i}
                                ref={el => listRef.current[i] = el}
                                style={{ fontSize: "1.1rem", marginBottom: "10px" }}
                            >
                                {text}
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default Challenges
