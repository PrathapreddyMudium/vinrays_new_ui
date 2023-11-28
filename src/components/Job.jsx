import React, { useEffect, useRef, useState } from "react";

const Job = (props) => {
  const cardRef = useRef(null);
  const [shouldShowScroll, setShouldShowScroll] = useState(false);
  const modalDialogHandler = () => {
    props.setModalOpen(true);
    props.setJobCode(props.data.job_code);
    props.setJobTitle(props.data.job_title);
  };
  useEffect(() => {
    // Check if the content overflows the card
    const isOverflowing = cardRef.current.scrollHeight > cardRef.current.clientHeight;
    console.log(cardRef.current.scrollHeight)
    console.log(cardRef.current.clientHeight)
    // Update the state based on overflow condition
    setShouldShowScroll(isOverflowing);
  }, [props.data.job_code]);

  return (
    <div className={`job-card ${shouldShowScroll ? 'overflow-scroll' : ''}`} ref={cardRef}>
      <h2>{props.data.job_title}</h2>
      <div>
        <strong className="job-code">Job Code: </strong>
        <span>{props.data.job_code}</span>
      </div>
      <div className="skills">
        <strong>Skills: </strong>
        <ul className="horizontal-list">
          {props.data.skills.map((skill, id) => {
            return <li key={id}>{skill}</li>;
          })}
          {/*<li>Java</li>
          <li>Java</li>
        <li>Java</li>*/}
        </ul>
      </div>
      <div className="responsibilities">
        <strong>Responsibilities:</strong>
        <ul>
          {props.data.responsibilities.map((res, id) => {
            return <li key={id}>{res}</li>;
          })}
          {/*<li>Design</li>
          <li>Develop</li>
        <li>Test</li>*/}
        </ul>
      </div>
      <button onClick={modalDialogHandler}>Apply</button>
    </div>
  );
};

export default Job;
