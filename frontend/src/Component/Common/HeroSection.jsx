import React from 'react' 
import busImg from '../../Image/bus.jpeg'
const HeroSection = () => {
  return (
    <div>
      <section className="hero-section bg-light border-bottom overflow-hidden d-flex align-items-center" style={{ minHeight: "70vh" }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    
                    <div className="col-lg-6 mb-5 mb-lg-0 slide-in-left">
                        <h1 className="display-4 fw-bold text-dark mb-4">
                            Travel Across Bangladesh with <span className="text-danger">Confidence</span>
                        </h1>
                        <p className="lead text-secondary mb-4">
                            Experience premium and budget bus travels with real-time seat tracking, digital tickets, and verified operators. Your smart journey begins right here.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-danger btn-lg px-4 fw-bold shadow-sm">Explore Routes</button>
                            <button className="btn btn-outline-dark btn-lg px-4 fw-bold shadow-sm">View Companies</button>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center fade-in-up">
                        <img src={busImg} alt="Modern AC Bus" className="img-fluid rounded-4 shadow-lg floating-bus" style={{ border: "8px solid white" }} />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection
