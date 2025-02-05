import React from 'react';
import { account } from '../appwrite';

const Logout = ({ setLoggedIn }) => {
  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
