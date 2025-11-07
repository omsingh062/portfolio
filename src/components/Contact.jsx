import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_khk86gd",
        "template_femak6k",
        e.target,
        "-2mv4aoPu8JQs9Zfj"
      )
      .then(
        () => {
          setFormMessage("✅ Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setFormMessage("❌ Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <input type="text" name="subject" placeholder="Subject" required />

        <textarea name="message" placeholder="Message" required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <p>{formMessage}</p>
    </section>
  );
};

export default Contact;
