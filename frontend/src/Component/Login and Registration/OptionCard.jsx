import React from 'react'
import styles from '../../Style/Registration.module.css'

const OptionCard = ({ icon, title, description, onClick }) => {
    return (
        <div
            className={`card shadow-sm h-100 p-4 ${styles.optionCard}`}
            onClick={onClick}
        >
            <div className={`${styles.iconWrapper} text-danger mb-3`}>
                {icon}
            </div>
            <h4 className="fw-bold">{title}</h4>
            <p className="text-muted small">
                {description}
            </p>
        </div>
    )
}

export default OptionCard
