import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Hero from './home/Hero';
import Projects from './pages/Projects';
import WebDevelopment from './pages/WebDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import Branding from './pages/Branding';
import AboutUs from './pages/AboutUs';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
};

export default App;
