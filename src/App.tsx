import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDashboardClick={() => setShowDashboard(true)} />
      {showDashboard ? (
        <div className="flex flex-1 mt-16">
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <Dashboard />
          </main>
        </div>
      ) : (
        <main className="flex-1">
          <LandingPage onGetStarted={() => setShowDashboard(true)} />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;