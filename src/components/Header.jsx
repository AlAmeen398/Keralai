import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import image from '../images/imagelogo2.png';

function Header() {
    const [visible, setVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastY = useRef(0);

    useEffect(() => {
        lastY.current = window.scrollY || 0;
        const onScroll = () => {
            const y = window.scrollY || 0;
            // track whether we're at the very top
            setIsAtTop(y <= 0);

            // always show at very top
            if (y <= 0) {
                setVisible(true);
            } else if (y > lastY.current && y > 80) {
                // scrolling down -> hide
                setVisible(false);
            } else {
                // scrolling up -> show
                setVisible(true);
            }
            lastY.current = y;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollTarget = (targetId) => {
        // If we're already on home, try to scroll immediately
        if (location.pathname === '/') {
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }
        // Otherwise navigate to home and pass the scroll target in location state
        navigate('/', { state: { scrollTo: targetId } });
    };

    return (
        <header
            className="site-header  "
            style={{
                
                position: isAtTop ? 'absolute' : 'fixed',
                transform: visible ? 'translateY(0)' : 'translateY(-110%)',
                transition: 'transform 220ms ease',
                willChange: 'transform',
                zIndex: 1050,
                top: isAtTop ? '0px' : '12px',
                left: '24px',
                right: '24px',
                padding: '6px 0',
                borderRadius: '50px',
                overflow: 'hidden',
                background: 'linear-gradient(10deg, #bfddfbff 0%, #b8d7f4ff 100%)'
            }}
        >
            <div className="container ai-campaign-container ">
                <div className="d-flex align-items-center justify-content-between">
                    <a className="d-flex align-items-center text-decoration-none brand" href="/">
                        <img src={image} alt="AI Kerala" className="logo-img" width={150} height={68} style={{ borderRadius: 8 }} />
                        <div className="ms-3 d-none d-md-block">
                            <div className="h1 mb-0">KERL<span style={{color:'#2559adff'}}>AI</span></div>
                            <div className="small muted text-black">Empowering ideas with AI</div>
                        </div>
                    </a>

                    <nav className="d-none d-lg-flex align-items-center gap-3">
                        <button
                            type="button"
                            className="nav-link btn btn-link text-dark p-0"
                            onClick={() => {
                                if (location.pathname === '/') {
                                    // already on home — scroll to top smoothly
                                    try {
                                        window.scrollTo({ top: 0, behavior: 'smooth' })
                                    } catch (e) {
                                        window.scrollTo(0, 0)
                                    }
                                } else {
                                    navigate('/')
                                }
                            }}
                        >Home</button>
                        <button type="button" className="nav-link btn btn-link text-dark p-0" onClick={() => handleScrollTarget('why')}>Why Kerala</button>
                        <a className="nav-link text-dark" href="#approach">Approach</a>
                        <button type="button" className="nav-link btn btn-link text-dark p-0" onClick={() => handleScrollTarget('partners')}>Partners</button>
                    </nav>

                    <div className="d-flex align-items-center gap-2">
                        <div className="d-none d-md-flex align-items-center gap-2 social-icons">
                            <a className="text-muted" href="https://www.facebook.com/" target='_blank' aria-label="Facebook"><i className="fa-brands fa-facebook" style={{color:'#075ef2'}} /></a>
                            <a className="text-muted" href="https://www.instagram.com/" target='_blank' aria-label="Instagram"><i className="fa-brands fa-instagram" style={{color:'red'}} /></a>
                            <a className="text-muted" href="https://github.com/" aria-label="Github"><i className="fa-brands fa-github" style={{color:'#0f0f0fff'}} /></a>
                            <a className="text-muted" href="https://web.telegram.org/a/" aria-label="Telegram"><i className="fa-brands fa-telegram" style={{color:'#4579d1ff'}}/></a>
                        </div>

                        <a className="btn btn-outline-primary d-none d-md-inline-block" href="/signin">Sign in</a>
                        <a className="btn btn-primary get-started" href="/get-started">Get Started</a>

                        <button className="navbar-toggler d-lg-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>

                
            </div>
            <style>{`/* Get Started button hover + focus styles (scoped to header) */
                .site-header .get-started {
                    transition: transform 180ms cubic-bezier(.2,.9,.2,1), box-shadow 180ms ease, background-color 180ms ease;
                    will-change: transform, box-shadow;
                }

                .site-header .get-started:hover,
                .site-header .get-started:focus {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 24px rgba(61,179,252,0.18);
                }

                .site-header .get-started:active {
                    transform: translateY(-1px) scale(0.995);
                }

                .site-header .get-started:focus-visible {
                    outline: 3px solid rgba(59,130,246,0.2);
                    outline-offset: 3px;
                }

                /* Nav link hover styles: subtle lift + underline reveal */
                .site-header nav .nav-link {
                    position: relative;
                    transition: color 150ms ease, transform 150ms cubic-bezier(.2,.9,.2,1);
                    color: rgba(0,0,0,0.85);
                }

                .site-header nav .nav-link::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -6px;
                    height: 3px;
                    background: transparent;
                    transform: scaleX(0);
                    transform-origin: left center;
                    transition: transform 200ms ease, background-color 200ms ease;
                    border-radius: 2px;
                }

                .site-header nav .nav-link:hover,
                .site-header nav .nav-link:focus {
                    color: #0b57d1;
                    transform: translateY(-2px);
                }

                .site-header nav .nav-link:hover::after,
                .site-header nav .nav-link:focus::after {
                    transform: scaleX(1);
                    background: linear-gradient(90deg,#0ea5e9,#3b82f6);
                }

                .site-header nav .nav-link:active { transform: translateY(-1px) scale(0.995); }

                @media (prefers-reduced-motion: reduce) {
                    .site-header .get-started { transition: none; transform: none; }
                    .site-header nav .nav-link { transition: none; transform: none; }
                    .site-header nav .nav-link::after { transition: none; }
                }
            `}</style>
        </header>
    );
}

export default Header;

