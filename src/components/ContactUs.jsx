import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_q3jbdzm",
      "template_stdceyl",
      e.target,
      "user_NKYLcqZwiFms9AL3RjBZO"
    );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
