import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid Email format";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setUser({ ...form });
      setErrors({});
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div>
      {submitted && (
        <p style={{ color: "green" }}>Thank you, {user?.name}!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p style={{ color: "#FF0000", margin: 0 }}>{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "#FF0000", margin: 0 }}>{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p style={{ color: "#FF0000", margin: 0 }}>{errors.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
