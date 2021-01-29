import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Get in touch{' '}
      <a href="https://instagram.com/al_thealater/">@al_thealater</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Mea Vicis Productions. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
