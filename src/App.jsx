import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';
import { appRoutes } from '@/config/routes';
import '@/styles/App.css';

/**
 * Main Application Component
 * Handles routing and layout for the entire application
 */
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Suspense
            fallback={
              <div className="loading-container">
                <div className="loading-spinner">Loading...</div>
              </div>
            }
          >
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;