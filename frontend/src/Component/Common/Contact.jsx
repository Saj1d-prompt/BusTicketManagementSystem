import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [message, setMessage] = useState('');
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {

    }
  return (
    <div>
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
                                        <input type="text" className="form-control" placeholder="Enter Your name here" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted">Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter Your email here" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-muted">Message</label>
                                    <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
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
