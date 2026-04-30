import React from 'react'

const CompanyDashboardNotifier = () => {
    return (
        <div>
            <Container className="py-5">
                <Card className="shadow-sm border-0 text-center mx-auto" style={{ maxWidth: '600px' }}>
                    <Card.Body className="py-5">
                        <i className={`bi ${icon} ${colorClass}`} style={{ fontSize: '3rem' }}></i>
                        <h2 className={`mt-3 ${colorClass}`}>{title}</h2>
                        <p className="text-muted mt-3">{message}</p>

                        {footerText && (
                            <p className="mt-4 fw-bold">{footerText}</p>
                        )}
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default CompanyDashboardNotifier
