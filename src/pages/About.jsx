import React from "react";
import aboutusImg from "../assests/images/AboutUs.jpg";

export const About = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">About Us</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={aboutusImg} alt="About Us" />
        <div>
          <p>
            Welcome to Vinrays Solutions, where innovation meets excellence in
            the world of software solutions. As a cutting-edge software company,
            we specialize in developing dynamic web applications, mobile
            applications, and a wide array of IT solutions that cater to the
            ever-evolving needs of the industry.{" "}
          </p>
          <p>
            At Vinrays, we are driven by a passion for technological advancement
            and a commitment to delivering top-notch solutions. With a team of
            skilled and experienced professionals, we embark on every project
            with a dedication to excellence, ensuring that our clients receive
            software solutions that not only meet but exceed their expectations.
          </p>
        </div>
      </div>
    </section>
  );
};
