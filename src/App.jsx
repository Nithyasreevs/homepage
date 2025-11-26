import { useState } from 'react';
import Home from './components/Home';
import PlacementDashboard from './components/PlacementDashboard';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'placementDashboard'

  if (page === 'placementDashboard') {
    return (
      <div className="App">
        <PlacementDashboard onBackToHome={() => setPage('home')} />
      </div>
    );
  }

  return (
    <div className="App">
      <Home onOpenPlacementDashboard={() => setPage('placementDashboard')} />
    </div>
  );
}

export default App;
