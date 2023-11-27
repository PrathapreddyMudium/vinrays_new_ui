import React from "react";
import principlesImg from "../assests/images/principles.jpg";

const Principles = () => {
  return (
    <>
      <section class="features-sub-head bg-light py-3">
        <div class="container grid grid-align">
          <img src={principlesImg} alt="principles" />
          <div className="content">
            <div>
              <h1 class="xl">Mission</h1>
              <p>
                At Vinrays, our mission is to empower businesses with innovative
                and tailored software solutions that drive growth and
                transformation. We are dedicated to delivering cutting-edge
                technology that not only meets the current needs of our clients
                but anticipates and adapts to the future challenges of the
                ever-evolving IT landscape. Through strategic partnerships and a
                commitment to excellence, we aim to be the catalyst for our
                clients' success, enabling them to achieve their goals in the
                digital age.
              </p>
            </div>
            <div>
              <h1 class="xl">Vision</h1>
              <p>
                Our vision at Vinrays is to be a beacon of technological
                innovation, setting the standard for excellence in software
                development and IT solutions. We aspire to be a trusted partner
                for businesses worldwide, known for our relentless pursuit of
                innovation, unwavering commitment to quality, and the ability to
                turn challenges into opportunities. By envisioning and creating
                the future of technology, we aim to leave a lasting impact on
                industries and communities, fostering a world where businesses
                thrive through the power of transformative digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="features-main my-2 values">
        <h1 class="xl">Values</h1>
        <div class="container grid grid-3">
          <div class="card flex">
          <i class="fa-solid fa-lightbulb fa-3x"></i>            
            <p><h2>Innovation</h2>
              We embrace a culture of continuous innovation,
              encouraging creative thinking and the exploration of new
              possibilities. Innovation is at the core of everything we do,
              driving our solutions to be at the forefront of the industry.
            </p>
          </div>
          <div class="card flex">
          <i class="fa-solid fa-award fa-3x"></i>
            <p><h2>Excellence</h2>
            We are committed to excellence in every aspect of our work. From the quality of our code to the precision of our designs, we strive for perfection, setting high standards and delivering solutions that surpass expectations.
            </p>
          </div>
          <div class="card flex">
          <i class="fa-solid fa-handshake fa-3x"></i>
            <p><h2>Collaboration</h2>
            We believe in the power of collaboration. By working closely with our clients, partners, and each other, we foster an environment where diverse perspectives come together to create synergies and achieve collective success.
            </p>
          </div>
          <div class="card flex">
          <i class="fa-solid fa-globe fa-3x"></i>
            <p><h2>Integrity</h2>
            Integrity is the foundation of our relationships. We conduct our business with honesty, transparency, and ethical practices, building trust with our clients, employees, and stakeholders.
            </p>
          </div>
          <div class="card flex">
          <i class="fa-solid fa-user fa-3x"></i>
            <p><h2>Client-Centric Approach</h2>
            Our clients are at the heart of everything we do. We are dedicated to understanding their unique needs and delivering solutions that not only meet but exceed their expectations, forging lasting partnerships based on mutual success.
            </p>
          </div>
          {/*<div class="card flex">
          <i class="fa-solid fa-laptop-file fa-3x"></i>
            <p><h2>Continuous Learning</h2>
            In the dynamic world of technology, we embrace a culture of continuous learning. We encourage our team members to stay curious, upskill, and stay ahead of the curve, ensuring that we are always equipped to tackle new challenges.
            </p>
  </div>*/}
          <div class="card flex">
          <i class="fa-solid fa-people-arrows fa-3x"></i>
            <p><h2>Social Responsibility</h2>
            As a responsible corporate citizen, we are committed to making a positive impact on society. We strive to contribute to community development, environmental sustainability, and ethical business practices, recognizing the broader impact of our work beyond the business realm.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Principles;
