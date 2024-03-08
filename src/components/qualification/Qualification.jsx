import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Experiencia </h2>
      <span className="section__subtitle">Mi vida personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"> </i>
            Educación
            
          </div>
          <span className="services__button" onClick={() => toggleTab(toggleState===1?2:1)}>
          <i className="uil uil-arrow-left services__button-icon"> </i>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
          <div className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
            
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1
          ? "qualification__content qualification__content-active"
          : "qualification__content"}>
           

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intenieria en sistemas (Pensum cerrado)</h3>
                <span className="qualification__subtitle">
                  Ciudad de Guatemala - Mariano Gálvez
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachillerato en Computación</h3>
                <span className="qualification__subtitle">
                  Tactic A.V. - Colegio Blaise Pascal
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Cursos de computacion</h3>
                <span className="qualification__subtitle">
                  Tactic A.V - EVOLUTION
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2016
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollador IT</h3>
                <span className="qualification__subtitle">
                  Corporacion TAK - Guatemala
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Actual
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Analista QA</h3>
                <span className="qualification__subtitle">
                  DXLATAM - Guatemala
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollador Jr</h3>
                <span className="qualification__subtitle">DXLATAM - Guatemala</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
