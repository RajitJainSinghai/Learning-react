import { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import LoginModal from './components/LoginModal';
import { account } from './appwrite';
import './index.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    try {
      const user = await account.get();
      setIsLoggedIn(true);
      setUsername(user.name || 'User');
    } catch {
      setIsLoggedIn(false);
      setUsername('');
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    await account.deleteSession('current');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <div>
      <header>
        <h1>Car Explorer</h1>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn && <span>Welcome, {username}</span>}
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setShowLogin(true)}>Login / Signup</button>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        {isLoggedIn && <Route path="/car/:id" element={<CarDetail />} />}
      </Routes>

      {showLogin && <LoginModal setLoggedIn={setIsLoggedIn} setUsername={setUsername} onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default App;

console. disableYellowBox = true