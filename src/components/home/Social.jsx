import React from 'react';

function Social () {
  return (
    <div className='home__social'>
        <a href="https://www.instagram.com/hacc.w/" className="home__social-icon" target={"_blank"}>
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://github.com/HenryChiquin" className="home__social-icon" target={"_blank"}>
            <i className="uil uil-github"></i>
        </a>

        <a href="https://wa.me/42249401" className="home__social-icon" target={"_blank"}>
          <i className="bx bxl-whatsapp"></i>
        </a>

    </div>
  )
}

export default Social