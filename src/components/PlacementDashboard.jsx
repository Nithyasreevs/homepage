import React, { useState, useEffect } from 'react';
import PlacementDataRequestForm from './placement/PlacementDataRequestForm';
import CompanyRegistrationForm from './placement/CompanyRegistrationForm';
import RequesterFeedbackForm from './placement/RequesterFeedbackForm';
import PlacementFeedbackForm from './placement/PlacementFeedbackForm';
import AdminDashboard from './placement/AdminDashboard';
import AssignedCompanies from './placement/AssignedCompanies';
import InterviewResults from './placement/InterviewResults';

const PlacementDashboard = ({ onBackToHome }) => {
  const [view, setView] = useState('dashboard');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [filteredApplications, setFilteredApplications] = useState([]);

  // Mock analytics data with more applications
  useEffect(() => {
    const mockAnalyticsData = {
      overview: {
        total: 156,
        pending: 42,
        completed: 87,
        rejected: 27,
        inProgress: 18,
        successRate: 68
      },
      applications: [
        { id: 1, name: 'John Doe', company: 'Google', status: 'completed', date: '2024-01-15', role: 'Software Engineer', ctc: '45 LPA' },
        { id: 2, name: 'Jane Smith', company: 'Microsoft', status: 'pending', date: '2024-01-16', role: 'Product Manager', ctc: '38 LPA' },
        { id: 3, name: 'Mike Johnson', company: 'Amazon', status: 'rejected', date: '2024-01-14', role: 'Data Scientist', ctc: '42 LPA' },
        { id: 4, name: 'Sarah Wilson', company: 'Meta', status: 'inProgress', date: '2024-01-17', role: 'Frontend Developer', ctc: '35 LPA' },
        { id: 5, name: 'David Brown', company: 'Netflix', status: 'completed', date: '2024-01-13', role: 'Backend Engineer', ctc: '48 LPA' },
        { id: 6, name: 'Emily Davis', company: 'Apple', status: 'pending', date: '2024-01-18', role: 'iOS Developer', ctc: '40 LPA' },
        { id: 7, name: 'Chris Lee', company: 'Google', status: 'completed', date: '2024-01-12', role: 'ML Engineer', ctc: '52 LPA' },
        { id: 8, name: 'Amanda Garcia', company: 'Microsoft', status: 'rejected', date: '2024-01-11', role: 'UX Designer', ctc: '32 LPA' },
        { id: 9, name: 'Robert Wilson', company: 'Amazon', status: 'inProgress', date: '2024-01-19', role: 'DevOps Engineer', ctc: '44 LPA' },
        { id: 10, name: 'Lisa Anderson', company: 'Google', status: 'completed', date: '2024-01-10', role: 'Data Analyst', ctc: '36 LPA' }
      ]
    };
    setAnalyticsData(mockAnalyticsData);
    setFilteredApplications(mockAnalyticsData.applications);
  }, []);

  // Filter applications based on search and filters
  useEffect(() => {
    if (analyticsData) {
      let filtered = analyticsData.applications;

      // Search filter
      if (searchTerm) {
        filtered = filtered.filter(app => 
          app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.status.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Status filter
      if (statusFilter !== 'all') {
        filtered = filtered.filter(app => app.status === statusFilter);
      }

      // Date filter (simple implementation)
      if (dateFilter !== 'all') {
        const today = new Date();
        const filterDate = new Date();
        
        switch (dateFilter) {
          case 'today':
            filtered = filtered.filter(app => new Date(app.date).toDateString() === today.toDateString());
            break;
          case 'week':
            filterDate.setDate(today.getDate() - 7);
            filtered = filtered.filter(app => new Date(app.date) >= filterDate);
            break;
          case 'month':
            filterDate.setMonth(today.getMonth() - 1);
            filtered = filtered.filter(app => new Date(app.date) >= filterDate);
            break;
          default:
            break;
        }
      }

      setFilteredApplications(filtered);
    }
  }, [searchTerm, statusFilter, dateFilter, analyticsData]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'rejected': return '#ef4444';
      case 'inProgress': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'pending': return '⏳';
      case 'rejected': return '❌';
      case 'inProgress': return '🔄';
      default: return '📄';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setDateFilter('all');
  };

  const styles = {
    dashboardWrapper: {
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      background: 'linear-gradient(135deg, #f5f7ff 0%, #f0f2ff 50%, #e6e9ff 100%)',
      overflowX: 'hidden'
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
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, #8b5cf6 0%, #a855f7 100%)',
      top: '-150px',
      left: '-150px'
    },
    orb2: {
      width: '250px',
      height: '250px',
      background: 'radial-gradient(circle, #c4b5fd 0%, #a78bfa 100%)',
      top: '50%',
      right: '-125px',
      animationDelay: '7s'
    },
    orb3: {
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, #ddd6fe 0%, #c4b5fd 100%)',
      bottom: '-100px',
      left: '20%',
      animationDelay: '14s'
    },
    contentSection: {
      position: 'relative',
      zIndex: 10,
      padding: '0 16px 32px',
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box'
    },
    placementDashboard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '80vh',
      justifyContent: 'flex-start',
      padding: '1.5rem 0',
      width: '100%'
    },
    placementContent: {
      width: '100%',
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0',
      boxSizing: 'border-box'
    },
    dashboardHeader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '2rem',
      position: 'relative',
      width: '100%',
      padding: '0 8px'
    },
    headerContent: {
      maxWidth: '100%',
      margin: '0 auto',
      width: '100%'
    },
    title: {
      fontSize: '1.75rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem',
      letterSpacing: '-0.5px',
      lineHeight: '1.2',
      wordWrap: 'break-word'
    },
    subtitle: {
      fontSize: '0.9rem',
      color: '#6b7280',
      marginBottom: 0,
      fontWeight: 400,
      padding: '0 12px',
      lineHeight: '1.4'
    },
    backBtn: {
      padding: '10px 16px',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      color: '#7c3aed',
      fontWeight: '600',
      fontSize: '0.85rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)',
      marginTop: '1rem',
      display: 'inline-block',
      width: 'auto'
    },
    // Analytics Cards Styles
    analyticsSection: {
      width: '100%',
      marginBottom: '2rem',
      padding: '0 8px'
    },
    analyticsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      marginBottom: '1.5rem',
      width: '100%'
    },
    analyticsCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
      borderRadius: '16px',
      padding: '1.25rem 1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 30px rgba(139, 92, 246, 0.12)',
      textAlign: 'center',
      minHeight: '100px'
    },
    analyticsValue: {
      fontSize: '1.75rem',
      fontWeight: '800',
      margin: '0.5rem 0',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2'
    },
    analyticsLabel: {
      fontSize: '0.75rem',
      color: '#6b7280',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      lineHeight: '1.2'
    },
    // Search and Filter Section
    searchFilterSection: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
      borderRadius: '16px',
      padding: '1.25rem',
      marginBottom: '1.5rem',
      boxShadow: '0 8px 30px rgba(139, 92, 246, 0.12)',
      width: '100%',
      boxSizing: 'border-box'
    },
    searchFilterGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'stretch'
    },
    searchInput: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '12px',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      fontSize: '1rem',
      background: 'rgba(255, 255, 255, 0.8)',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    filterRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'stretch'
    },
    filterGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%'
    },
    filterLabel: {
      fontSize: '0.8rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.25rem'
    },
    filterSelect: {
      padding: '10px 12px',
      borderRadius: '10px',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      fontSize: '0.9rem',
      background: 'rgba(255, 255, 255, 0.8)',
      cursor: 'pointer',
      width: '100%',
      boxSizing: 'border-box'
    },
    clearFiltersBtn: {
      padding: '10px 16px',
      borderRadius: '10px',
      border: '1px solid rgba(239, 68, 68, 0.2)',
      background: 'rgba(239, 68, 68, 0.1)',
      color: '#ef4444',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      width: '100%',
      boxSizing: 'border-box'
    },
    resultsCount: {
      fontSize: '0.85rem',
      color: '#6b7280',
      fontWeight: '500',
      marginTop: '0.5rem',
      textAlign: 'center'
    },
    // Applications Table
    applicationsSection: {
      marginBottom: '2rem',
      width: '100%',
      padding: '0 8px'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    applicationsTable: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(139, 92, 246, 0.12)',
      marginBottom: '1.5rem',
      width: '100%',
      overflowX: 'auto'
    },
    tableContainer: {
      minWidth: '600px',
      width: '100%'
    },
    tableHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      padding: '1rem',
      background: 'rgba(139, 92, 246, 0.05)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
      fontWeight: '600',
      color: '#374151',
      fontSize: '0.8rem',
      minWidth: '600px'
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      padding: '1rem',
      borderBottom: '1px solid rgba(139, 92, 246, 0.05)',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      minWidth: '600px'
    },
    statusBadge: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '0.7rem',
      fontWeight: '600',
      textTransform: 'capitalize',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      width: 'fit-content'
    },
    // Big Quick Actions Cards Styles
    navigationSection: {
      width: '100%',
      padding: '0 8px'
    },
    bigCardsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem',
      margin: '0 auto',
      width: '100%'
    },
    bigCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
      borderRadius: '16px',
      padding: '1.5rem 1.25rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 30px rgba(139, 92, 246, 0.12)',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '140px',
      width: '100%',
      boxSizing: 'border-box'
    },
    bigCardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.75rem'
    },
    bigCardIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '14px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.4rem',
      flexShrink: 0,
      boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)'
    },
    bigCardTitleWrapper: {
      flex: 1,
      minWidth: 0
    },
    bigCardTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#1f2937',
      margin: '0 0 0.25rem 0',
      lineHeight: 1.3,
      wordWrap: 'break-word'
    },
    bigCardBadge: {
      display: 'inline-block',
      background: 'rgba(139, 92, 246, 0.12)',
      color: '#7c3aed',
      padding: '0.25rem 0.5rem',
      borderRadius: '8px',
      fontSize: '0.7rem',
      fontWeight: '600',
      border: '1px solid rgba(139, 92, 246, 0.25)'
    },
    bigCardText: {
      color: '#6b7280',
      lineHeight: 1.5,
      fontSize: '0.85rem',
      margin: 0,
      wordWrap: 'break-word'
    },
    singleFormLayout: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0 16px',
      boxSizing: 'border-box'
    },
    formBackBtn: {
      padding: '10px 16px',
      borderRadius: '12px',
      border: '1px solid rgba(139, 92, 246, 0.25)',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      color: '#7c3aed',
      fontSize: '0.85rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)',
      marginBottom: '1.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      width: 'auto'
    }
  };

  const handleBigCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 92, 246, 0.2)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.12)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.1)';
    }
  };

  const handleBigCardTouch = (e, viewName) => {
    e.currentTarget.style.transform = 'scale(0.98)';
    e.currentTarget.style.transition = 'transform 0.1s';
    setTimeout(() => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.transition = 'all 0.3s ease';
      setView(viewName);
    }, 100);
  };

  const handleBackBtnHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
      e.currentTarget.style.transform = 'translateX(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.15)';
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
                Comprehensive overview of placement activities and analytics
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

          {/* Analytics Cards Section - TOP */}
          {analyticsData && (
            <div style={styles.analyticsSection}>
              <div style={styles.analyticsGrid}>
                <div style={styles.analyticsCard}>
                  <div style={styles.analyticsLabel}>Total Applications</div>
                  <div style={styles.analyticsValue}>{analyticsData.overview.total}</div>
                </div>
                <div style={styles.analyticsCard}>
                  <div style={styles.analyticsLabel}>Pending</div>
                  <div style={styles.analyticsValue}>{analyticsData.overview.pending}</div>
                </div>
                <div style={styles.analyticsCard}>
                  <div style={styles.analyticsLabel}>Completed</div>
                  <div style={styles.analyticsValue}>{analyticsData.overview.completed}</div>
                </div>
                <div style={styles.analyticsCard}>
                  <div style={styles.analyticsLabel}>Rejected</div>
                  <div style={styles.analyticsValue}>{analyticsData.overview.rejected}</div>
                </div>
                <div style={styles.analyticsCard}>
                  <div style={styles.analyticsLabel}>In Progress</div>
                  <div style={styles.analyticsValue}>{analyticsData.overview.inProgress}</div>
                </div>
                <div style={styles.analyticsCard}>
                  <div style={styles.analyticsLabel}>Success Rate</div>
                  <div style={styles.analyticsValue}>{analyticsData.overview.successRate}%</div>
                </div>
              </div>
            </div>
          )}

          {/* Search and Filter Section */}
          <div style={styles.searchFilterSection}>
            <div style={styles.searchFilterGrid}>
              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Search Applications</label>
                <input
                  type="text"
                  placeholder="Search by name, company, role, or status..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                />
              </div>
              
              <div style={styles.filterRow}>
                <div style={styles.filterGroup}>
                  <label style={styles.filterLabel}>Status</label>
                  <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    style={styles.filterSelect}
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                
                <div style={styles.filterGroup}>
                  <label style={styles.filterLabel}>Date</label>
                  <select 
                    value={dateFilter} 
                    onChange={(e) => setDateFilter(e.target.value)}
                    style={styles.filterSelect}
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                  </select>
                </div>
                
                <button 
                  onClick={clearFilters}
                  style={styles.clearFiltersBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)';
                  }}
                >
                  Clear Filters
                </button>
              </div>
              
              <div style={styles.resultsCount}>
                Showing {filteredApplications.length} of {analyticsData?.applications.length} applications
              </div>
            </div>
          </div>

          {/* Applications Table */}
          <div style={styles.applicationsSection}>
            <h3 style={styles.sectionTitle}>Recent Applications</h3>
            <div style={styles.applicationsTable}>
              <div style={styles.tableContainer}>
                <div style={styles.tableHeader}>
                  <div>Name</div>
                  <div>Company</div>
                  <div>Role</div>
                  <div>CTC</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>
                {filteredApplications.map((application) => (
                  <div 
                    key={application.id} 
                    style={{
                      ...styles.tableRow,
                      background: application.status === 'completed' ? 'rgba(16, 185, 129, 0.05)' : 
                                 application.status === 'rejected' ? 'rgba(239, 68, 68, 0.05)' : 
                                 application.status === 'pending' ? 'rgba(245, 158, 11, 0.05)' : 
                                 'rgba(59, 130, 246, 0.05)'
                    }}
                  >
                    <div style={{ fontWeight: '600', fontSize: '0.85rem' }}>{application.name}</div>
                    <div style={{ fontSize: '0.85rem' }}>{application.company}</div>
                    <div style={{ fontSize: '0.85rem' }}>{application.role}</div>
                    <div style={{ fontSize: '0.85rem' }}>{application.ctc}</div>
                    <div style={{ fontSize: '0.85rem' }}>{new Date(application.date).toLocaleDateString()}</div>
                    <div>
                      <span 
                        style={{
                          ...styles.statusBadge,
                          background: `rgba(${getStatusColor(application.status).replace('#', '')}, 0.1)`,
                          color: getStatusColor(application.status),
                          border: `1px solid ${getStatusColor(application.status)}20`
                        }}
                      >
                        {getStatusIcon(application.status)} {application.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Big Quick Actions Cards Section - BOTTOM */}
          <div style={styles.navigationSection}>
            <h3 style={styles.sectionTitle}>Quick Actions</h3>
            <div style={styles.bigCardsGrid}>
              {/* Placement Data Request */}
              <div
                style={styles.bigCard}
                onClick={() => setView('dataRequest')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'dataRequest')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>📊</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Placement Data Request</h3>
                    <span style={styles.bigCardBadge}>Admin</span>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  Share preferred locations, companies, skills and returns with detailed requirements.
                </p>
              </div>

              {/* Add New Company */}
              <div
                style={styles.bigCard}
                onClick={() => setView('company')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'company')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>🏢</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Add New Company</h3>
                    <span style={styles.bigCardBadge}>Register</span>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  Register companies, roles, skills required, CTC details and hiring process.
                </p>
              </div>

              {/* Assigned Companies */}
              <div
                style={styles.bigCard}
                onClick={() => setView('assignedCompanies')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'assignedCompanies')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>📋</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Assigned Companies</h3>
                    <span style={styles.bigCardBadge}>View</span>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  View and manage companies assigned for placement activities and track progress.
                </p>
              </div>

              {/* Interview Results */}
              <div
                style={styles.bigCard}
                onClick={() => setView('interviewResults')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'interviewResults')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>📈</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Interview Results</h3>
                    <span style={styles.bigCardBadge}>Results</span>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  View and manage interview outcomes, candidate selection results and feedback.
                </p>
              </div>

              {/* Requester Feedback */}
              <div
                style={styles.bigCard}
                onClick={() => setView('requesterFeedback')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'requesterFeedback')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>💬</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Requester Feedback</h3>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  Collect and analyze feedback about the placement data request process and improvements.
                </p>
              </div>

              {/* Placement Feedback */}
              <div
                style={styles.bigCard}
                onClick={() => setView('placementFeedback')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'placementFeedback')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>⭐</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Placement Feedback</h3>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  Capture detailed feedback on the final placement outcome and student experience.
                </p>
              </div>

              {/* Admin Dashboard */}
              <div
                style={styles.bigCard}
                onClick={() => setView('adminDashboard')}
                onMouseEnter={(e) => handleBigCardHover(e, true)}
                onMouseLeave={(e) => handleBigCardHover(e, false)}
                onTouchStart={(e) => handleBigCardTouch(e, 'adminDashboard')}
              >
                <div style={styles.bigCardHeader}>
                  <div style={styles.bigCardIcon}>⚙️</div>
                  <div style={styles.bigCardTitleWrapper}>
                    <h3 style={styles.bigCardTitle}>Admin Dashboard</h3>
                    <span style={styles.bigCardBadge}>Management</span>
                  </div>
                </div>
                <p style={styles.bigCardText}>
                  Comprehensive admin panel to manage all placement activities, data and analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const FormView = ({ formComponent }) => (
    <div style={styles.placementDashboard}>
      <div style={styles.singleFormLayout}>
        <section style={{ ...styles.placementContent, maxWidth: '100%', padding: 0 }}>
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
        {view === 'assignedCompanies' && <FormView formComponent={<AssignedCompanies />} />}
        {view === 'interviewResults' && <FormView formComponent={<InterviewResults />} />}
        {view === 'requesterFeedback' && <FormView formComponent={<RequesterFeedbackForm />} />}
        {view === 'placementFeedback' && <FormView formComponent={<PlacementFeedbackForm />} />}
        {view === 'adminDashboard' && <FormView formComponent={<AdminDashboard />} />}
      </main>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        /* Mobile First Styles */
        @media (min-width: 480px) {
          .content-section {
            padding: 0 20px 40px;
          }
          
          .analytics-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.25rem !important;
          }
          
          .analytics-card {
            padding: 1.5rem 1rem !important;
          }
          
          .analytics-value {
            font-size: 2rem !important;
          }
          
          .filter-row {
            flex-direction: row !important;
            flex-wrap: wrap;
          }
          
          .filter-group {
            flex: 1;
            min-width: 140px;
          }
          
          .clear-filters-btn {
            width: auto !important;
            min-width: 120px;
          }
        }
        
        @media (min-width: 768px) {
          .content-section {
            padding: 0 32px 48px;
          }
          
          .placement-dashboard {
            padding: 2rem 0;
          }
          
          .dashboard-header {
            margin-bottom: 2.5rem;
          }
          
          .title {
            font-size: 2.25rem !important;
          }
          
          .subtitle {
            font-size: 1rem !important;
          }
          
          .analytics-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
          
          .analytics-card {
            padding: 1.75rem 1.25rem !important;
            min-height: 120px;
          }
          
          .analytics-value {
            font-size: 2.25rem !important;
          }
          
          .big-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          
          .big-card {
            padding: 1.75rem 1.5rem !important;
            min-height: 160px;
          }
          
          .big-card-title {
            font-size: 1.3rem !important;
          }
          
          .big-card-text {
            font-size: 0.9rem !important;
          }
        }
        
        @media (min-width: 1024px) {
          .content-section {
            padding: 0 40px 60px;
          }
          
          .placement-dashboard {
            padding: 2.5rem 0;
          }
          
          .title {
            font-size: 2.5rem !important;
          }
          
          .analytics-card {
            padding: 2rem 1.5rem !important;
          }
          
          .analytics-value {
            font-size: 2.5rem !important;
          }
          
          .big-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem !important;
          }
          
          .big-card {
            padding: 2rem 1.75rem !important;
            min-height: 180px;
          }
          
          .big-card-title {
            font-size: 1.4rem !important;
          }
          
          .big-card-text {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 1200px) {
          .placement-content {
            max-width: 1200px !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .big-card {
            min-height: 150px;
          }
          
          .big-card-header {
            gap: 0.75rem;
          }
          
          .big-card-icon {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PlacementDashboard;