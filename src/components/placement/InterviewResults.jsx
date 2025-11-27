import React, { useState } from 'react';

const InterviewResultsPage = () => {
  const candidateInfo = {
    name: 'Nithyasree VS',
    email: '2312128@nec.edu.in',
    phone: '+91 9176222005 ',
    batch: '2023-2027',
    currentCTC: '16 LPA',
    preferredLocation: 'Bangalore',
    experience: '2 years',
    skills: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'Express.js', 'REST APIs', 'Git']
  };

  const stats = {
    totalApplications: 5,
    inInterview: 2,
    offerReceived: 1
  };

  const applications = [
    {
      id: 1,
      company: 'Vinidder Technologies',
      position: 'Frontend Developer',
      appliedOn: 'Oct 1, 2024',
      status: 'Under Review',
      statusColor: '#3b82f6',
      statusBg: 'rgba(59, 130, 246, 0.1)'
    },
    {
      id: 2,
      company: 'TechCorp Solutions',
      position: 'Full Stack Developer',
      appliedOn: 'Sep 28, 2024',
      status: 'Shortlisted',
      statusColor: '#f59e0b',
      statusBg: 'rgba(245, 158, 11, 0.1)',
      resumeScreening: true
    },
    {
      id: 3,
      company: 'InnovateLabs',
      position: 'React Developer',
      appliedOn: 'Sep 25, 2024',
      status: 'Technical Interview',
      statusColor: '#a855f7',
      statusBg: 'rgba(168, 85, 247, 0.1)',
      interviewDate: 'Oct 15, 2024'
    },
    {
      id: 4,
      company: 'CloudNine Systems',
      position: 'Software Engineer',
      appliedOn: 'Sep 20, 2024',
      status: 'HR Round Pending',
      statusColor: '#ef4444',
      statusBg: 'rgba(239, 68, 68, 0.1)'
    },
    {
      id: 5,
      company: 'FutureTech Inc.',
      position: 'Node Developer',
      appliedOn: 'Sep 15, 2024',
      status: 'Offer Received',
      statusColor: '#10b981',
      statusBg: 'rgba(16, 185, 129, 0.1)',
      package: '₹12 LPA',
      joiningDate: 'Nov 1, 2024'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #f5f7ff 0%, #f0f2ff 50%, #e6e9ff 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          background: 'rgba(219, 234, 254, 0.8)',
          borderRadius: '16px',
          padding: '20px 25px',
          marginBottom: '25px',
          border: '1px solid rgba(139, 92, 246, 0.2)'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1e40af',
            margin: '0 0 5px 0'
          }}>
            INTERVIEW (IN), RESULTS(RS)
          </h1>
        </div>

        {/* Candidate Profile Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '25px',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          boxShadow: '0 10px 30px rgba(139, 92, 246, 0.15)'
        }}>
          <div style={{
            fontSize: '13px',
            color: '#6b7280',
            fontWeight: '600',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            📋 Admin Side View:
          </div>

          {/* Name and Status */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0
            }}>
              {candidateInfo.name}
            </h2>
            <button style={{
              padding: '10px 24px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: 'white',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}>
              Active
            </button>
          </div>

          {/* Info Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '25px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>📧</span>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>EMAIL</div>
                <div style={{ fontSize: '14px', color: '#1f2937', fontWeight: '600' }}>{candidateInfo.email}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>📱</span>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>PHONE</div>
                <div style={{ fontSize: '14px', color: '#1f2937', fontWeight: '600' }}>{candidateInfo.phone}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>🎓</span>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>BATCH</div>
                <div style={{ fontSize: '14px', color: '#1f2937', fontWeight: '600' }}>{candidateInfo.batch}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>📍</span>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>PREFERRED LOCATION</div>
                <div style={{ fontSize: '14px', color: '#1f2937', fontWeight: '600' }}>{candidateInfo.preferredLocation}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>⏱️</span>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>EXPERIENCE</div>
                <div style={{ fontSize: '14px', color: '#1f2937', fontWeight: '600' }}>{candidateInfo.experience}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>💰</span>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>CURRENT CTC</div>
                <div style={{ fontSize: '14px', color: '#1f2937', fontWeight: '600' }}>{candidateInfo.currentCTC}</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '25px' }}>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              fontWeight: '600',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '16px' }}>🔧</span>
              SKILLS
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {candidateInfo.skills.map((skill, index) => (
                <span key={index} style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'rgba(139, 92, 246, 0.08)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  color: '#7c3aed',
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderLeft: '4px solid #3b82f6',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#3b82f6',
                marginBottom: '5px'
              }}>
                {stats.totalApplications}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Total Applications
              </div>
            </div>

            <div style={{
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderLeft: '4px solid #a855f7',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#a855f7',
                marginBottom: '5px'
              }}>
                {stats.inInterview}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                In Interview
              </div>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderLeft: '4px solid #10b981',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#10b981',
                marginBottom: '5px'
              }}>
                {stats.offerReceived}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Offer Received
              </div>
            </div>
          </div>
        </div>

        {/* Application Status Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '25px',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          boxShadow: '0 10px 30px rgba(139, 92, 246, 0.15)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '25px'
          }}>
            <span style={{ fontSize: '20px' }}>📄</span>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0
            }}>
              Application Status
            </h3>
          </div>

          {/* Applications List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {applications.map((app) => (
              <div key={app.id} style={{
                background: 'white',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                borderRadius: '16px',
                padding: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1f2937',
                      margin: '0 0 5px 0'
                    }}>
                      {app.company}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      Position: {app.position}
                    </p>
                  </div>
                  <span style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    background: app.statusBg,
                    color: app.statusColor,
                    fontSize: '12px',
                    fontWeight: '700',
                    whiteSpace: 'nowrap'
                  }}>
                    {app.status}
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '15px',
                  fontSize: '13px'
                }}>
                  <div>
                    <div style={{ color: '#9ca3af', marginBottom: '4px', fontWeight: '600', fontSize: '11px' }}>APPLIED ON</div>
                    <div style={{ color: '#1f2937', fontWeight: '600' }}>{app.appliedOn}</div>
                  </div>
                  
                  {app.interviewDate && (
                    <div>
                      <div style={{ color: '#9ca3af', marginBottom: '4px', fontWeight: '600', fontSize: '11px' }}>INTERVIEW DATE</div>
                      <div style={{ color: '#1f2937', fontWeight: '600' }}>{app.interviewDate}</div>
                    </div>
                  )}
                  
                  {app.package && (
                    <div>
                      <div style={{ color: '#9ca3af', marginBottom: '4px', fontWeight: '600', fontSize: '11px' }}>PACKAGE</div>
                      <div style={{ color: '#1f2937', fontWeight: '700' }}>{app.package}</div>
                    </div>
                  )}
                  
                  {app.joiningDate && (
                    <div>
                      <div style={{ color: '#9ca3af', marginBottom: '4px', fontWeight: '600', fontSize: '11px' }}>JOINING DATE</div>
                      <div style={{ color: '#1f2937', fontWeight: '600' }}>{app.joiningDate}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assign Company Button */}
        <button style={{
          width: '100%',
          padding: '18px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
          marginBottom: '30px'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
        }}>
          Assign Company
        </button>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#9ca3af'
        }}>
          Designed with ❤️ by Alumni Network
        </div>
      </div>
    </div>
  );
};

export default InterviewResultsPage;