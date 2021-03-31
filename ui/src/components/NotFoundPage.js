import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Page not found. Goto <Link to="/welcome">Welcome Page</Link>
    </React.Fragment>
  );
};
export default NotFoundPage;