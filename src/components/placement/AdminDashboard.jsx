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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
            fontSize: 'clamp(22px, 5vw, 28px)',
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
            fontSize: 'clamp(12px, 2.5vw, 14px)',
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

      {/* Table Container */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(139, 92, 246, 0.15)',
        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.15)',
        overflow: 'hidden'
      }}>
        {/* Desktop Table View */}
        <div style={{ 
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '800px'
          }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                color: 'white'
              }}>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Name
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Skillset
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Experience
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Role
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Status
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {jobRequests.map((request, index) => (
                <tr key={request.id} style={{
                  borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
                  background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(139, 92, 246, 0.02)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = index % 2 === 0 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(139, 92, 246, 0.02)';
                }}>
                  <td style={{
                    padding: '18px 20px',
                    fontSize: '15px',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>👤</span>
                      {request.name}
                    </div>
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    fontSize: '14px',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    {request.skillset}
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    fontSize: '14px',
                    color: '#374151',
                    fontWeight: '600'
                  }}>
                    {request.experience}
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    fontSize: '13px',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    {request.preferredRole}
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: getStatusColor(request.status),
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'inline-block'
                    }}>
                      {request.status}
                    </span>
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    textAlign: 'center'
                  }}>
                    <button
                      onClick={() => handleReview(request)}
                      style={{
                        padding: '8px 20px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        border: 'none',
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 16px rgba(139, 92, 246, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
                      }}
                    >
                      Review →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            padding: '20px',
            overflowY: 'auto'
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
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.25)',
              margin: 'auto'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '20px 25px',
              borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'sticky',
              top: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 10,
              gap: '15px'
            }}>
              <h2 style={{
                fontSize: 'clamp(18px, 4vw, 22px)',
                fontWeight: '800',
                color: '#1f2937',
                margin: 0,
                wordBreak: 'break-word'
              }}>
                {selectedRequest.name}
              </h2>
              <button
                onClick={() => setSelectedRequest(null)}
                style={{
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
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

            {/* Modal Body - Table Format */}
            <div style={{ padding: '25px' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      width: '40%'
                    }}>
                      📧 Email
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600',
                      wordBreak: 'break-word'
                    }}>
                      {selectedRequest.email}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      📱 Phone
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600'
                    }}>
                      {selectedRequest.phone}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      📍 Location
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600'
                    }}>
                      {selectedRequest.location}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      💼 Skillset
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600'
                    }}>
                      {selectedRequest.skillset}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      ⏱️ Experience
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600'
                    }}>
                      {selectedRequest.experience}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      🎯 Preferred Role
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600'
                    }}>
                      {selectedRequest.preferredRole}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      💰 Expected Salary
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '16px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {selectedRequest.expectedSalary}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '12px',
                      color: '#6b7280',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      🗓️ Availability
                    </td>
                    <td style={{
                      padding: '15px 10px',
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: '600'
                    }}>
                      {selectedRequest.availability}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Action Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '15px',
                marginTop: '25px'
              }}>
                <button
                  onClick={() => handleAction('approved')}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    fontSize: 'clamp(13px, 2.5vw, 15px)',
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
                    fontSize: 'clamp(13px, 2.5vw, 15px)',
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
       
      </div>
    </div>
  );
};

export default AlumniJobRequestsAdmin;