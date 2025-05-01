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
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h5 className="mb-3">Contact Us</h5>

          {submitted && (
            <div className="alert alert-success py-2 px-3 mb-3">
              Thank you, <strong>{user?.name}</strong>! Your message has been received.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-2">
              <label htmlFor="name" className="form-label mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className={`form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className={`form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-2">
              <label htmlFor="message" className="form-label mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className={`form-control form-control-sm ${errors.message ? 'is-invalid' : ''}`}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-sm btn-primary w-100 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
