const Contact = ({ contact }) => {
  return (
    <div className="contact-section">
      <h3>Contact Me</h3>
      <p>
        <a href={contact.email}>Email</a>
        <br />
        <a href={contact.linkedin}>LinkedIn</a>
        <br />
        <a href={contact.github}>Github</a>
      </p>
    </div>
  );
};

export default Contact;
