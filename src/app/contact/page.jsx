'use client';
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    suggestionsFeedback: '',
    siteRating: '',
    howDidYouHear: '',
    userRole: '',
    'bot-field': '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const encode = (data) => {
    const form = new FormData();
    for (const key in data) {
      form.append(key, data[key]);
    }
    return form;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    if (formData['bot-field']) {
      console.log('Bot detected, submission blocked.');
      setSubmissionStatus('success');
      return;
    }

    try {
      const response = await fetch("/contact", {
        method: "POST",
        body: encode(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          suggestionsFeedback: '',
          siteRating: '',
          howDidYouHear: '',
          'bot-field': ''
        });
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        setSubmissionStatus('error');
        alert('Oops! There was an issue submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Form submission error:', error);
      alert('Network error or problem with submission. Please try again.');
    }
  };

  return (
    <section className="contact-page">
      <h1>📬 Contact & Feedback</h1>
      <p>
        We’re building this for you—and we want to hear what’s working, what’s
        missing, and what you’d love to see next.
      </p>

      <form name="contact" onSubmit={handleSubmit} className="cloudflare-form">
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field */}
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human:
            <input
              name="bot-field"
              onChange={handleChange}
              value={formData['bot-field']}
            />
          </label>
        </p>

        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="firstName">First Name <span className="required">*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name <span className="required">*</span></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="suggestionsFeedback">Suggestions & Feedback <span className="required">*</span></label>
          <textarea
            id="suggestionsFeedback"
            name="suggestionsFeedback"
            value={formData.suggestionsFeedback}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <fieldset>
            <legend>How would you rate your experience on our site? <span className="optional">(optional)</span></legend>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="siteRating"
                  value="Excellent"
                  checked={formData.siteRating === 'Excellent'}
                  onChange={handleChange}
                  // The 'required' attribute has been removed
                />
                Excellent
              </label>
              <label>
                <input
                  type="radio"
                  name="siteRating"
                  value="Good"
                  checked={formData.siteRating === 'Good'}
                  onChange={handleChange}
                  // The 'required' attribute has been removed
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  name="siteRating"
                  value="Fair"
                  checked={formData.siteRating === 'Fair'}
                  onChange={handleChange}
                  // The 'required' attribute has been removed
                />
                Fair
              </label>
              <label>
                <input
                  type="radio"
                  name="siteRating"
                  value="Poor"
                  checked={formData.siteRating === 'Poor'}
                  onChange={handleChange}
                  // The 'required' attribute has been removed
                />
                Poor
              </label>
            </div>
          </fieldset>
        </div>

        <div className="form-group">
          <label htmlFor="howDidYouHear">How did you hear about us? <span className="optional">(optional)</span></label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            // The 'required' attribute has been removed
          >
            <option value="">--Please choose an option--</option>
            <option value="Friend/Colleague">Friend/Colleague</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Social Media">Social Media</option>
            <option value="Blog Post">Blog Post</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
  <label htmlFor="userRole">I am a... <span className="optional">(optional)</span></label>
  <select
    id="userRole"
    name="userRole"
    value={formData.userRole}
    onChange={handleChange}
  >
    <option value="">--Please choose one--</option>
    <option value="Parent">Parent</option>
    <option value="High School Student">High School Student</option>
    <option value="College Student">College Student</option>
    <option value="High School Counselor">High School Counselor</option>
    <option value="Other">Other</option>
  </select>
</div>

        <div className="form-group button-group">
          <button type="submit" disabled={submissionStatus === 'submitting'}>
            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {submissionStatus === 'error' && (
          <p className="form-error-message">
            There was an error submitting your form. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
