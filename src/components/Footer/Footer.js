import React from 'react'
import './styles.css'

const Footer = () => {

  return (
    <footer className="country-footer">
      <div className='footer-wrapper' >
        <p>Copyright©2020 30 Days Of React </p>
        <p>Join <a href="https://github.com/Asabeneh/30-Days-Of-React" target="_blank" rel="noopener noreferrer">30 Days of React challenge</a></p>
        <small>Re-created by&nbsp;
          <a href="https://github.com/sxidsvit/" target="_blank" rel="noopener noreferrer">Sergiy Antonyuk</a>
        </small>
        <div className="arrow"><a href="#root"><i className="fas fa-arrow-alt-circle-up"></i></a></div>
      </div>
    </footer>
  )
}

export default Footer
