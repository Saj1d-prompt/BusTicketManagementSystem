import React from 'react'
import about from '../../Image/about.png'

const About = () => {
  return (
    <div>
      <section id="about" className="py-5 bg-light border-top border-bottom">
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-4">About BD Bus Hub</h2>
                        <p className="lead text-muted">
                            We are revolutionizing the transit industry in Bangladesh by providing a unified, multi-tenant platform for both operators and passengers.
                        </p>
                        <p className="text-muted">
                            Whether you are a budget traveler heading to Rajshahi or seeking a premium AC ride to Cox's Bazar, our transparent pricing engine ensures you always get the fair, verified rate without hidden fees.
                        </p>
                        <button className="btn btn-outline-danger mt-3">Learn More</button>
                    </div>
                    <div className="col-lg-6 text-center fade-in-up">
                        <img src={about} alt="Image of About Section" className="img-fluid rounded-4 shadow-lg floating-bus" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
