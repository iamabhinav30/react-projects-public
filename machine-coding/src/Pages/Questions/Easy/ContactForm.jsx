import React, { useState } from "react";

function ContactForm() {
  // Form state: stores input values
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Stores validation errors for each field
  const [errors, setErrors] = useState({});

  // Stores user data after successful submission
  const [user, setUser] = useState(null);

  // Tracks whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Updates form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Validates form input and returns any errors
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

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    const validationErrors = validate(); // Run validation

    if (Object.keys(validationErrors).length > 0) {
      // If errors exist, update error state
      setErrors(validationErrors);
    } else {
      // If no errors, mark as submitted and reset form
      setSubmitted(true);
      setUser({ ...form });
      setErrors({});
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <h3 className="mb-4">Contact Us</h3>

          {/* Show success message after submission */}
          {submitted && (
            <div className="alert alert-success">
              Thank you, {user?.name}!
            </div>
          )}

          {/* Contact form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div className="mb-1">
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

            {/* Email Field */}
            <div className="mb-1">
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

            {/* Message Field */}
            <div className="mb-1">
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

            {/* Submit Button */}
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
