import React from "react";
import healthcareImage from "../assests/images/healthcare.jpg";

const HealthcarePage = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Healthcare Software Solutions</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={healthcareImage} alt="Healthcare" />
        <div>
          <p>
            Transform healthcare delivery with our specialized software
            solutions tailored for the unique needs of the industry. Our
            electronic health records (EHR) systems, telehealth platforms, and
            patient management tools empower healthcare providers to deliver
            personalized and efficient care. With our technology, the focus
            remains where it matters most—on patient well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthcarePage;
