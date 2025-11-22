import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutPdf from '../images/AI for Everyone.pdf'

function Footer() {
    return (
        <footer className="site-footer py-4 border-top">
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <div className="footer-copy">
                            <strong>AI for Everyone</strong>
                            <div className="small">© {new Date().getFullYear()} TinkerHub</div>
                        </div>
                    </Col>

                    <Col md={4} className="text-center d-none d-md-block">
                        <ul className="footer-nav list-unstyled d-flex justify-content-center gap-3 mb-0">
                            <li><a href="/">Home</a></li>
                            <li><a href="/partnerwithus">Partners</a></li>
                            <li><a href="/support">Support</a></li>
                            <li><a href={aboutPdf} download target="_blank" rel="noopener noreferrer" aria-label="Download AI for Everyone PDF" style={{fontWeight:'700'}}>Thinker Hub</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="text-end">
                        <div className="social-icons d-flex justify-content-end gap-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fa-brands fa-facebook fa-beat-fade fa-xl" style={{ color: "#0c4ab6" }} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fa-brands fa-instagram fa-beat-fade fa-xl" style={{ color: "#d62976" }} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="fa-brands fa-github fa-beat-fade fa-xl" style={{ color: "#0e0e0fff" }} />
                            </a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <i className="fa-brands fa-telegram fa-beat-fade fa-xl" style={{ color: "#0088cc" }} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="text-center small text-muted">
                        <p>Built with <i className="fa-solid fa-heart fa-flip fa-sm" style={{ color: "#cc0000ff" }} /> by TinkerHub — <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
