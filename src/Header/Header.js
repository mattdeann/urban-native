import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1>Urban Native</h1>
      <h2>Welcome, BRIAN</h2>
      <article className="buttons">
        <button className="header-button">
          COLORADO INFO
        </button>
        <button className="header-button">
          SOMETHING ELSE MAYBE?
        </button>
      </article>
    </header>
  )
}

export default Header;