import React, { useState } from 'react';

const AssignedCompaniesDashboard = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'vlinder',
      role: 'Full Stack Developer',
      companyId: '875d',
      status: 'Completed',
      feedback: ''
    },
    {
      id: 2,
      name: 'TechCorp Solutions',
      role: 'Frontend Developer',
      companyId: 'b643',
      status: 'In Progress',
      feedback: ''
    },
    {
      id: 3,
      name: 'DataFlow Systems',
      role: 'Backend Engineer',
      companyId: '4b3f',
      status: 'Rejected',
      feedback: ''
    },
    {
      id: 4,
      name: 'CloudNine Technologies',
      role: 'DevOps Engineer',
      companyId: 'c892',
      status: 'Pending',
      feedback: ''
    }
  ]);

  const [showStatusDropdown, setShowStatusDropdown] = useState(null);

  const statusOptions = [
    { value: 'Pending', label: 'Pending', color: '#f59e0b' },
    { value: 'In Progress', label: 'In Progress', color: '#3b82f6' },
    { value: 'Completed', label: 'Completed', color: '#10b981' },
    { value: 'Rejected', label: 'Rejected', color: '#ef4444' },
    { value: 'Not applicable', label: 'Not applicable', color: '#6b7280' }
  ];

  const getStatusColor = (status) => {
    const statusMap = {
      'Completed': '#10b981',
      'In Progress': '#3b82f6',
      'Rejected': '#ef4444',
      'Pending': '#f59e0b',
      'Not applicable': '#6b7280'
    };
    return statusMap[status] || statusMap['Pending'];
  };

  const getStatusIcon = (status) => {
    const iconMap = {
      'Completed': '✓',
      'In Progress': '→',
      'Rejected': '✕',
      'Pending': '⚠',
      'Not applicable': '－'
    };
    return iconMap[status] || '⚠';
  };

  const handleStatusChange = (companyId, newStatus) => {
    setCompanies(companies.map(company => 
      company.id === companyId ? { ...company, status: newStatus } : company
    ));
    setShowStatusDropdown(null);
  };

  const handleFeedbackChange = (companyId, feedback) => {
    setCompanies(companies.map(company => 
      company.id === companyId ? { ...company, feedback } : company
    ));
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #f5f7ff 0%, #f0f2ff 50%, #e6e9ff 100%)'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 30px',
        textAlign: 'center'
      }}>
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
          🏢
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
          Assigned Companies
        </h1>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          margin: 0
        }}>
          Manage Your Company Assignments & Interview Progress
        </p>
      </div>

      {/* Cards Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {companies.map((company) => (
          <div
            key={company.id}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.15)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              width: '320px',
              flex: '0 0 320px'
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
            {/* Company Logo Section */}
            <div style={{
              background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '120px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '40px', opacity: 0.7 }}>🏢</span>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  Company Logo
                </span>
              </div>
            </div>

            {/* Company Info Section */}
            <div style={{ padding: '25px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 15px 0',
                paddingBottom: '15px',
                borderBottom: '2px solid rgba(139, 92, 246, 0.1)'
              }}>
                {company.name}
              </h3>

              {/* Role */}
              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '6px'
                }}>
                  <span style={{ color: '#8b5cf6' }}>💼</span>
                  Role
                </label>
                <div style={{
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: '500'
                }}>
                  {company.role}
                </div>
              </div>

              {/* Company ID */}
              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '6px'
                }}>
                  <span style={{ color: '#8b5cf6' }}>🆔</span>
                  Company ID
                </label>
                <div style={{
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: '500'
                }}>
                  {company.companyId}
                </div>
              </div>

              {/* Status Section */}
              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: '#8b5cf6' }}>📊</span>
                  Status
                </label>
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowStatusDropdown(showStatusDropdown === company.id ? null : company.id)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: 'none',
                      borderRadius: '10px',
                      background: getStatusColor(company.status),
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{getStatusIcon(company.status)}</span>
                    <span style={{ flex: 1, textAlign: 'left' }}>{company.status}</span>
                  </button>
                  
                  {showStatusDropdown === company.id && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      marginTop: '8px',
                      background: 'white',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      borderRadius: '10px',
                      boxShadow: '0 8px 24px rgba(139, 92, 246, 0.15)',
                      overflow: 'hidden',
                      zIndex: 100
                    }}>
                      {statusOptions.map((option, index) => (
                        <button
                          key={option.value}
                          onClick={() => handleStatusChange(company.id, option.value)}
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: 'none',
                            background: 'white',
                            color: '#1f2937',
                            fontWeight: '600',
                            fontSize: '14px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            borderBottom: index < statusOptions.length - 1 ? '1px solid rgba(139, 92, 246, 0.1)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(139, 92, 246, 0.1)';
                            e.target.style.color = '#7c3aed';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#1f2937';
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Feedback Section */}
              <div>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: '#8b5cf6' }}>💬</span>
                  Feedback
                </label>
                <textarea
                  value={company.feedback}
                  onChange={(e) => handleFeedbackChange(company.id, e.target.value)}
                  placeholder="Enter your feedback..."
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #d1d5db',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                    minHeight: '80px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default AssignedCompaniesDashboard;