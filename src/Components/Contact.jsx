import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact-form">
      <input name="firstName" placeholder="First Name" onChange={handleChange} value={form.firstName} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} value={form.lastName} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <textarea name="comments" placeholder="Comments" onChange={handleChange} value={form.comments} />
      <button type="submit" disabled>Submit</button> {/* functionality optional */}
    </form>
  );
}
export default ContactForm;