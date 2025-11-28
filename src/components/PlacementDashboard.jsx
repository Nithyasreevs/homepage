import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, Building2, Award, Users, ChevronLeft, X, Check, ArrowLeft } from 'lucide-react';
import './PlacementDashboard.css';

// Import all placement components from the placement folder
import AdminDashboard from './placement/AdminDashboard';
import AssignedCompanies from './placement/AssignedCompanies';
import CompanyRegistrationForm from './placement/CompanyRegistrationForm';
import InterviewResults from './placement/InterviewResults';
import PlacementDataRequestForm from './placement/PlacementDataRequestForm';
import PlacementFeedbackForm from './placement/PlacementFeedbackForm';
import RequesterFeedbackForm from './placement/RequesterFeedbackForm';

const PlacementDashboard = ({ onBackToHome }) => {
  const [view, setView] = useState('dashboard');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Mock analytics data
  useEffect(() => {
    const mockAnalyticsData = {
      overview: {
        total: 856,
        pending: 142,
        completed: 487,
        rejected: 127,
        inProgress: 100,
        successRate: 72
      },
      yearWiseData: [
        { year: '2020', applications: 145, placements: 98 },
        { year: '2021', applications: 167, placements: 115 },
        { year: '2022', applications: 189, placements: 138 },
        { year: '2023', applications: 201, placements: 152 },
        { year: '2024', applications: 154, placements: 110 }
      ],
      topRecruiters: [
        { name: 'Google', placements: 45, avgPackage: '48 LPA', logo: '🔍' },
        { name: 'Microsoft', placements: 38, avgPackage: '42 LPA', logo: '💻' },
        { name: 'Amazon', placements: 42, avgPackage: '45 LPA', logo: '📦' },
        { name: 'Meta', placements: 28, avgPackage: '46 LPA', logo: '📘' },
        { name: 'Apple', placements: 25, avgPackage: '50 LPA', logo: '🍎' },
        { name: 'Netflix', placements: 18, avgPackage: '52 LPA', logo: '🎬' }
      ],
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

  // Filter applications
  useEffect(() => {
    if (analyticsData) {
      let filtered = analyticsData.applications;

      if (searchTerm) {
        filtered = filtered.filter(app => 
          app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.status.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (statusFilter !== 'all') {
        filtered = filtered.filter(app => app.status === statusFilter);
      }

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

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setDateFilter('all');
    setShowFilters(false);
  };

  // Handler functions for quick actions
  const handleQuickAction = (action) => {
    switch (action) {
      case 'placement-data-request':
        setView('placement-data-request');
        break;
      case 'add-company':
        setView('company-registration');
        break;
      case 'assigned-companies':
        setView('assigned-companies');
        break;
      case 'interview-results':
        setView('interview-results');
        break;
      case 'requester-feedback':
        setView('requester-feedback');
        break;
      case 'placement-feedback':
        setView('placement-feedback');
        break;
      case 'admin-dashboard':
        setView('admin-dashboard');
        break;
      default:
        setView('dashboard');
    }
  };

  const handleBackToDashboard = () => {
    setView('dashboard');
  };

  // Simple Back Button Component
  const SimpleBackButton = () => (
    <div className="simple-back-container">
      <button className="simple-back-btn" onClick={handleBackToDashboard}>
        <ArrowLeft size={18} />
        Back to Dashboard
      </button>
    </div>
  );

  const DashboardView = () => {
    const maxApplications = Math.max(...(analyticsData?.yearWiseData.map(d => d.applications) || [200]));

    return (
      <div className="placement-dashboard">
        <div className="dashboard-content">
          {/* Header */}
          <div className="dashboard-header">
            <div className="header-content">
              <h2 className="dashboard-title">Placement Dashboard</h2>
              <p className="dashboard-subtitle">
                Comprehensive overview of placement activities and analytics
              </p>
            </div>
            {onBackToHome && (
              <button className="back-btn" onClick={onBackToHome}>
                <ChevronLeft size={18} />
                Back to Home
              </button>
            )}
          </div>

          {/* Rest of your dashboard content remains exactly the same */}
          {/* Analytics Cards */}
          {analyticsData && (
            <div className="analytics-section">
              <div className="analytics-grid">
                <div className="analytics-card">
                  <Users className="analytics-icon" size={24} />
                  <div className="analytics-value">{analyticsData.overview.total}</div>
                  <div className="analytics-label">Total Applications</div>
                </div>
                <div className="analytics-card">
                  <TrendingUp className="analytics-icon" size={24} />
                  <div className="analytics-value">{analyticsData.overview.pending}</div>
                  <div className="analytics-label">Pending</div>
                </div>
                <div className="analytics-card">
                  <Check className="analytics-icon" size={24} />
                  <div className="analytics-value">{analyticsData.overview.completed}</div>
                  <div className="analytics-label">Completed</div>
                </div>
                <div className="analytics-card">
                  <X className="analytics-icon" size={24} />
                  <div className="analytics-value">{analyticsData.overview.rejected}</div>
                  <div className="analytics-label">Rejected</div>
                </div>
                <div className="analytics-card">
                  <TrendingUp className="analytics-icon" size={24} />
                  <div className="analytics-value">{analyticsData.overview.inProgress}</div>
                  <div className="analytics-label">In Progress</div>
                </div>
                <div className="analytics-card">
                  <Award className="analytics-icon" size={24} />
                  <div className="analytics-value">{analyticsData.overview.successRate}%</div>
                  <div className="analytics-label">Success Rate</div>
                </div>
              </div>
            </div>
          )}

          {/* Year-wise Applications Bar Graph */}
          {analyticsData && (
            <div className="yearwise-section">
              <h3 className="section-title">
                <TrendingUp size={20} />
                Year-wise Student Applications
              </h3>
              <div className="yearwise-chart-card">
                <div className="chart-container">
                  {analyticsData.yearWiseData.map((yearData, index) => (
                    <div key={yearData.year} className="bar-group">
                      <div className="bar-wrapper">
                        <div className="bar-label-top">{yearData.applications}</div>
                        <div className="bar-container">
                          <div 
                            className="bar applications-bar"
                            style={{
                              height: `${(yearData.applications / maxApplications) * 100}%`,
                              animationDelay: `${index * 0.1}s`
                            }}
                          >
                            <div className="bar-shine"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bar-year">{yearData.year}</div>
                      <div className="placement-info">
                        <span className="placement-count">{yearData.placements} placed</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color applications"></div>
                    <span>Applications</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color placements"></div>
                    <span>Placements</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top Recruiters Section */}
          {analyticsData && (
            <div className="recruiters-section">
              <h3 className="section-title">
                <Building2 size={20} />
                Top Recruiters
              </h3>
              <div className="recruiters-grid">
                {analyticsData.topRecruiters.map((recruiter, index) => (
                  <div key={index} className="recruiter-card">
                    <div className="recruiter-rank">#{index + 1}</div>
                    <div className="recruiter-logo">{recruiter.logo}</div>
                    <h4 className="recruiter-name">{recruiter.name}</h4>
                    <div className="recruiter-stats">
                      <div className="stat-item">
                        <Users size={14} />
                        <span>{recruiter.placements} placements</span>
                      </div>
                      <div className="stat-item">
                        <Award size={14} />
                        <span>{recruiter.avgPackage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="search-filter-section">
            <div className="search-container">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={18} />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>
                <Filter size={18} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>

              {showFilters && (
                <div className="filters-container">
                  <div className="filter-group">
                    <label className="filter-label">Status</label>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="inProgress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  
                  <div className="filter-group">
                    <label className="filter-label">Date Range</label>
                    <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="filter-select">
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">Last Week</option>
                      <option value="month">Last Month</option>
                    </select>
                  </div>

                  <div className="filter-actions">
                    <button onClick={clearFilters} className="clear-btn">
                      <X size={16} />
                      Clear
                    </button>
                  </div>
                </div>
              )}

              <div className="results-count">
                Showing {filteredApplications.length} of {analyticsData?.applications.length} applications
              </div>
            </div>
          </div>

          {/* Applications Table */}
          <div className="applications-section">
            <h3 className="section-title">
              <Users size={20} />
              Recent Applications
            </h3>
            <div className="applications-table">
              <div className="table-container">
                <div className="table-header">
                  <div>Name</div>
                  <div>Company</div>
                  <div>Role</div>
                  <div>CTC</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>
                {filteredApplications.map((application) => (
                  <div key={application.id} className="table-row">
                    <div className="table-cell name-cell">{application.name}</div>
                    <div className="table-cell">{application.company}</div>
                    <div className="table-cell">{application.role}</div>
                    <div className="table-cell ctc-cell">{application.ctc}</div>
                    <div className="table-cell">{new Date(application.date).toLocaleDateString()}</div>
                    <div className="table-cell">
                      <span className={`status-badge status-${application.status}`}>
                        {application.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-section">
            <h3 className="section-title">Quick Actions</h3>
            <div className="quick-actions-grid">
              <div className="action-card" onClick={() => handleQuickAction('placement-data-request')}>
                <div className="action-icon">📊</div>
                <h4 className="action-title">Placement Data Request</h4>
                <span className="action-badge">Admin</span>
                <p className="action-text">
                  Share preferred locations, companies, skills and requirements with detailed information.
                </p>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('add-company')}>
                <div className="action-icon">🏢</div>
                <h4 className="action-title">Add New Company</h4>
                <span className="action-badge">Register</span>
                <p className="action-text">
                  Register companies, roles, skills required, CTC details and hiring process.
                </p>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('assigned-companies')}>
                <div className="action-icon">📋</div>
                <h4 className="action-title">Assigned Companies</h4>
                <span className="action-badge">View</span>
                <p className="action-text">
                  View and manage companies assigned for placement activities and track progress.
                </p>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('interview-results')}>
                <div className="action-icon">📈</div>
                <h4 className="action-title">Interview Results</h4>
                <span className="action-badge">Results</span>
                <p className="action-text">
                  View and manage interview outcomes, candidate selection results and feedback.
                </p>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('requester-feedback')}>
                <div className="action-icon">💬</div>
                <h4 className="action-title">Requester Feedback</h4>
                <span className="action-badge">Feedback</span>
                <p className="action-text">
                  Collect and analyze feedback about the placement data request process and improvements.
                </p>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('placement-feedback')}>
                <div className="action-icon">⭐</div>
                <h4 className="action-title">Placement Feedback</h4>
                <span className="action-badge">Rating</span>
                <p className="action-text">
                  Capture detailed feedback on the final placement outcome and student experience.
                </p>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('admin-dashboard')}>
                <div className="action-icon">⚙️</div>
                <h4 className="action-title">Admin Dashboard</h4>
                <span className="action-badge">Management</span>
                <p className="action-text">
                  Comprehensive admin panel to manage all placement activities, data and analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render different views based on current view state
  const renderCurrentView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardView />;
      case 'admin-dashboard':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <AdminDashboard />
          </div>
        );
      case 'assigned-companies':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <AssignedCompanies />
          </div>
        );
      case 'company-registration':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <CompanyRegistrationForm />
          </div>
        );
      case 'interview-results':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <InterviewResults />
          </div>
        );
      case 'placement-data-request':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <PlacementDataRequestForm />
          </div>
        );
      case 'placement-feedback':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <PlacementFeedbackForm />
          </div>
        );
      case 'requester-feedback':
        return (
          <div className="component-wrapper">
            <SimpleBackButton />
            <RequesterFeedbackForm />
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="animated-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <main className="content-section">
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default PlacementDashboard;