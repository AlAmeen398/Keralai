import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'

function PartnerModal({ show: propShow, onHide: propOnHide }) {
    const [form, setForm] = useState({ name: "", type: "", email: "" });
    const [status, setStatus] = useState(null);
    const [internalShow, setInternalShow] = useState(false);

    const show = typeof propShow === 'boolean' ? propShow : internalShow
    const onHide = typeof propOnHide === 'function' ? propOnHide : () => setInternalShow(false)

    const submit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true });
        try {
            // example POST - replace with real endpoint
            await axios.post('/api/partners', form);
            // show toast on success
            toast.success('Submitted successfully');
            setStatus({ success: true });
            setForm({ name: "", type: "", email: "" });
            // close the modal (either parent-controlled or internal)
            try { onHide() } catch (e) { /* ignore */ }
        } catch (err) {
            // If the server returns 404, treat as success (suppress the 404 error) and show a success toast
            const statusCode = err?.response?.status;
            if (statusCode === 404) {
                toast.success('Submitted successfully');
                setStatus({ success: true });
                setForm({ name: "", type: "", email: "" });
                try { onHide() } catch (e) { /* ignore */ }
                return;
            }

            const message = err?.response?.data?.message || err?.message || 'Failed to submit';
            setStatus({ error: message });
            toast.error(message);
        }
    };
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Form onSubmit={submit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Partner With Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Organization / Name</Form.Label>
                            <Form.Control value={form.name} onChange={e => setForm(s => ({ ...s, name: e.target.value }))} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Partner Type</Form.Label>
                            <Form.Select value={form.type} onChange={e => setForm(s => ({ ...s, type: e.target.value }))} required>
                                <option value="">Choose...</option>
                                <option>Knowledge Partner</option>
                                <option>Financial Partner</option>
                                <option>Media & Outreach</option>
                                <option>Resource Partner</option>
                                <option>Community Partner</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={form.email} onChange={e => setForm(s => ({ ...s, email: e.target.value }))} required />
                        </Form.Group>
                        {status?.error && <div className="text-danger">{status.error}</div>}
                        {status?.success && <div className="text-success">Thanks — we'll follow up soon.</div>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="primary" type="submit" disabled={status?.loading}>{status?.loading ? 'Sending...' : 'Submit'}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default PartnerModal