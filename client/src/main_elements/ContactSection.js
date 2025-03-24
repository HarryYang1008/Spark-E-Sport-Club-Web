import React from "react";
import "../App.css"; // 引入样式

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-form-container">
        <h4 className="contact-subtitle">GET IN TOUCH</h4>
        <h2 className="contact-title">We'd love to hear from you!</h2>

        <form className="contact-form">
          <label>
            Name<span className="required">*</span>
            <input type="text" placeholder="Jane Smith" required />
          </label>

          <label>
            Email address<span className="required">*</span>
            <input type="email" placeholder="email@website.com" required />
          </label>

          <label>
            Phone number<span className="required">*</span>
            <input type="tel" placeholder="555-555-5555" required />
          </label>

          <label>
            Message
            <textarea placeholder="Write your message here..." rows="4"></textarea>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" required />
            I allow this website to store my submission so they can respond to my inquiry.
            <span className="required">*</span>
          </label>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Get in touch</h3>
        <p>📧 <a href="mailto:2745151374@qq.com">2745151374@qq.com</a></p>

        <h3>Hours</h3>
        <ul className="hours">
          <li>Monday - Friday <span>9:00am – 10:00pm</span></li>
          <li>Saturday <span>9:00am – 6:00pm</span></li>
          <li>Sunday <span>9:00am – 12:00pm</span></li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
