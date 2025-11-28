import React, { useState } from 'react';

const PlacementFeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { feedback });
    alert('Feedback submitted successfully!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px 15px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '25px 20px',
        border: '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: '0 20px 60px rgba(139, 92, 246, 0.25)',
        '@media (min-width: 768px)': {
          padding: '40px'
        }
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 15px',
            fontSize: '28px',
            boxShadow: '0 10px 28px rgba(139, 92, 246, 0.32)',
            '@media (min-width: 768px)': {
              width: '70px',
              height: '70px',
              fontSize: '35px'
            }
          }}>
            ⭐
          </div>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '6px',
            '@media (min-width: 768px)': {
              fontSize: '28px'
            }
          }}>
            Placement Feedback
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '13px',
            lineHeight: '1.4',
            '@media (min-width: 768px)': {
              fontSize: '14px'
            }
          }}>
            Help us improve by sharing feedback on this placement experience
          </p>
        </div>

        <div>
          {/* Auto-filled fields */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '15px',
            marginBottom: '20px',
            '@media (min-width: 768px)': {
              gridTemplateColumns: '1fr 1fr'
            }
          }}>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                <span style={{ color: '#8b5cf6' }}>📧</span>
                Email ID <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                disabled
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px',
                  background: '#f9fafb',
                  color: '#374151',
                  cursor: 'not-allowed',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                <span style={{ color: '#8b5cf6' }}>🆔</span>
                Applicant ID <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Your applicant ID"
                disabled
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px',
                  background: '#f9fafb',
                  color: '#374151',
                  cursor: 'not-allowed',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '15px',
            marginBottom: '20px',
            '@media (min-width: 768px)': {
              gridTemplateColumns: '1fr 1fr'
            }
          }}>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                <span style={{ color: '#8b5cf6' }}>🎓</span>
                Batch <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Your batch year"
                disabled
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px',
                  background: '#f9fafb',
                  color: '#374151',
                  cursor: 'not-allowed',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                <span style={{ color: '#8b5cf6' }}>👤</span>
                Applicant Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                disabled
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px',
                  background: '#f9fafb',
                  color: '#374151',
                  cursor: 'not-allowed',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Info Banner */}
          <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            padding: '12px 14px',
            borderRadius: '12px',
            background: 'rgba(219, 234, 254, 0.8)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginBottom: '20px',
            '@media (min-width: 768px)': {
              padding: '14px 16px',
              gap: '12px'
            }
          }}>
            <span style={{ 
              fontSize: '18px', 
              flexShrink: 0,
              '@media (min-width: 768px)': {
                fontSize: '20px'
              }
            }}>💡</span>
            <p style={{
              margin: 0,
              fontSize: '12px',
              color: '#1e40af',
              lineHeight: '1.5',
              '@media (min-width: 768px)': {
                fontSize: '13px'
              }
            }}>
              Please provide honest and constructive feedback to help the applicant grow.
            </p>
          </div>

          {/* Feedback Section */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              <span style={{ color: '#8b5cf6' }}>💬</span>
              Feedback <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your detailed feedback here. Include strengths, areas for improvement, and recommendations..."
              rows="4"
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '1px solid #d1d5db',
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
                minHeight: '120px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            onTouchStart={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)';
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Submit Feedback
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '11px',
          color: '#9ca3af',
          '@media (min-width: 768px)': {
            fontSize: '12px',
            marginTop: '25px'
          }
        }}>
          
        </div>
      </div>
    </div>
  );
};

export default PlacementFeedbackForm;