/**
 * Create a Contact Form Component that allows users to enter their name, email, and a message, and submit the form. Display a confirmation message after a successful submission.
Requirements
1. The form must contain three fields: name, email, and message and must have labels "Name :"
', "Email:", "Message:".
2. All fields are required.
3. The email field must be validated to ensure proper format.
4. On submission, show a "Thank you, User" message, where User is the entered name.
5. If you try to submit the form with any of the fields empty, it will prevent submission and show an error message like:
• "Name is required" for the name field.
• "Email is required" for the email field.
• "Message is required" for the message field.
6. If the email is not in valid format show an error message, "Invalid email format",
Constraints & Edge Cases
• Constraint 1: Name, email, and message are mandatory fields.
• Constraint 2: Email must be in valid format.
• Edge Case 1: User submits without filling fields - show error.
• Edge Case 2: User enters invalid email → show specific email error.
• Edge Case 3: After successful submission, fields should reset.
*/
import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h3 className="mb-4">Contact Us</h3>

          {submitted && (
            <div className="alert alert-success">
              Thank you, <strong>{user?.name}</strong>! Your message has been received.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
