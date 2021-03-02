import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1 className='app-name'>Urban Native</h1>
      <p className='welcome'>Welcome, BRIAN</p>
      <article className="buttons">
        <button className="header-button">
          REGIONAL GROWING INFO
        </button>
      </article>
    </header>
  )
}

export default Header;
