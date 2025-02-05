import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import { account } from './appwrite';
import './index.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await account.get();
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await account.deleteSession('current');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <h1>Car Explorer</h1>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : null}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        {isLoggedIn && <Route path="/car/:id" element={<CarDetail />} />}
      </Routes>
    </div>
  );
};

export default App;
