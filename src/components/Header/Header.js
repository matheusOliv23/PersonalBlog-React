import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="container">
      <nav className="nav">
        <a href="/" className="logo">
          &lt;FRONT&frasl;&gt;
        </a>
        <div className="menu">
          <li>
            <a href="/" className="title">
              Artigos
            </a>
          </li>
          <li>
            <a href="/" className="title">
              Início
            </a>
          </li>
          <li>
            <a href="/" className="title">
              Sobre Mim
            </a>
          </li>
        </div>
      </nav>
    </header>
  )
}

export default Header
