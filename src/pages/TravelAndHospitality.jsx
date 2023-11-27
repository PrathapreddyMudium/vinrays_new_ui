import React from "react";
import travelImage from "../assests/images/travelandhospitality.jpg";

const TravelAndHospitality = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Travel & Hospitality Technology</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={travelImage} alt="Travel & Hospitality" />
        <div>
          <p>
            Embark on a journey of innovation with our Travel & Hospitality
            technology solutions. From cutting-edge reservation systems that
            ensure seamless bookings to mobile apps that enhance guest
            experiences, we redefine the way businesses in this sector operate.
            Our technology transforms each touchpoint of the customer journey,
            creating unforgettable experiences for travelers and optimizing
            operational efficiency for hospitality providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelAndHospitality;
