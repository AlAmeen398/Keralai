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
        <div style={{ minHeight: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', padding: '3rem', backgroundColor: 'rgba(0,0,0,0.15)'}}> 

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4 fw-bold"
            style={{ textShadow: '0 6px 18px rgba(0,0,0,0.45)', color:'white' }}

          >
            Get Started With <span style={{ color: '#93c5fd' }}>AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{ maxWidth: 720, fontSize: '1.125rem', marginTop: '1rem', opacity: 0.95 }}
          >
            Learn, experiment, and build AI projects — step-by-step, beginner-friendly, and fully hands-on.
          </motion.p>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', color: '#cfe8ff' }}
          >
            <Cpu size={40} color="#0d6efd" />
            <Sparkles size={40} color="#0d6efd" />
            <Rocket size={40} color="#0d6efd" />
          </motion.div>
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

        <Row className="g-4">
          <Col md={4}>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.8 }}>
              <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 18 }} className="shadow-sm h-100">
                <Card.Body>
                  <BookOpen size={36} style={{ color: '#0d6efd' }} className="mb-3" />
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
                  <MousePointerClick size={36} style={{ color: '#0d6efd' }} className="mb-3" />
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
                  <Rocket size={36} style={{ color: '#0d6efd' }} className="mb-3" />
                  <Card.Title>3. Build Projects</Card.Title>
                  <Card.Text className="text-muted">Create real-world AI apps — content bots, chatbots, automation tools, and more.</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        
      </Container>

      <Parallax bgImage="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80" strength={350}>
        <div style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', color: '#fff', textAlign: 'center' }}>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="h2 fw-bold" style={{ textShadow: '0 6px 18px rgba(0,0,0,0.45)' }}>Ready to Begin?</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} style={{ maxWidth: 760, marginTop: '1rem', opacity: 0.95 }}>Your AI learning path starts now — no experience needed.</motion.p>
          <a href="/" className="btn btn-lg btn-primary mt-4">Start Learning →</a>
        </div>
      </Parallax>
    </div>
  );
}
