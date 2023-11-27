import React from "react";
import insuranceImage from "../assests/images/insurance.jpg";

const InsurancePage= () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Insurance Technology</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={insuranceImage} alt="Insurance" />
        <div>
          <p>
            Embrace the future of insurance with our advanced technology
            solutions. From robust claims processing systems that streamline
            operations to customer relationship management (CRM) tools that
            enhance client interactions, our technology empowers insurance
            providers to navigate an ever-changing landscape. Improve
            efficiency, reduce risks, and enhance customer satisfaction with our
            comprehensive insurance software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePage;
