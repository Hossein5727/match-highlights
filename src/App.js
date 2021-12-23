import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
