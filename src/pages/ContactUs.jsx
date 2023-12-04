import React, { useRef, useState } from "react";

const ContactUs = () => {
  const form = useRef();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    {/*emailjs
      .sendForm(
        "service_nxdmbvp",
        "template_v0i0joq",
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
      );*/}
      setName("");
      setEmail("");
      setContact("");
      setSubject("");
      setMessage("");
    
  };
  return (
    <section class="features-sub-head bg-light py-3">
      <div className="title">
        <h1 class="xl">Contact Us</h1>
      </div>
      <div class="container grid">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div class="grid">
            <div class="card flex">
              <input type="text" placeholder="Your Name" name="user_name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
            </div>
            <div class="card flex">
              <input type="text" placeholder="Your Email" name="user_email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
          </div>
          <div class="card flex">
            <input type="text" placeholder="Your Phone Number" name="user_contact" value={contact} onChange={(e)=>{setContact(e.target.value)}} required/>
          </div>
          <div class="card flex">
            <input type="text" placeholder="Subject" name="subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} required/>
          </div>
          <div class="card flex">
            <textarea placeholder="Type your message here" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
          </div>
          <div class="card flex">
            <input className="btn-submit" type="submit" value="Send Message" />
          </div>
        </form>
        <div>
          <div className="contact-left">
            <div className="cont-details">
              <div className="company-name"><h6>VINRAYS SOLUTIONS PRIVATE LIMITED</h6></div>
              {/*<div className="d-flex contact-grid pt-3">
                <div className="cont-left text-center me-3">
                  <i class="fa-solid fa-building fa-2x"></i>
                </div>
                <div className="cont-right">
                  <h6>Company Address</h6>
                  <p>
                  7676 Hillmont St, Houston, TX 77040, United States
                  </p>
  </div>
  </div>*/}
              <div className="d-flex contact-grid pt-3">
                <div className="cont-left text-center me-3">
                  <i class="fa-solid fa-phone-volume fa-2x"></i>
                </div>
                <div className="cont-right">
                  <h6>Call Us</h6>
                  <p>+123-456-7890</p>
                </div>
              </div>
              <div className="d-flex contact-grid pt-3">
                <div className="cont-left text-center me-3">
                  <i class="fa-solid fa-envelope fa-2x"></i>
                </div>
                <div className="cont-right">
                  <h6>Email Us</h6>
                  <div className="d-flex">
                    <p>
                      <strong>
                        <i class="fa-solid fa-briefcase"></i>
                      </strong>{"  "}
                      bizdev@vinrays.com
                    </p>
                  </div>
                  <div className="d-flex">
                    <p>
                      <strong>
                        <i class="fa-solid fa-circle-info"></i>
                      </strong>{"  "}
                      info@vinrays.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
