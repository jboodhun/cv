import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <header className="border-b border-gray-300 p-4">
        <h1>Header</h1>
      </header>
      <main className="border-b border-gray-300 p-4 flex-1">{children}</main>
      <footer className="border-t border-gray-300 p-4">
        <p>Footer</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
