import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h3 className="taCenter">
      <a href="/contact/">Get in touch</a>
    </h3>
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
