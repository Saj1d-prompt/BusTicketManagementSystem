import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white pt-5 pb-3">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-4 mb-3">
                            <h5 className="fw-bold text-danger mb-4 fs-4">Bus Ticket Management System</h5>
                            <p className="text-secondary small">
                                The centralized ticket booking management system built for Bangladesh.
                            </p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5 className="fw-bold mb-3">Quick Links</h5>
                            <ul className="list-unstyled text-secondary small">
                                <li className="mb-2"><a href="#features" className="text-decoration-none text-secondary">Features</a></li>
                                <li className="mb-2"><a href="#about" className="text-decoration-none text-secondary">About Us</a></li>
                                <li className="mb-2"><a href="#contact" className="text-decoration-none text-secondary">Support</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5 className="fw-bold mb-3">Contact Info</h5>
                            <ul className="list-unstyled text-secondary small">
                                <li className="mb-2">📍 Dhaka, Bangladesh</li>
                                <li className="mb-2">📧 support@bdbushub.com</li>
                                <li className="mb-2">📞 +880 1234 567890</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
