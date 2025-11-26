import React, { useState } from 'react';
import PlacementDataRequestForm from './placement/PlacementDataRequestForm';
import CompanyRegistrationForm from './placement/CompanyRegistrationForm';
import RequesterFeedbackForm from './placement/RequesterFeedbackForm';
import PlacementFeedbackForm from './placement/PlacementFeedbackForm';
const PlacementDashboard = ({ onBackToHome }) => {
  const [view, setView] = useState('dashboard');

  const styles = {
    dashboardWrapper: {
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      background: 'linear-gradient(135deg, #f5f7ff 0%, #f0f2ff 50%, #e6e9ff 100%)'
    },
    animatedBg: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    },
    orb: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.4,
      animation: 'float 20s infinite ease-in-out'
    },
    orb1: {
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, #8b5cf6 0%, #a855f7 100%)',
      top: '-250px',
      left: '-250px'
    },
    orb2: {
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, #c4b5fd 0%, #a78bfa 100%)',
      top: '50%',
      right: '-200px',
      animationDelay: '7s'
    },
    orb3: {
      width: '350px',
      height: '350px',
      background: 'radial-gradient(circle, #ddd6fe 0%, #c4b5fd 100%)',
      bottom: '-150px',
      left: '30%',
      animationDelay: '14s'
    },
    contentSection: {
      position: 'relative',
      zIndex: 10,
      padding: '0 60px 60px'
    },
    placementDashboard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '80vh',
      justifyContent: 'center',
      padding: '3rem 0',
      width: '100%'
    },
    placementContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 3rem'
    },
    dashboardHeader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '4rem',
      position: 'relative',
      width: '100%'
    },
    headerContent: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.75rem',
      letterSpacing: '-0.5px'
    },
    subtitle: {
      fontSize: '1.15rem',
      color: '#6b7280',
      marginBottom: 0,
      fontWeight: 400
    },
    backBtn: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: '12px 24px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      color: '#7c3aed',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)'
    },
    formsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%'
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
      borderRadius: '28px',
      padding: '3rem 3.5rem',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 40px rgba(139, 92, 246, 0.12)',
      textAlign: 'left',
      minHeight: '190px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '1.25rem'
    },
    cardIcon: {
      width: '56px',
      height: '56px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.6rem',
      flexShrink: 0,
      boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)'
    },
    cardTitle: {
      fontSize: '1.65rem',
      fontWeight: '700',
      color: '#1f2937',
      margin: 0,
      lineHeight: 1.3
    },
    roleBadge: {
      display: 'inline-block',
      background: 'rgba(139, 92, 246, 0.12)',
      color: '#7c3aed',
      padding: '0.35rem 0.9rem',
      borderRadius: '14px',
      fontSize: '0.8rem',
      fontWeight: '600',
      marginTop: '0.5rem',
      border: '1px solid rgba(139, 92, 246, 0.25)'
    },
    cardText: {
      color: '#6b7280',
      lineHeight: 1.65,
      fontSize: '1.05rem',
      margin: 0,
      paddingLeft: '5rem'
    },
    singleFormLayout: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 3rem'
    },
    formBackBtn: {
      padding: '10px 18px',
      borderRadius: '20px',
      border: '1px solid rgba(139, 92, 246, 0.25)',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      color: '#7c3aed',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)',
      marginBottom: '2rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.25)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 10px 40px rgba(139, 92, 246, 0.12)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.1)';
    }
  };

  const handleBackBtnHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
      e.currentTarget.style.transform = 'translateX(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.2)';
    } else {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.1)';
    }
  };

  const DashboardView = () => (
    <div style={styles.placementDashboard}>
      <div style={{ width: '100%' }}>
        <section style={styles.placementContent}>
          <div style={styles.dashboardHeader}>
            <div style={styles.headerContent}>
              <h2 style={styles.title}>Placement Dashboard</h2>
              <p style={styles.subtitle}>
                Choose a section to manage placement activities.
              </p>
            </div>
            {onBackToHome && (
              <button 
                style={styles.backBtn}
                onClick={onBackToHome}
                onMouseEnter={(e) => handleBackBtnHover(e, true)}
                onMouseLeave={(e) => handleBackBtnHover(e, false)}
              >
                ← Back to Home
              </button>
            )}
          </div>

          <div style={styles.formsGrid}>
            <div
              style={styles.formCard}
              onClick={() => setView('dataRequest')}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>📊</div>
                <div>
                  <h3 style={styles.cardTitle}>Placement Data Request</h3>
                  <span style={styles.roleBadge}>Admin</span>
                </div>
              </div>
              <p style={styles.cardText}>
                Share preferred locations, companies, skills and returns.
              </p>
            </div>

            <div
              style={styles.formCard}
              onClick={() => setView('company')}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>🏢</div>
                <div>
                  <h3 style={styles.cardTitle}>Add New Company</h3>
                  <span style={styles.roleBadge}>Register</span>
                </div>
              </div>
              <p style={styles.cardText}>
                Register companies, roles, skills required and CTC details.
              </p>
            </div>

            <div
              style={styles.formCard}
              onClick={() => setView('requesterFeedback')}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>💬</div>
                <div>
                  <h3 style={styles.cardTitle}>Requester Feedback</h3>
                </div>
              </div>
              <p style={styles.cardText}>
                Collect feedback about the placement data request process.
              </p>
            </div>

            <div
              style={styles.formCard}
              onClick={() => setView('placementFeedback')}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>⭐</div>
                <div>
                  <h3 style={styles.cardTitle}>Placement Feedback</h3>
                </div>
              </div>
              <p style={styles.cardText}>
                Capture detailed feedback on the final placement outcome.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const FormView = ({ formComponent }) => (
    <div style={styles.placementDashboard}>
      <div style={styles.singleFormLayout}>
        <section style={{ ...styles.placementContent, maxWidth: '700px', padding: 0 }}>
          <button
            style={styles.formBackBtn}
            onClick={() => setView('dashboard')}
            onMouseEnter={(e) => handleBackBtnHover(e, true)}
            onMouseLeave={(e) => handleBackBtnHover(e, false)}
          >
            ← Back to Dashboard
          </button>
          {formComponent}
        </section>
      </div>
    </div>
  );

  return (
    <div style={styles.dashboardWrapper}>
      <div style={styles.animatedBg}>
        <div style={{...styles.orb, ...styles.orb1}}></div>
        <div style={{...styles.orb, ...styles.orb2}}></div>
        <div style={{...styles.orb, ...styles.orb3}}></div>
      </div>

      <main style={styles.contentSection}>
        {view === 'dashboard' && <DashboardView />}
        {view === 'dataRequest' && <FormView formComponent={<PlacementDataRequestForm />} />}
        {view === 'company' && <FormView formComponent={<CompanyRegistrationForm />} />}
        {view === 'requesterFeedback' && <FormView formComponent={<RequesterFeedbackForm />} />}
        {view === 'placementFeedback' && <FormView formComponent={<PlacementFeedbackForm />} />}
      </main>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }
        
        @media (max-width: 1024px) {
          .forms-grid {
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .forms-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PlacementDashboard;