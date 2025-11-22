import React from 'react'
import { Card } from 'react-bootstrap'
// import GlitchTitle from './GlitchTitle'

function StatCard({ title, children, image }) {
    return (
        <>
            <Card className="h-100 info-card stat-card">
                {image && (
                    <div className="stat-card-media">
                        <img src={image} alt={title} className="stat-card-img" />
                    </div>
                )}
                <Card.Body>
                    <Card.Title>
                        <h5 as="h5">{title}</h5>
                    </Card.Title>
                    <Card.Text>{children}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default StatCard