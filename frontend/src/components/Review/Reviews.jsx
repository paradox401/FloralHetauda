import React from "react";
import "./Reviews.css"; // Import your CSS file

const reviews = [
  {
    name: "Kripa Niraula",
    location: "Hetauda",
    rating: 8.8,
    review:
      "I couldn't have asked for a more perfect gift. Floral hetauda encapsulated our love’s eternal beauty.",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg", // Example image
  },
  {
    name: "Mishana Upreti",
    location: "Hetauda",
    rating: 7.8,
    review:
      "Outstanding service and quality products. Highly satisfied. Thank you FH!",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg", // Example image
  },
  {
    name: "Bikash Timalsina",
    location: "Hetauda",
    rating: 9.5,
    review:
      "The bouquet was so beautiful and fresh. It was a perfect gift for my loved one.",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg", // Example image
  }
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2 className="review-title">Reviews (42)</h2>
      <div className="reviews-wrapper">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.image} alt={review.name} className="review-avatar" />
              <div className="review-info">
                <h3>{review.name}</h3>
                <p className="review-location">📍 {review.location}</p>
              </div>
              <span className="review-rating">⭐ {review.rating}</span>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
      <a href="#" className="see-all">See All</a>
    </div>
  );
};

export default Reviews;
