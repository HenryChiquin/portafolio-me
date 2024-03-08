 import React, { useState } from 'react'
 import './services.css'
const Services = () => {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index)=>{
        setToggleState(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Portafolio </h2>
            <span className="section__subtitle">Proyectos que he hecho</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon">
                            <h3 className="services__title"> Desarrollo<br/>backend </h3>                            
                        </i>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
                    
                    <div className={toggleState===1 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Desarrollo</h3>
                            <p className="services__modal-description">
                                Proyectos y practicas realzadas en distintos frameworks
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        C# ASP.NET: Desarrollo de Api Rest
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        C# .Net Core Desarrollo de Api rest y autenticacion JWT
                                    </p>                                     
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        JAVA: Desarrollo de api en entorno Spring Boot
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        C#.Net Desarrollo de conexion directa a la base de datos
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        C# Desarrollo en entorno MVC
                                    </p>                                    
                                </li>
                            </ul>                           
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon">
                            <h3 className="services__title"> Data <br/> Base de datos </h3>                            
                        </i>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
                    
                    <div className={toggleState===2? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"> Analisis y transformacion de datos</h3>
                            <p className="services__modal-description">
                                Creacioon de consultas, triggers, procedimientos almacenados y modelado de tablas.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       SQL Server - Oracle: Generacion de consultas para abstraer datos
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        SQL Server: Creacion de trigger para ejecutar funciones en distintos eventos del comportamiento de cada tabla
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        SQL Server: Creacion de procedimientos almacenados 
                                    </p>                                   
                                </li>

                               
                            </ul>                            
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon">
                            <h3 className="services__title"> Desarrollo <br/> Front End </h3>                            
                        </i>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
                    
                    <div className={toggleState === 3? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">                            
                            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Front End</h3>
                            <p className="services__modal-description">
                                Desarrollos de interfaz de usuario realizados en diferentes lenguajes de programacion
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Desarrollo la interfaz de usuario
                                    </p>                                
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">  </i>
                                    <p className="services__modal-info">
                                        Desarrollo de paginas web con HTML y Javascript
                                    </p>
                                     
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Creo interacciones de elementos usando CSS Y Saas
                                    </p>
                                   
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">  </i>
                                    <p className="services__modal-info">
                                        Desarrollo en Android Nativo 
                                    </p>
                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Diseño y maquetas de interfaz de usuario con React
                                    </p>
                                    
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
   )
 }
 export default Services