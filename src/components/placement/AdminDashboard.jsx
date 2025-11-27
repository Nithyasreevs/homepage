import React, { useState } from 'react';

const AlumniJobRequestsAdmin = ({ onBackToDashboard }) => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const jobRequests = [
    {
      id: 1,
      name: 'Rampriya',
      skillset: 'Java, Spring Boot',
      experience: '2 yrs',
      status: 'Pending',
      email: 'rampriya@example.com',
      phone: '+91 98765 43210',
      location: 'Chennai, Tamil Nadu',
      expectedSalary: '₹8-10 LPA',
      preferredRole: 'Backend Developer',
      availability: 'Immediate'
    },
    {
      id: 2,
      name: 'Kanthimathi',
      skillset: 'Python, ML',
      experience: '1 yr',
      status: 'Approved',
      email: 'kanthimathi@example.com',
      phone: '+91 98765 43211',
      location: 'Bangalore, Karnataka',
      expectedSalary: '₹6-8 LPA',
      preferredRole: 'ML Engineer',
      availability: '1 Month Notice'
    },
    {
      id: 3,
      name: 'Anitha',
      skillset: 'React, Node',
      experience: 'Fresher',
      status: 'Rejected',
      email: 'anitha@example.com',
      phone: '+91 98765 43212',
      location: 'Hyderabad, Telangana',
      expectedSalary: '₹4-6 LPA',
      preferredRole: 'Full Stack Developer',
      availability: 'Immediate'
    }
  ];

  const getStatusColor = (status) => {
    const statusMap = {
      'Pending': '#f59e0b',
      'Approved': '#10b981',
      'Rejected': '#ef4444'
    };
    return statusMap[status] || '#f59e0b';
  };

  const handleReview = (request) => {
    setSelectedRequest(request);
  };

  const handleAction = (action) => {
    alert(`Request ${action} for ${selectedRequest.name}`);
    setSelectedRequest(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #f5f7ff 0%, #f0f2ff 50%, #e6e9ff 100%)'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
          <div style={{
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '35px',
            boxShadow: '0 10px 28px rgba(139, 92, 246, 0.32)'
          }}>
            👥
          </div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '8px',
            margin: '0 0 8px 0'
          }}>
            Alumni Job Requests
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: 0
          }}>
            Admin Dashboard - Review & Manage Applications
          </p>
        </div>
        
        {onBackToDashboard && (
          <button
            onClick={onBackToDashboard}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              color: '#7c3aed',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 1)';
              e.target.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            ← Back to Dashboard
          </button>
        )}
      </div>

      {/* Cards Container - Responsive Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
        gap: '25px',
        alignItems: 'stretch'
      }}>
        {jobRequests.map((request) => (
          <div
            key={request.id}
            onClick={() => handleReview(request)}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.15)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.15)';
            }}
          >
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Header with Name and Status */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                gap: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flex: 1
                }}>
                  <span style={{ fontSize: '24px' }}>👤</span>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    {request.name}
                  </h3>
                </div>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  background: getStatusColor(request.status),
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap'
                }}>
                  {request.status}
                </span>
              </div>

              {/* Skillset */}
              <div style={{
                background: 'rgba(139, 92, 246, 0.05)',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '20px' }}>💼</span>
                <span style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {request.skillset}
                </span>
              </div>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '15px',
                flex: '1'
              }}>
                <div style={{
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  borderRadius: '12px',
                  padding: '12px'
                }}>
                  <div style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    Experience
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: '#1f2937',
                    fontWeight: '700'
                  }}>
                    {request.experience}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  borderRadius: '12px',
                  padding: '12px'
                }}>
                  <div style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    Role
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#1f2937',
                    fontWeight: '700',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {request.preferredRole}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                paddingTop: '15px',
                marginTop: 'auto',
                borderTop: '1px solid rgba(139, 92, 246, 0.1)',
                color: '#7c3aed',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'right'
              }}>
                Review Application →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedRequest && (
        <div
          onClick={() => setSelectedRequest(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(40px)',
              borderRadius: '24px',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.25)'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '25px',
              borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'sticky',
              top: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 10
            }}>
              <h2 style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#1f2937',
                margin: 0
              }}>
                {selectedRequest.name}
              </h2>
              <button
                onClick={() => setSelectedRequest(null)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  color: '#7c3aed',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.target.style.color = '#7c3aed';
                  e.target.style.transform = 'rotate(0deg)';
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '25px' }}>
              {/* Contact Info */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '16px',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '18px' }}>📧</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Email
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#1f2937',
                    fontWeight: '600',
                    wordBreak: 'break-word'
                  }}>
                    {selectedRequest.email}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '16px',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '18px' }}>📱</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Phone
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    {selectedRequest.phone}
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '16px',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '18px' }}>📍</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Location
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    {selectedRequest.location}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '16px',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '18px' }}>💰</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Expected Salary
                    </span>
                  </div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {selectedRequest.expectedSalary}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '16px',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '18px' }}>⏱️</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Experience
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    {selectedRequest.experience}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '16px',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '18px' }}>🗓️</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Availability
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    {selectedRequest.availability}
                  </div>
                </div>
              </div>

              {/* Full Width Fields */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                borderRadius: '16px',
                padding: '18px',
                marginBottom: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '18px' }}>💼</span>
                  <span style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Skillset
                  </span>
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#1f2937',
                  fontWeight: '600'
                }}>
                  {selectedRequest.skillset}
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                borderRadius: '16px',
                padding: '18px',
                marginBottom: '25px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '18px' }}>🎯</span>
                  <span style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Preferred Role
                  </span>
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#1f2937',
                  fontWeight: '600'
                }}>
                  {selectedRequest.preferredRole}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '15px'
              }}>
                <button
                  onClick={() => handleAction('approved')}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  ✅ Approve
                </button>
                <button
                  onClick={() => handleAction('rejected')}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
                  }}
                >
                  ❌ Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        fontSize: '12px',
        color: '#9ca3af'
      }}>
        Designed with ❤️ by Alumni Network
      </div>
    </div>
  );
};

export default AlumniJobRequestsAdmin;