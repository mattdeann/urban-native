import React from 'react';
import './Header.css';

function Header({user}) {
  return (
    <header className="site-header">
      <h1>Urban Native</h1>
      <p>Welcome, {user.first_name}</p>
      <article className="empty">
        
      </article>
    </header>
  )
}

export default Header;