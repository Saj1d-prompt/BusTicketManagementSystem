import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/storeSupport`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.status === 200) {

                setMessage({ text: result.message, type: "success" });
                setTimeout(() => {
                    setMessage('');
                }, 3000);
                reset();
            }
        } catch (error) {

            setMessage({ text: 'An error occurred while submitting your question. Please try again later.', type: "danger" });
            setTimeout(() => {
                setMessage('');
            }, 3000);
            console.error('Error submitting support question:', error);
        }
    }
    return (
        <div>
            {message && (
                <div style={{
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                    minWidth: "250px",
                    padding: "12px 18px",
                    borderRadius: "8px",
                    color: "#fff",
                    backgroundColor: message.type === "success" ? "#28a745" : "#dc3545",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    zIndex: 9999,
                    animation: "slideIn 0.3s ease"
                }}>
                    {message.text}
                </div>
            )}
            <section id="contact" className="py-5">
                <div className="container py-4">
                    <h4 className="text-center text-muted mb-3">For any Question or Complaints</h4>
                    <h2 className="text-center fw-bold mb-5">Get In Touch</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label text-muted">Your Name</label>
                                            <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Enter Your name here" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-muted">Email Address</label>
                                            <input type="email" className="form-control" {...register('email', { required: true })} placeholder="Enter Your email here" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label text-muted">Message</label>
                                        <textarea className="form-control" {...register('message', { required: true })} rows="4" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-danger px-5 py-2 fw-bold">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
