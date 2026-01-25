import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Hero from './home/Hero';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
};

export default App;
