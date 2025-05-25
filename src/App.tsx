
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import SponsorsPage from './pages/SponsorsPage';
import HistoryPage from './pages/HistoryPage';
import VendorsPage from './pages/VendorsPage';
import ContactPage from './pages/ContactPage';
import RecipesPage from './pages/RecipesPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-soul-brown">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/recipes" element={<RecipesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;