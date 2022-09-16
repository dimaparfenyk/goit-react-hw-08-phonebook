import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn }  from 'redux/auth/auth-selectors'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
   
return(!isLoggedIn && (<div style={styles.container}>
    <h1 style={styles.title}>
      Welcome to our service
    </h1>
  </div>))
};

export default HomePage;