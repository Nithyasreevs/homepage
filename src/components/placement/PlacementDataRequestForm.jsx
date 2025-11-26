import React, { useState } from 'react';

const PlacementDataRequestForm = () => {
  const [formData, setFormData] = useState({
    preferredLocation: '',
    skillset: '',
    currentCompany: '',
    experience: '',
    currentCTC: '',
    message: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px 15px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '25px 20px',
        border: '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 15px',
            fontSize: '28px',
            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)'
          }}>
            📊
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
            Placement Data Request
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '13px',
            lineHeight: '1.4',
            padding: '0 10px'
          }}>
            Please share your placement preferences
          </p>
        </div>

        <div>
          {/* Auto-filled fields - Stacked for mobile */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>👤</span>
              Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Auto-filled after login"
              disabled
              style={{
                width: '100%',
                padding: '14px 12px',
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

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>📧</span>
              Personal Email ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Auto-filled after login"
              disabled
              style={{
                width: '100%',
                padding: '14px 12px',
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

          {/* Contact and Batch - Stack on mobile */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '15px', 
            marginBottom: '20px'
          }}>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                <span style={{ color: '#8b5cf6', fontSize: '14px' }}>📱</span>
                Contact No <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="Auto-filled after login"
                disabled
                style={{
                  width: '100%',
                  padding: '14px 12px',
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
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                <span style={{ color: '#8b5cf6', fontSize: '14px' }}>🎓</span>
                Batch <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Auto-filled after login"
                disabled
                style={{
                  width: '100%',
                  padding: '14px 12px',
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
          </div>

          {/* Active fields */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>📍</span>
              Preferred Location <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              placeholder="City or Country"
              style={{
                width: '100%',
                padding: '14px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>🎯</span>
              Skillset <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              name="skillset"
              value={formData.skillset}
              onChange={handleChange}
              placeholder="Enter your skills"
              style={{
                width: '100%',
                padding: '14px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>🏢</span>
              Current Company <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleChange}
              placeholder="Enter your company"
              style={{
                width: '100%',
                padding: '14px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          {/* Experience and CTC - Stack on mobile */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '15px', 
            marginBottom: '20px'
          }}>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                <span style={{ color: '#8b5cf6', fontSize: '14px' }}>⏱️</span>
                Years of Experience <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Years of experience"
                style={{
                  width: '100%',
                  padding: '14px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '10px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                <span style={{ color: '#8b5cf6', fontSize: '14px' }}>💰</span>
                Current CTC <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleChange}
                placeholder="Current CTC"
                style={{
                  width: '100%',
                  padding: '14px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '10px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>💬</span>
              Message <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Add a message"
              rows="4"
              style={{
                width: '100%',
                padding: '14px 12px',
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

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              <span style={{ color: '#8b5cf6', fontSize: '14px' }}>📎</span>
              Attachment <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              style={{
                width: '100%',
                padding: '14px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '10px',
                fontSize: '14px',
                cursor: 'pointer',
                boxSizing: 'border-box',
                background: 'white'
              }}
            />
            <p style={{
              fontSize: '11px',
              color: '#6b7280',
              marginTop: '6px',
              marginLeft: '2px',
              lineHeight: '1.4'
            }}>
              Upload your resume (PDF, DOC, DOCX)
            </p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#4b5563'
            }}>
              <input
                type="checkbox"
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: '#8b5cf6'
                }}
              />
              I'm not a robot
            </label>
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '16px',
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
              e.target.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            onTouchStart={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 6px 15px rgba(139, 92, 246, 0.4)';
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Submit
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '11px',
          color: '#9ca3af',
          padding: '0 10px'
        }}>
          Designed with ❤️ by Alumni Network
        </div>
      </div>
    </div>
  );
};

export default PlacementDataRequestForm;