import React, { useState } from "react";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;

    if (!name.value || !email.value || !subject.value || !message.value) {
      setFormMessage("Please fill out all fields.");
      return;
    }

    setFormMessage("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>{formMessage}</p>
    </section>
  );
};

export default Contact;
