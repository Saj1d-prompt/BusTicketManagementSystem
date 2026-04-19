import React from 'react'
import styles from '../../Style/Feature.module.css'

const Feature = () => {
  return (
    <div>
      <section id="features" className="py-5">
            <div className="container pt-4">
                <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div className={`card h-100 border-0 shadow-sm p-4 ${styles.animatedBorder}`}>
                            <h4 className="text-danger fw-bold">Multiple Operators</h4>
                            <p className="text-muted mt-2">
                                Compare prices and schedules from hundreds of verified bus companies in Bangladesh.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={`card h-100 border-0 shadow-sm p-4 ${styles.animatedBorder}`}>
                            <h4 className="text-danger fw-bold">Live Seat Selection</h4>
                            <p className="text-muted mt-2">
                                Pick your exact seat in real-time. No double bookings, no counter hassle.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={`card h-100 border-0 shadow-sm p-4 ${styles.animatedBorder}`}>
                            <h4 className="text-danger fw-bold">Digital Tickets</h4>
                            <p className="text-muted mt-2">
                                Get your E-ticket instantly with a PDF e-ticket downloading directly to your phone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Feature
