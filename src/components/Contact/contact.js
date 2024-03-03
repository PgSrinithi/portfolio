import React, { useRef } from "react";
import "./contact.css";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import emailjs from "@emailjs/browser";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0es2nr7", "template_la9kf6a", form.current, {
        publicKey: "fhQikXcZAV4TFYHVJ",
      })
      .then(
        () => {
          alert("Email Sent Successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong!");
        }
      );
  };
  return (
    <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactPageDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="msg"
        />
        <button type="submit" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img
            src={linkedIn}
            alt="linkedIn"
            className="link"
            onClick={() =>
              window.open("https://www.linkedin.com/in/srinithipg", "_blank")
            }
          />
          <img
            src={github}
            alt="github"
            className="link"
            onClick={() =>
              window.open("https://github.com/PgSrinithi/", "_blank")
            }
          />
          <img src={phone} alt="phone" className="link" /> <span>7358983804</span>
          <img src={email} alt="email" className="link" /> <span>srinithipg1999@gmail.com</span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
