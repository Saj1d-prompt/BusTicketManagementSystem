import React from 'react'
import styles from '../../Style/Registration.module.css';
import OptionCard from './OptionCard';
const SelectRegistration = () => {
    return (
        <div className="text-center">
            <h2 className="fw-bold mb-4">Create an Account</h2>
            <p className="text-muted mb-5">How would you like to join Bus Ticket Management System?</p>

            <div className="row g-4 justify-content-center">
                <div className="col-md-5">
                    <OptionCard
                        icon="👤"
                        title="I am a Passenger"
                        description="Book tickets, track buses, and manage your journeys across Bangladesh."
                        onClick={() => onSelect('passenger')}
                    />
                </div>

                <div className="col-md-5">
                    <OptionCard
                        icon="🚌"
                        title="I am a Bus Company Operator"
                        description="Manage your fleet, counters, routes, and sell tickets on our platform."
                        onClick={() => onSelect('company')}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectRegistration
