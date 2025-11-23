import React, { useState } from 'react'
import { Form, Button, Card, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'
// In-memory storage for demo purposes only.
// This will be lost when the page is refreshed.
// `registerId` will hold the registered user object under `registerId.user`.
let registerId = {}
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [isRegister, setIsRegister] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(s => ({ ...s, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isRegister) {
            // validate password length for registration
            if (!form.password || form.password.length < 8) {
                toast.warning('Password must be at least 8 characters')
                return
            }
            // store registration in-memory (demo only) under registerId.user
            registerId.user = { name: form.name.trim(), email: form.email.trim(), password: form.password }
            toast.success('Registered successfully — please sign in')
            // switch to login view after successful registration
            setIsRegister(false)
            // clear password for safety, keep email so user can sign in
            setForm(s => ({ ...s, password: '' }))
        } else {
            // login: compare against in-memory registration stored in registerId.user
            const stored = registerId.user || null
            if (stored && stored.name === form.name.trim() && stored.email === form.email.trim() && stored.password === form.password) {
                toast.success('Logged in Successfully')
                navigate('/', { replace: true })
            } else {
                toast.warning('User not found, log in again')
            }
        }
    }

    const handleForgotPassword = () => {
        // Demo-only: prompt the user to reset the in-memory password
        const stored = registerId.user || null
        if (!stored) {
            toast.warning('No registered user found')
            return
        }

        const email = window.prompt('Enter your registered email to reset password:')
        if (!email) return

        if (email.trim() !== stored.email) {
            toast.warning('Email not found')
            return
        }

        const newPass = window.prompt('Enter new password (min 8 characters):')
        if (!newPass) return
        if (newPass.length < 8) {
            toast.warning('Password must be at least 8 characters')
            return
        }

        registerId.user.password = newPass
        toast.success('Password has been reset. Please sign in with your new password.')
        // make sure form reflects cleared password
        setForm(s => ({ ...s, password: '' }))
        setIsRegister(false)
    }

    return (
        <div className="signin-page mt-5" style={{ background: 'linear-gradient(180deg, #e6f7ff 0%, #ffffff 100%)', minHeight: '100vh', padding: '3rem 1rem' }}>
            <Container fluid className="h-100">
                <Row className="h-100 justify-content-center align-items-center mt-5">
                    <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                        <Card className="shadow-sm" style={{ borderRadius: 10 }}>
                            <Card.Header className="bg-white border-0 py-3">
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 44, height: 44, borderRadius: 8, background: '#f1fbff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, fontWeight: 700, color: '#0d6efd' }}>K</div>
                                    <div>
                                        <h4 className="mb-0">{isRegister ? 'Create an account' : 'Sign in'}</h4>
                                        <small className="text-muted">Secure access to KerlAI resources</small>
                                    </div>
                                </div>
                            </Card.Header>

                            <Card.Body>
                                <Form onSubmit={handleSubmit} aria-labelledby="signin-heading" noValidate>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label className="visually-hidden">Name</Form.Label>
                                        <Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Full name" aria-label="Full name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className="visually-hidden">Email address</Form.Label>
                                        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" aria-label="Email address" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label className="visually-hidden">Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                                placeholder="Password"
                                                aria-label="Password"
                                                required
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => setShowPassword(s => !s)}
                                                aria-pressed={showPassword}
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                type="button"
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputGroup>
                                        <div className="form-text">Password must be at least 8 characters when registering.</div>
                                    </Form.Group>

                                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-3">
                                        <div className="mb-2 mb-sm-0">
                                            <Button variant="primary" type="submit">{isRegister ? 'Register' : 'Sign In'}</Button>
                                            {!isRegister && (
                                                <Button variant="link" onClick={handleForgotPassword} style={{ textDecoration: 'none', marginLeft: 12 }} type="button">Forgot password?</Button>
                                            )}
                                        </div>

                                        <div>
                                            <Button style={{ textDecoration: 'none' }} variant="link" onClick={() => setIsRegister(r => !r)} type="button">{isRegister ? 'Have an account? Sign in' : 'Need an account? Register'}</Button>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="text-center mt-3 text-muted small">This is a demo sign-in. Credentials are stored in-memory and will be lost on refresh.</div>
                    </Col>
                </Row>
            </Container>

            <style>{`\n                .signin-page .card { min-height: 260px; }\n                @media (max-width: 576px) {\n                    .signin-page { padding: 2rem 0.75rem; }\n                }\n            `}</style>
        </div>
    )
}

export default SignIn