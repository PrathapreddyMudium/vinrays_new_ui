import React, { useState } from "react";
import Job from "../components/Job";
import Modal from "../components/Modal";

const Careers = () => {
  const Jobs_Data = [
    {
      "job_title": "Software Developer",
      "job_code": 1234,
      "skills":["Javascript","Springboot","React"],
      "responsibilities":["Design","Develop","Test"]
    },
    {
      "job_title": "Software Developer",
      "job_code": 1256,
      "skills":["React","Java","MySql"],
      "responsibilities":["Design","Develop","Test"]
    }
  ]
  const [modalOpen, setModalOpen] = useState(false);
  const [jobCode,setJobCode] = useState("");
  const [jobTitle,setJobtitle] = useState("");
  console.log(modalOpen);
  return (
    <section class="features-sub-head bg-light">
      <div className="title">
        <h1 class="xl">Careers</h1>
      </div>
      <div class="container grid grid-1 grid-gap-10">
        <div>
          <p>
            <h2>Join Our Team: Explore Exciting Opportunities at Vinrays!</h2>
            Welcome to the Vinrays Careers Page – a gateway to a world of
            innovation, collaboration, and endless possibilities. We are on the
            lookout for passionate individuals who are ready to embark on a
            journey of professional growth and contribute to our dynamic team.
            If you are driven by a desire to make a meaningful impact in the
            ever-evolving IT landscape, you've come to the right place.
          </p>
        </div>
        {modalOpen && <Modal setModalOpen={setModalOpen} job_code={jobCode} job_title={jobTitle}/>}
        <div className="flex">
          {Jobs_Data.map((job) => {
            return <Job data={job} setModalOpen={setModalOpen} setJobCode={setJobCode} setJobTitle={setJobtitle}/>
          })}
          {/*<Job setModalOpen={setModalOpen} setJobCode={setJobCode} setJobTitle={setJobtitle}/>
          <Job setModalOpen={setModalOpen} setJobCode={setJobCode} setJobTitle={setJobtitle}/>*/}
        </div>

        <div>
          <p>
            <h2>Alternative Application Method</h2>
            Prefer to send your application via email? No problem! You can also
            forward your resume and cover letter to{" "}
            <strong>careers@vinrays.com</strong>. Make sure to include the
            position you are applying for in the subject line.
          </p>
        </div>
        <div>
          <p>
            <h2>General Applications</h2>
            Didn't find the perfect match among our current openings? We still
            want to hear from you. Feel free to submit a general application by
            emailing your resume and cover letter to{" "}
            <strong>careers@vinrays.com</strong>.Let us know about your skills,
            experience, and the type of role you are seeking. We'll keep your
            information on file for future opportunities.{" "}
            <strong>Vinrays</strong> is an equal opportunity employer, and we
            encourage candidates from diverse backgrounds to apply. Take the
            first step towards an exciting career with us. Join{" "}
            <strong>Vinrays</strong>, where your potential meets opportunity!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
