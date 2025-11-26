import React, { useState } from "react";
import "./feedback.css"; // import the CSS file

const RequesterFeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { feedback });
    alert("Feedback submitted successfully!");
  };

  return (
    <div className="wrapper">
      <div className="card-box">
        {/* Header */}
        <div className="header">
          <div className="header-icon">💬</div>

          <h2 className="title">Requester Feedback</h2>
          <p className="subtitle">
            Please provide honest and constructive feedback to help the applicant grow
          </p>
        </div>

        <div className="divider" />

        {/* Auto-fill Section */}
        <div className="two-col-grid">
          <div>
            <label className="label">
              <span className="emoji">📧</span>
              Email ID <span className="required">*</span>
            </label>
            <input
              type="email"
              placeholder="Will be auto-filled after successful login"
              disabled
              className="disabled-input"
            />
          </div>

          <div>
            <label className="label">
              <span className="emoji">🆔</span>
              Applicant ID <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Will be auto-filled after successful login"
              disabled
              className="disabled-input"
            />
          </div>
        </div>

        <div className="full-field">
          <label className="label">
            <span className="emoji">🎓</span>
            Batch <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Will be auto-filled after successful login"
            disabled
            className="disabled-input"
          />
        </div>

        <div className="divider" />

        <div className="full-field">
          <label className="label">
            <span className="emoji">👤</span>
            Applicant Name <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Will be auto-filled after successful login"
            disabled
            className="disabled-input"
          />
        </div>

        <div className="divider" />

        {/* Feedback */}
        <div className="full-field">
          <label className="label">
            <span className="emoji">💭</span>
            Feedback <span className="required">*</span>
          </label>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="6"
            placeholder="Write your detailed feedback here..."
            className="textarea"
          />

          <p className="hint">
            Provide constructive feedback covering technical skills, communication,
            problem-solving abilities, and overall impression.
          </p>
        </div>

        <div className="divider" />

        {/* Button */}
        <button className="btn" onClick={handleSubmit}>
          Submit Feedback
        </button>

        <p className="footer-text">Designed with ❤️ by Alumni Network</p>
      </div>
    </div>
  );
};

export default RequesterFeedbackForm;
