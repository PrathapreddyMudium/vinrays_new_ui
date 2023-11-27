import React from "react";
import logisticsImage from "../assests/images/logisticsandautomotive.jpg";

const LogisticsAndAutomotivePage = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">FinTech Innovations</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={logisticsImage} alt="Logistics & Automotive" />
        <div>
          <p>
            Optimize logistics and automotive operations with our specialized
            software solutions. Our supply chain management systems, fleet
            tracking, and optimization tools empower businesses in these
            industries to enhance efficiency, reduce costs, and improve overall
            performance. With our technology, you gain the agility and insights
            needed to stay ahead in the fast-paced world of logistics and
            automotive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogisticsAndAutomotivePage;
