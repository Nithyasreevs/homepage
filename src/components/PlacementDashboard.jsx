import React, { useState } from 'react';

// Mock form components for demonstration
const PlacementDataRequestForm = () => <div style={{padding: '20px', background: 'white', borderRadius: '16px'}}>Placement Data Request Form</div>;
const CompanyRegistrationForm = () => <div style={{padding: '20px', background: 'white', borderRadius: '16px'}}>Company Registration Form</div>;
const RequesterFeedbackForm = () => <div style={{padding: '20px', background: 'white', borderRadius: '16px'}}>Requester Feedback Form</div>;
const PlacementFeedbackForm = () => <div style={{padding: '20px', background: 'white', borderRadius: '16px'}}>Placement Feedback Form</div>;

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
      padding: '0 20px 40px'
    },
    placementDashboard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '80vh',
      justifyContent: 'center',
      padding: '2rem 0',
      width: '100%'
    },
    placementContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0'
    },
    dashboardHeader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '2.5rem',
      position: 'relative',
      width: '100%'
    },
    headerContent: {
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%'
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem',
      letterSpacing: '-0.5px',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: '0.95rem',
      color: '#6b7280',
      marginBottom: 0,
      fontWeight: 400,
      padding: '0 20px'
    },
    backBtn: {
      padding: '10px 20px',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      color: '#7c3aed',
      fontWeight: '600',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)',
      marginTop: '1rem',
      display: 'inline-block'
    },
    formsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.25rem',
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%'
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
      borderRadius: '20px',
      padding: '1.75rem 1.5rem',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 30px rgba(139, 92, 246, 0.12)',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.75rem'
    },
    cardIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '14px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.4rem',
      flexShrink: 0,
      boxShadow: '0 6px 16px rgba(139, 92, 246, 0.35)'
    },
    cardTitleWrapper: {
      flex: 1
    },
    cardTitle: {
      fontSize: '1.15rem',
      fontWeight: '700',
      color: '#1f2937',
      margin: 0,
      lineHeight: 1.3
    },
    roleBadge: {
      display: 'inline-block',
      background: 'rgba(139, 92, 246, 0.12)',
      color: '#7c3aed',
      padding: '0.25rem 0.65rem',
      borderRadius: '12px',
      fontSize: '0.7rem',
      fontWeight: '600',
      marginTop: '0.35rem',
      border: '1px solid rgba(139, 92, 246, 0.25)'
    },
    cardText: {
      color: '#6b7280',
      lineHeight: 1.5,
      fontSize: '0.9rem',
      margin: 0,
      paddingLeft: '0'
    },
    singleFormLayout: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0'
    },
    formBackBtn: {
      padding: '10px 16px',
      borderRadius: '16px',
      border: '1px solid rgba(139, 92, 246, 0.25)',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      color: '#7c3aed',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)',
      marginBottom: '1.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  };

  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 92, 246, 0.2)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.12)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.1)';
    }
  };

  const handleBackBtnHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
      e.currentTarget.style.transform = 'translateX(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.2)';
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
                <div style={styles.cardTitleWrapper}>
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
                <div style={styles.cardTitleWrapper}>
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
                <div style={styles.cardTitleWrapper}>
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
                <div style={styles.cardTitleWrapper}>
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
        
        @media (min-width: 768px) {
          .dashboard-wrapper .content-section {
            padding: 0 40px 60px;
          }
          
          .placement-dashboard {
            padding: 2.5rem 0;
          }
          
          .placement-content {
            padding: 0 2rem !important;
          }
          
          .dashboard-header {
            margin-bottom: 3.5rem;
          }
          
          .title {
            font-size: 2.5rem !important;
          }
          
          .subtitle {
            font-size: 1.05rem !important;
          }
          
          .back-btn {
            position: absolute;
            right: 0;
            top: 0;
            margin-top: 0;
          }
          
          .forms-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
            max-width: 1200px !important;
          }
          
          .form-card {
            padding: 2.5rem 2.5rem !important;
          }
          
          .card-icon {
            width: 52px !important;
            height: 52px !important;
            font-size: 1.5rem !important;
          }
          
          .card-title {
            font-size: 1.4rem !important;
          }
          
          .card-text {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 1024px) {
          .content-section {
            padding: 0 60px 60px !important;
          }
          
          .placement-dashboard {
            padding: 3rem 0 !important;
          }
          
          .placement-content {
            padding: 0 3rem !important;
          }
          
          .dashboard-header {
            margin-bottom: 4rem !important;
          }
          
          .title {
            font-size: 3rem !important;
          }
          
          .subtitle {
            font-size: 1.15rem !important;
          }
          
          .back-btn {
            padding: 12px 24px !important;
            font-size: 0.95rem !important;
          }
          
          .forms-grid {
            gap: 2.5rem !important;
            max-width: 1400px !important;
          }
          
          .form-card {
            padding: 3rem 3.5rem !important;
            min-height: 190px;
          }
          
          .card-header {
            gap: 1.5rem !important;
            margin-bottom: 1.25rem !important;
          }
          
          .card-icon {
            width: 56px !important;
            height: 56px !important;
            font-size: 1.6rem !important;
          }
          
          .card-title {
            font-size: 1.65rem !important;
          }
          
          .role-badge {
            padding: 0.35rem 0.9rem !important;
            font-size: 0.8rem !important;
          }
          
          .card-text {
            font-size: 1.05rem !important;
            padding-left: 5rem !important;
          }
        }
        
        /* Apply classes */
        ${styles.dashboardWrapper ? '.dashboard-wrapper { }' : ''}
        ${styles.contentSection ? '.content-section { }' : ''}
        ${styles.placementDashboard ? '.placement-dashboard { }' : ''}
        ${styles.placementContent ? '.placement-content { }' : ''}
        ${styles.dashboardHeader ? '.dashboard-header { }' : ''}
        ${styles.title ? '.title { }' : ''}
        ${styles.subtitle ? '.subtitle { }' : ''}
        ${styles.backBtn ? '.back-btn { }' : ''}
        ${styles.formsGrid ? '.forms-grid { }' : ''}
        ${styles.formCard ? '.form-card { }' : ''}
        ${styles.cardHeader ? '.card-header { }' : ''}
        ${styles.cardIcon ? '.card-icon { }' : ''}
        ${styles.cardTitle ? '.card-title { }' : ''}
        ${styles.roleBadge ? '.role-badge { }' : ''}
        ${styles.cardText ? '.card-text { }' : ''}
      `}</style>
    </div>
  );
};

export default PlacementDashboard;