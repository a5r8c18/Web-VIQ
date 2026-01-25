import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Hero from './home/Hero';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Layout>
  );
};

export default App;
