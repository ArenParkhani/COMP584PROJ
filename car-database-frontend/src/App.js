import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CarBrandPage from './pages/CarBrandPage';
import CarPage from './pages/CarPage';
import PartPage from './pages/PartPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/car-brands" element={<CarBrandPage />} />
        <Route path="/cars" element={<CarPage />} />
        <Route path="/parts" element={<PartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
