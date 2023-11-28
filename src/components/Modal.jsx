import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

const Modal = (props) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nxdmbvp",
        "template_jf3jtkb",
        form.current,
        "v1jfjFmpnQManhgUK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    props.setModalOpen(false);
    setName("");
    setEmail("");
    setContact("");
    //setSubject("");
    setMessage("");
  };
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
  };
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "0px",
    zIndex: 1000,
  };
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div className="modalContainer" style={MODAL_STYLES}>
        <div className="modal-title">
          <h3 style={{ marginLeft: "10px" }}>Job Application</h3>
        </div>
        <div class="container form-m-p">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div class="grid">
              <div class="card flex">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="applicant_name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="card flex">
                <input
                  type="text"
                  placeholder="Your Email"
                  name="applicant_email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div class="card flex">
              <input
                type="text"
                placeholder="Your Phone Number"
                name="applicant_contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                required
              />
            </div>
            <div class="card flex">
              <input
                type="text"
                placeholder="Job Code"
                name="job_code"
                value={props.job_code}
                readOnly
              />
            </div>
            <div class="card flex">
              <input
                type="text"
                placeholder="Job Title"
                name="job_title"
                value={props.job_title}
                readOnly
              />
            </div>
            <div class="card flex">
              <input
                type="file"
                id="document"
                name="document"
                accept=".pdf, .doc, .docx"
              />
            </div>
            <div class="card flex">
              <textarea
                placeholder="Please provide brief introduction of your skills and experience."
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <div className="grid">
              <div class="card flex">
                <input className="btn-submit" type="submit" value="Apply" />
              </div>
              <div class="card flex">
                <input
                  type="submit"
                  onClick={() => {
                    props.setModalOpen(false);
                  }}
                  id="btn-cancel"
                  value="Cancel"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
