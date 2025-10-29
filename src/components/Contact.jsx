import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 👇 handleSubmit function runs when you click "Send Message"
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);

    // 👇 Paste your EmailJS sendForm() code here
    emailjs
      .sendForm(
        "service_khk86gd", // ✅ Your EmailJS Service ID
        "template_femak6k", // ✅ Replace with your Template ID from EmailJS
        e.target, // ✅ This refers to the HTML form
        "-2mv4aoPu8JQs9Zfj" // ✅ Replace with your Public Key
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
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>

      {/* 👇 The form triggers handleSubmit when submitted */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <p>{formMessage}</p>
    </section>
  );
};

// Optional simple inline styling
const styles = {
  section: {
    textAlign: "center",
    padding: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "auto",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    height: "120px",
  },
  button: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "0.8rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Contact;
