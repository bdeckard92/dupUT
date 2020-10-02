import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function Portfolio() {

  // With useState, we write the variable to store the state 
  // and the method to set the state.
  // The default value for currentPage is 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement 
  // to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* We pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* We call the renderPage function passing through the current page */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
