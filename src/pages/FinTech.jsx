import React from "react";
import fintechImage from "../assests/images/fintech.jpg";

const FinTechPage = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">FinTech Innovations</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={fintechImage} alt="Fin Tech" />
        <div>
          <p>
            Navigate the financial landscape with confidence through our
            cutting-edge FinTech solutions. From mobile banking apps that offer
            seamless financial experiences to blockchain integration that
            ensures secure transactions, we redefine the way financial
            institutions operate. Stay ahead of the curve and embrace the
            digital transformation of finance with our innovative FinTech
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinTechPage;
