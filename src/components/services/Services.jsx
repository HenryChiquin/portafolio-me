 import React, { useState } from 'react'
 import './services.css'
const Services = () => {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index)=>{
        setToggleState(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicio </h2>
            <span className="section__subtitle">Lo que ofrezco</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon">
                            <h3 className="services__title"> Producto<br/>Designer </h3>                            
                        </i>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
                    
                    <div className={toggleState===1 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Producto Designer</h3>
                            <p className="services__modal-description">
                                Servicio con más de 3 años de experiencia Brindando un trabajo de calidad a clientes y empresas.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desarrollo la interfaz de usuario
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desarrollo de paginas web
                                    </p>                                     
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creo interacciones de elementos ux
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Posiciono la marca de tu empresa
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Diseño y maquetas de productos para empresas.
                                    </p>                                    
                                </li>
                            </ul>                           
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon">
                            <h3 className="services__title"> Ui/Ux <br/> Designer </h3>                            
                        </i>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
                    
                    <div className={toggleState===2? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"> Ui/Ux Designer</h3>
                            <p className="services__modal-description">
                                Servicio con más de 3 años de experiencia Brindando un trabajo de calidad a clientes y empresas.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desarrollo la interfaz de usuario
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desarrollo de paginas web
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Creo interacciones de elementos ux
                                    </p>                                   
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Posiciono la marca de tu empresa
                                    </p>                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Diseño y maquetas de productos para empresas.
                                    </p>
                                
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon">
                            <h3 className="services__title"> Visual <br/> Designer </h3>                            
                        </i>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Ver mas
                        <i className="uil uil-arrow-right services__button-icon"> </i>
                    </span>
                    
                    <div className={toggleState === 3? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">                            
                            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Servicio con más de 3 años de experiencia Brindando un trabajo de calidad a clientes y empresas.
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
                                        Desarrollo de paginas web
                                    </p>
                                     
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Creo interacciones de elementos ux
                                    </p>
                                   
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">  </i>
                                    <p className="services__modal-info">
                                        Posiciono la marca de tu empresa
                                    </p>
                                    
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> </i>
                                    <p className="services__modal-info">
                                        Diseño y maquetas de productos para empresas.
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