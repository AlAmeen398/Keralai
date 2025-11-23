import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Rocket, BookOpen, MousePointerClick } from "lucide-react";
import { Parallax } from "react-parallax";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function GetStarted() {
  return (
    <div>
      <Parallax
        blur={1}
        bgImage="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80"
        bgImageAlt="AI Background"
        strength={400}
      >
        <div className="gs-hero d-flex">
          <div className="hero-inner container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="display-4 fw-bold text-white mb-3"
            >
              Get Started With <span className="text-primary">AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="lead text-white-75 mx-auto"
              style={{ maxWidth: 720 }}
            >
              Learn, experiment, and build AI projects — step-by-step, beginner-friendly, and fully hands-on.
            </motion.p>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="d-flex justify-content-center gap-4 mt-4 gs-hero-icons"
            >
              <Cpu size={40} color="#0d6efd" />
              <Sparkles size={40} color="#0d6efd" />
              <Rocket size={40} color="#0d6efd" />
            </motion.div>
          </div>
        </div>
      </Parallax>

      <Container style={{ maxWidth: 1100 }} className="py-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h2 text-center fw-bold mb-4"
        >
          Start Your AI Journey in <span style={{ color: '#0d6efd' }}>3 Simple Steps</span>
        </motion.h2>

        <Row className="g-4 align-items-stretch">
          <Col md={4}>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.8 }}>
              <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 18 }} className="shadow-sm h-100">
                <Card.Body>
                  <div className="gs-card-icon mb-3"><BookOpen size={36} style={{ color: '#0d6efd' }} /></div>
                  <Card.Title>1. Learn the Basics</Card.Title>
                  <Card.Text className="text-muted">Understand core AI concepts: machine learning, neural networks, prompts, and tools.</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.9 }}>
              <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 18 }} className="shadow-sm h-100">
                <Card.Body>
                  <div className="gs-card-icon mb-3"><MousePointerClick size={36} style={{ color: '#0d6efd' }} /></div>
                  <Card.Title>2. Use AI Tools</Card.Title>
                  <Card.Text className="text-muted">Try text generation, image creation, chatbots, and smart assistants with zero coding.</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 1 }}>
              <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 18 }} className="shadow-sm h-100">
                <Card.Body>
                  <div className="gs-card-icon mb-3"><Rocket size={36} style={{ color: '#0d6efd' }} /></div>
                  <Card.Title>3. Build Projects</Card.Title>
                  <Card.Text className="text-muted">Create real-world AI apps — content bots, chatbots, automation tools, and more.</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        
      </Container>

      <Parallax bgImage="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80" strength={350}>
        <div className="gs-cta d-flex">
          <div className="container text-center py-5">
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="h2 fw-bold text-white" style={{ textShadow: '0 6px 18px rgba(0,0,0,0.45)' }}>Ready to Begin?</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-white-75 mx-auto" style={{ maxWidth: 760, marginTop: '1rem' }}>Your AI learning path starts now — no experience needed.</motion.p>
            <a href="/tutorials" className="btn btn-lg btn-primary mt-4">Start Learning →</a>
          </div>
        </div>
      </Parallax>

      <style>{`
        .gs-hero { min-height: 75vh; display:flex; align-items:center; }
        .gs-hero .hero-inner { padding: 3rem 1rem; }
        .gs-hero-icons svg { opacity: 0.95; }
        .gs-card-icon { display:flex; align-items:center; justify-content:center; height:48px; }
        .gs-cta { min-height: 50vh; display:flex; align-items:center; }
        .text-white-75 { color: rgba(255,255,255,0.9); }
        @media (max-width: 767px) { .gs-hero .hero-inner { padding: 2rem 1rem; } }
      `}</style>
    </div>
  );
}
