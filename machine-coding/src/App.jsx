import { lazy } from 'react';
import './App.css';
import { AppRoutes } from './AppRoutes';

const Header = lazy(() => import("./components/common/Header"));
const Footer = lazy(() => import("./components/common/Footer"));
const ScrollToTop = lazy(() => import("./components/common/ScrollToTop"));

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <ScrollToTop />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;