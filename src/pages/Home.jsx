import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import WhyKerala from '../components/WhyKerala';
import Challenges from '../components/Challenges';
// FullscreenWrapper removed — using direct section rendering
import Approach from '../components/Approach';
import AudienceGrid from '../components/AudienceGrid';
import slide1 from '../images/image2.jpg';
import PartnerModal from '../components/PartnerModal';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const [showPartnerModal, setShowPartnerModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [partners, setPartners] = useState([]);
    const [error, setError] = useState(null);

    const safePartners = Array.isArray(partners) ? partners : [];

    // Animation Refs
    const partnerCardsRef = useRef([]);
    const partnerTextRef = useRef(null);
    const partnerBtnRef = useRef(null);
    const campaignBoxRef = useRef(null);
    const heroRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // Partner card stagger
        if (partnerCardsRef.current && partnerCardsRef.current.length > 0 && partnerCardsRef.current[0]) {
            gsap.from(partnerCardsRef.current, {
                scrollTrigger: {
                    trigger: partnerCardsRef.current[0],
                    start: "top 85%",
                },
                opacity: 0,
                y: 40,
                duration: 0.7,
                stagger: 0.2,
                ease: "power3.out"
            });
        }

        // Left text slide-in
        if (partnerTextRef.current) {
            gsap.from(partnerTextRef.current, {
                scrollTrigger: {
                    trigger: partnerTextRef.current,
                    start: "top 85%",
                },
                opacity: 0,
                x: -40,
                duration: 0.8,
                ease: "power3.out"
            });
        }

        // Right button slide-in
        if (partnerBtnRef.current) {
            gsap.from(partnerBtnRef.current, {
                scrollTrigger: {
                    trigger: partnerBtnRef.current,
                    start: "top 85%",
                },
                opacity: 0,
                x: 40,
                duration: 0.8,
                ease: "power3.out"
            });
        }

        // Soft fade for campaign text box
        if (campaignBoxRef.current) {
            gsap.from(campaignBoxRef.current, {
                scrollTrigger: {
                    trigger: campaignBoxRef.current,
                    start: "top 85%"
                },
                opacity: 0,
                y: 20,
                duration: 0.9,
                ease: "power2.out"
            });
        }

        // Hero reveal animation
        if (heroRef.current) {
            gsap.from(heroRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top 90%'
                },
                opacity: 0,
                y: 20,
                duration: 0.9,
                ease: 'power3.out'
            });
        }

    }, []);

    // Scroll to a section if requested via navigation state (Header -> navigate('/', { state: { scrollTo: 'why' } }))
    useEffect(() => {
        if (location && location.state && location.state.scrollTo) {
            const id = location.state.scrollTo;
            // slight delay to ensure the element is mounted
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // clear the history state so repeated navigation doesn't re-trigger
                    try {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (window.location.hash || ''))
                    } catch (e) {
                        // ignore
                    }
                }
            }, 80);
        }
    }, [location]);

    return (
        <>
            <Hero onOpenPartner={() => setShowPartnerModal(true)} />

            <main>

                {/* excluded from animation */}
                <WhyKerala />
                <Challenges />
                {/* Approach and Audience grid (hero wrapper removed) */}
                <div ref={heroRef} style={{ display: 'none' }} />
                <Approach />
                <AudienceGrid />

                {/* Benchmarks section converted to JSX with two columns: chart (left) and content (right) */}
                <section id="benchmarks" className="py-5">
                    <Container>
                        <div className="text-center mb-3 text-uppercase text-primary" style={{ fontWeight: 600 }}>Benchmarks</div>
                        <h3 className="h1 text-center mx-auto font-medium mb-4">Web Search Driven by Research</h3>

                        <Row className="align-items-center gy-4">
                            <Col lg={6}>
                                <div style={{ width: '100%', height: 320, minWidth: 0 }}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%', cursor: 'default' }}>
                                        <svg role="application" tabIndex={0} className="recharts-surface" viewBox="0 0 584 320" style={{ width: '100%', height: '100%' }}>
                                            <defs>
                                                <clipPath id="recharts1-clip"><rect x="60" y="0" height="320" width="524" /></clipPath>
                                            </defs>
                                            <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                                                <line className="recharts-cartesian-axis-line" stroke="#666" x1="60" y1="290" x2="584" y2="290" />
                                                <g className="recharts-cartesian-axis-ticks">
                                                    <g className="recharts-layer recharts-cartesian-axis-tick">
                                                        <line className="recharts-cartesian-axis-tick-line" stroke="#666" x1="112.4" y1="296" x2="112.4" y2="290" />
                                                        <text className="recharts-text recharts-cartesian-axis-tick-value " x="112.4" y="314" textAnchor="middle" fill="#666">Tavily</text>
                                                    </g>
                                                    <g className="recharts-layer recharts-cartesian-axis-tick">
                                                        <line className="recharts-cartesian-axis-tick-line" stroke="#666" x1="217.2" y1="296" x2="217.2" y2="290" />
                                                        <text className="recharts-text recharts-cartesian-axis-tick-value" x="217.2" y="314" textAnchor="middle" fill="#666">Perplexity Search</text>
                                                    </g>
                                                    <g className="recharts-layer recharts-cartesian-axis-tick">
                                                        <line className="recharts-cartesian-axis-tick-line" stroke="#666" x1="322" y1="296" x2="322" y2="290" />
                                                        <text className="recharts-text recharts-cartesian-axis-tick-value" x="322" y="314" textAnchor="middle" fill="#666">Google</text>
                                                    </g>
                                                    <g className="recharts-layer recharts-cartesian-axis-tick">
                                                        <line className="recharts-cartesian-axis-tick-line" stroke="#666" x1="426.8" y1="296" x2="426.8" y2="290" />
                                                        <text className="recharts-text recharts-cartesian-axis-tick-value" x="426.8" y="314" textAnchor="middle" fill="#666">Brave</text>
                                                    </g>
                                                    <g className="recharts-layer recharts-cartesian-axis-tick " >
                                                        <line className="recharts-cartesian-axis-tick-line" stroke="#666" x1="531.6" y1="296" x2="531.6" y2="290" />
                                                        <text className="recharts-text recharts-cartesian-axis-tick-value " x="531.6" y="314" textAnchor="middle" fill="#666">Exa</text>
                                                    </g>
                                                </g>
                                            </g>
                                            <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                <line className="recharts-cartesian-axis-line" stroke="#666" x1="60" y1="0" x2="60" y2="290" />
                                                <text transform="rotate(-90, 30, 145)" x="30" y="145" className="recharts-text recharts-label" textAnchor="middle" fill="#808080">Accuracy (%)</text>
                                            </g>
                                            <g className="recharts-layer recharts-bar " style={{ margin: '120px' }}>
                                                <g className="recharts-layer recharts-bar-rectangles">
                                                    <path name="Tavily" fill="rgba(29, 78, 216, 1.0)" className="recharts-rectangle" d="M 70.48,45.1713 h 83 v 244.8287 h -83 Z" />
                                                    <path name="Perplexity Search" fill="rgba(59, 130, 246, 0.8)" className="recharts-rectangle" d="M 175.28,112.0249 h 83 v 177.9751 h -83 Z" />
                                                    <path name="Google (SERP)" fill="rgba(59, 130, 246, 0.6)" className="recharts-rectangle" d="M 280.08,145.4517 h 83 v 144.5483 h -83 Z" />
                                                    <path name="Brave" fill="rgba(59, 130, 246, 0.4)" className="recharts-rectangle" d="M 384.88,200.5607 h 83 v 89.4393 h -83 Z" />
                                                    <path name="Exa" fill="rgba(59, 130, 246, 0.25)" className="recharts-rectangle" d="M 489.68,244.8287 h 83 v 45.1713 h -83 Z" />
                                                </g>
                                                <g className="recharts-layer recharts-label-list ">
                                                    <text x="111.98" y="167.5857" className="recharts-text recharts-label" textAnchor="middle" style={{ fontSize: 12, fill: 'white' }}>93.3</text>
                                                    <text x="216.78" y="201.0125" className="recharts-text recharts-label" textAnchor="middle" style={{ fontSize: 12, fill: 'white' }}>85.9</text>
                                                    <text x="321.58" y="217.7259" className="recharts-text recharts-label" textAnchor="middle" style={{ fontSize: 12, fill: 'white' }}>82.2</text>
                                                    <text x="426.38" y="245.2804" className="recharts-text recharts-label" textAnchor="middle" style={{ fontSize: 12, fill: 'white' }}>76.1</text>
                                                    <text x="531.18" y="267.4143" className="recharts-text recharts-label" textAnchor="middle" style={{ fontSize: 12, fill: 'white' }}>71.2</text>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="p-3 rounded" style={{ backgroundColor: '#f3f4f6', minHeight: 320 }}>
                                    <div className="mb-3">
                                        <h5 className="h6 mb-2">About this benchmark</h5>
                                        <p className="text-muted small">OpenAI’s SimpleQA benchmark measures the ability of language models to answer short, fact-seeking questions. It uses a curated set of factual queries designed to test how accurately a model can retrieve and synthesize factual information. Read more about the SimpleQA benchmark <a target="_blank" rel="noreferrer" href="https://github.com/">here</a>.</p>
                                    </div>
                                    <div>
                                        <h5 className="h6 mb-2">Methodology</h5>
                                        <p className="text-muted small">We ran the full SimpleQA dataset on each provider and used GPT-4.1 to generate predicted answers from the documents retrieved by that provider. These predictions were then graded with SimpleQA’s classifier. The final accuracy was calculated by dividing the number of correct answers by the total number of questions. See the full implementation <a target="_blank" rel="noreferrer" href="https://github.com/">here</a>.</p>
                                        <p className="small"><strong>Data notes:</strong> include_raw_content=False, contents.highlights=True, max_tokens_per_page=512; max 10 documents per query.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                {/* Partners Section moved to Support page */}

                {/* How to Partner */}
                <style>{`/* Partner button hover/focus styles (scoped) */
                    .partner-btn { transition: transform 180ms cubic-bezier(.2,.9,.2,1), box-shadow 180ms ease; will-change: transform, box-shadow; }
                    .partner-btn:hover, .partner-btn:focus { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.12); }
                    .partner-btn:active { transform: translateY(-1px) scale(0.995); }
                    @media (prefers-reduced-motion: reduce) { .partner-btn { transition: none; transform: none; box-shadow: none; } }
                `}</style>

                <section id="partners" className="py-4 text-black" style={{ backgroundColor: 'rgba(144, 206, 245, 1)' }}>
                    <Container>
                        <Row>
                            <Col md={8} ref={partnerTextRef}>
                                <h4 as="h4">How You Can Partner</h4>
                                <ul>
                                    <li>Host Learning Programs</li>
                                    <li>Volunteer & Mentor</li>
                                    <li>Sponsor Toolkits & Programs</li>
                                    <li>Contribute to the Repository</li>
                                </ul>
                            </Col>

                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column gap-2">
                                    <Button as={Link} to="/partnerwithus" variant="outline-light">Know More</Button>
                                    <Button
                                        className="partner-btn"
                                        variant="primary"
                                        ref={partnerBtnRef}
                                        onClick={() => setShowPartnerModal(true)}
                                    >
                                        Partner With Us
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Campaign Text */}
                <section className="py-4">
                    <Container>
                        {/* <GlitchTitle >Full campaign text</GlitchTitle> */}
                        <h5 as="h5">Full campaign text</h5>

                        <Card
                            className="mt-3 shadow-sm"
                            ref={campaignBoxRef}
                            style={{ borderRadius: "14px" }}
                        >
                            <Card.Body
                                style={{
                                    whiteSpace: 'pre-wrap',
                                    maxHeight: 320,
                                    overflow: 'auto',
                                    lineHeight: '1.7'
                                }}
                            >
                                {`The “AI for Everyone” initiative, enabled by TinkerHub, is a statewide program aiming to democratize AI knowledge across Kerala.

Building on Kerala’s digital literacy legacy, it aims to make communities active creators in the AI era, addressing student skill gaps, workforce changes, and misinformation, while positioning Kerala as a global model for responsible AI.

(Full campaign details are included in the source document.)`}
                            </Card.Body>
                        </Card>
                    </Container>
                </section>

            </main>

            <PartnerModal
                show={showPartnerModal}
                onHide={() => setShowPartnerModal(false)}
            />
        </>
    )
}

export default Home
