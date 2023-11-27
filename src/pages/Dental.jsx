import React from "react";
import dentalImage from "../assests/images/dental.jpg";

const DentalPage = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Dental Practice Management</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={dentalImage} alt="Dental" />
        <div>
          <p>
            Streamline and elevate dental practice operations with our
            cutting-edge software solutions. From intuitive appointment
            scheduling and efficient patient records management to advanced
            treatment planning tools, our dental software enhances every aspect
            of practice management. Empower your dental professionals to provide
            exceptional care with technology designed specifically for dental
            practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalPage;
