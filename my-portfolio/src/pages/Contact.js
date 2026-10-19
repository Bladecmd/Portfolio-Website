import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, please reach out through the form below or via my social media!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
