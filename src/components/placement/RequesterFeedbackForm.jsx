import React, { useState } from 'react';

const RequesterFeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { feedback });
    alert('Feedback submitted successfully!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '24px 20px',
        border: '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '30px',
            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)'
          }}>
            💬
          </div>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '6px',
            lineHeight: '1.3'
          }}>
            Requester Feedback
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '13px',
            lineHeight: '1.5',
            padding: '0 10px'
          }}>
            Provide honest feedback to help the applicant grow
          </p>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)',
          margin: '20px 0'
        }}></div>

        <div>
          {/* Auto-filled Information Section */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ fontSize: '16px' }}>📧</span>
              Email ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Auto-filled after login"
              disabled
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '14px',
                background: '#f9fafb',
                color: '#9ca3af',
                cursor: 'not-allowed',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ fontSize: '16px' }}>🆔</span>
              Applicant ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Auto-filled after login"
              disabled
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '14px',
                background: '#f9fafb',
                color: '#9ca3af',
                cursor: 'not-allowed',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ fontSize: '16px' }}>🎓</span>
              Batch <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Auto-filled after login"
              disabled
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '14px',
                background: '#f9fafb',
                color: '#9ca3af',
                cursor: 'not-allowed',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)',
            margin: '20px 0'
          }}></div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ fontSize: '16px' }}>👤</span>
              Applicant Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Auto-filled after login"
              disabled
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '14px',
                background: '#f9fafb',
                color: '#9ca3af',
                cursor: 'not-allowed',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)',
            margin: '20px 0'
          }}></div>

          {/* Feedback Section */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ fontSize: '16px' }}>💭</span>
              Feedback <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your detailed feedback here. Include strengths, areas for improvement, and recommendations..."
              rows="8"
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
                lineHeight: '1.5'
              }}
              onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '6px',
              fontStyle: 'italic',
              lineHeight: '1.5'
            }}>
              Cover technical skills, communication, problem-solving, and overall impression.
            </p>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)',
            margin: '20px 0'
          }}></div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
            }}
            onTouchStart={(e) => {
              e.target.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            Submit Feedback
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '11px',
          color: '#9ca3af'
        }}>
          Designed with ❤️ by Alumni Network
        </div>
      </div>
    </div>
  );
};

export default RequesterFeedbackForm;