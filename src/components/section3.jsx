import React from "react";

import pymes from "../images/pymes.jpg"
import tributario from "../images/tributario.jpg"
import capitales from "../images/capitales.jpg"
import laboral from "../images/laboral.jpg"
import ligitio from "../images/litigio.jpg"
import familia from "../images/familia.jpeg"
import consumidor from "../images/consumidor.jpg"

export default function Section3(){
    return(
        <section id="three" class="main style1 special">
            <div class="container">
                <header class="major">
                    <h2>Áreas de Práctica </h2>
                </header>
                <div class="row 150%">
                    <div data-aos="zoom-in" class="4u 12u$(medium)">
                        <span class="image fit"><img src={pymes} alt="" /></span>
                        <h3>Sociedades y Pymes </h3>
                        <ul>
                           <li>
                            Asesoramiento corporativo integral
                           </li>
                           <li>
                           Constitución y reestructuración de sociedades comerciales.
                           </li>
                           <li>
                           Due Diligence | Auditoría Legal. 
                           </li>
                           <li>
                           Fusión, adquisición y venta de sociedades. 
                           </li>
                           <li>
                           Fideicomisos.
                           </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" class="4u 12u$(medium)">
                        <span class="image fit"><img src={tributario}  alt="" /></span>
                        <h3>Tributarios</h3>
                       <ul>
                            <li>
                            Asesoramiento impositivo integral. 
                            </li>
                            <li>
                            Planificación fiscal. 
                            </li>
                            <li>
                            Litigios impositivos.
                            </li>
                       </ul>
                    </div>
                    <div data-aos="zoom-in" class="4u$ 12u$(medium)">
                        <span class="image fit"><img src={capitales} alt="" /></span>
                        <h3>Capitales y finanzas</h3>
                        <ul>
                            <li>
                            Asesoramiento financiero integral. 
                            </li>
                            <li>
                            Oferta pública de acciones, nacional e internacional. 
                            </li>
                            <li>
                            Regulación del mercado de capitales. 
                            </li>
                            <li>
                            Métodos de financiamiento.
                            </li>
                            <li>
                            Fideicomisos financieros. Securitización o titulación de activos.
                            </li>
                       </ul>
                    </div>
                </div>
                <div class="row 150%">
                    <div data-aos="zoom-in" class="4u 12u$(medium)">
                        <span class="image fit"><img src={laboral} alt="" /></span>
                        <h3>Laboral </h3>
                        <ul>
                            <li>
                            Servicio de Conciliación Laboral Obligatoria. 
                            </li>
                            <li>
                            Procesos judiciales.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" class="4u 12u$(medium)">
                        <span class="image fit"><img src={ligitio} alt="" /></span>
                        <h3>Litigios y daños </h3>
                        <ul>
                            <li>
                            Litigios en general.  
                            </li>
                            <li>
                            Mediación y arbitraje.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" class="4u$ 12u$(medium)">
                        <span class="image fit"><img src={familia} alt="" /></span>
                        <h3>Sucesiones y familia</h3>
                        <ul>
                            <li>
                            Procesos sucesorios. 
                            </li>
                            <li>
                            Derecho de familia.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" class="4u$ 12u$(medium)">
                        <span class="image fit"><img src={consumidor} alt="" /></span>
                        <h3>Defenza del consumidor</h3>
                        <ul>
                            <li>
                            Procedimientos administrativos. 
                            </li>
                            <li>
                            Regulación en defensa del consumidor y defensa de la competencia.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}