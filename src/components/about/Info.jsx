import React from 'react'

function Info (){
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i> 
            <h3 className="about__title">Experiencia </h3>
            <span className="about__subtitle">2 Años trabajando </span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Empresas </h3>
            <span className="about__subtitle">+ 2 </span>
        </div>

        <div className="about__box">
            <i className='bx bx-support about__icon' ></i>
            <h3 className="about__title">Disponibilidad </h3>
            <span className="about__subtitle">Inmediata </span>
        </div>

    </div>
  )
}

export default Info