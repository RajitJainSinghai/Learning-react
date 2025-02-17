import { useState } from 'react';
import { account } from '../appwrite';
import './LoginModal.css';

const LoginModal = ({ setLoggedIn, setUsername, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedIn(true);
      setUsername(user.name || 'User');  // Ensure username is set
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await account.create('unique()', email, password, name);
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedIn(true);
      setUsername(user.name || 'User');  // Ensure username is set
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
