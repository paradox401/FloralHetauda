import React from "react";
import './OurFeatures.css';

function OurFeatures() {
    const features = [
        {
            icon: "🌸",
            title: "Freshness guaranteed",
            description: "Our flowers are handpicked daily to ensure highest quality and freshness "
        },
        {
            icon: "🌼",
            title: "Sustainability matters",
            description: "Our store is committed to eco-friendly practices,from sourcing to packaging the flowers."
        },
        {
            icon: "🌺",
            title: "Artistic arrangements",
            description: "We create unique ,stunning artsy bouquets that make everyday occasion special."
        },
        {
            icon: "🌻",
            title: "Customer delight",
            description: "Your ultimate satisfaction is our top priority, and we go the extra mile to make you smile."
        }
    ];

    return (
        <>
        <h2 id="our-features-heading">Our Features</h2>
        <div className="our-features">
            
            {features.map((feature, index) => (
                <div className="feature" key={index}>
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-title">{feature.title}</div>
                    <div className="feature-description">{feature.description}</div>
                </div>
            ))}
        </div>
        </>
    );
}

export default OurFeatures;