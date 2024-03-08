import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Henry</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Acerca de</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Portafolio</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Empresas</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://wa.me/42249401" className="footer__social-link" target={"_blank"}>
                    <i className="bx bxl-whatsapp"></i>
                </a>

                <a href="https://github.com/HenryChiquin" className="footer__social-link" target={"_blank"}>
                    <i className="bx bxl-github"></i>
                </a>

                <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' className="footer__social-link" target={"_blank"}>
                    <i className="bx bx-mail-send"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Crypticalcoder. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer