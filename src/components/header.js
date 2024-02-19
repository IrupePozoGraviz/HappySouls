import React from 'react';
import { Navigate } from './nav';
import '../css/header.css';

export const Header = () => {
  return (
    <header className="mainHeader">
      <div className="header">
        <div className="logo">
          Här kommer vi lägga in en logga
        </div>
        <nav className="Navigate" aria-label="Main navigation">
          <Navigate />
        </nav>
       
      </div> 
    </header>
  )
}