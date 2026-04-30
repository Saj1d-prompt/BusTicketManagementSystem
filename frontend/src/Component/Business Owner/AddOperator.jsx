import React from 'react'
import { Card } from 'react-bootstrap';

const AddOperator = () => {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            <Card className="shadow-sm p-4" style={{
                width: "480px",
                borderRadius: "14px",
                background: "#ffffff",
                border: "1px solid #e3e6ea",
            }}>
                <h4 className="text-center mb-3 fw-bold" style={{ color: "#333" }}>
                    Add Ticket Operator
                </h4>

            </Card>



        </div>
    )
}

export default AddOperator
