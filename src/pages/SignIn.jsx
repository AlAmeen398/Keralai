import React, { useState } from 'react'
import { Form, Button, Card, InputGroup } from 'react-bootstrap'
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
        <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '100vh', padding: '3rem', background: 'linear-gradient(180deg, #e6f7ff 0%, #ffffff 100%)' }}>
            <Card style={{ maxWidth: 520, width: '100%' }}>
                <Card.Body>
                    <h3 className="mb-3">{isRegister ? 'Create an account' : 'Sign in to your account'}</h3>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setShowPassword(s => !s)}
                                    aria-pressed={showPassword}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputGroup>
                            <div className="form-text">Password must be at least 8 characters when registering.</div>
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Button variant="primary" type="submit">{isRegister ? 'Register' : 'Sign In'}</Button>
                                {!isRegister && (
                                    <Button variant="link" onClick={handleForgotPassword} style={{ textDecoration: 'none', marginLeft: 12 }}>Forgot password?</Button>
                                )}
                            </div>

                            <Button style={{ textDecoration: 'none' }} variant="link" onClick={() => setIsRegister(r => !r)}>{isRegister ? 'Have an account? Sign in' : 'Need an account? Register'}</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignIn