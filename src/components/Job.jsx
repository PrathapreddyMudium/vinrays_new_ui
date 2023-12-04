import React, { useEffect, useRef, useState } from "react";

const Job = (props) => {
  const cardRef = useRef(null);
  const [shouldShowScroll, setShouldShowScroll] = useState(false);

  useEffect(() => {
    // Check if the content overflows the card
    const isOverflowing =
      cardRef.current.scrollHeight > cardRef.current.clientHeight;
    console.log(cardRef.current.scrollHeight);
    console.log(cardRef.current.clientHeight);
    // Update the state based on overflow condition
    setShouldShowScroll(isOverflowing);
  }, [props.data.job_code]);

  return (
    <div
      className={`job-card ${shouldShowScroll ? "overflow-scroll" : ""}`}
      ref={cardRef}
    >
      <h2>{props.data.job_title}</h2>
      <div className="description-container">
        <strong className="job-code">Description: </strong>
        <div className="description">{props.data.job_description}</div>
      </div>
      <div className="skills">
        {props.data.skills.length > 0 && <strong>Skills: </strong>}
        <ul className="horizontal-list">
          {props.data.skills.map((skill, id) => {
            return <li key={id}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="responsibilities">
        <strong>Key Roles:</strong>
        <ul>
          {props.data.key_roles.map((res, id) => {
            return (
              <li className="role" key={id}>
                {res}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Job;
