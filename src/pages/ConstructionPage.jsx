import React from "react";
import constructionImage from "../assests/images/construction.jpg";

const ConstructionPage = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Construction Solutions</h1>
      </div>
      <div class="container grid align-items-start">
        <img src={constructionImage} alt="Construction" />
        <div>
          <p>
            In the dynamic world of construction, our software solutions serve
            as the cornerstone for project success. From project management and
            scheduling tools that streamline workflows to collaboration
            platforms that enhance communication among teams, we empower
            construction professionals to navigate complexities, meet deadlines,
            and deliver exceptional results. With our technology, your
            construction projects become more efficient, transparent, and
            ultimately, more successful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConstructionPage;
