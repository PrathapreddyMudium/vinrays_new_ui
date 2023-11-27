import React from "react";
import retailImage from "../assests/images/retailandecommerce.jpg";

const RetailAndECommercePage = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Retail & E-Commerce Solutions</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={retailImage} alt="Retail & E-Commerce" />
        <div>
          <p>
            In the ever-evolving landscape of retail and e-commerce, our
            comprehensive software solutions are designed to elevate your
            business. From state-of-the-art e-commerce platforms that drive
            online sales to inventory management systems that ensure optimal
            stock levels, we empower retailers to stay ahead of the curve.
            Unleash the potential of your business with technology that enhances
            customer experiences and maximizes operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RetailAndECommercePage;
