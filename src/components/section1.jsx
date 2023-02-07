import React from "react";
import 'aos/dist/aos.css';

import portada from "../images/portada.jpg"


export default function Section1(){

    

    return (
        <section  id="one" class="main style1">
            <div class="container">
                <div class="row 150%">
                    <div data-aos="fade-right" class="6u 12u$(medium)">
                        <header class="major">
                            <h2>Nuestra Firma</h2>
                        </header>
                        <p>
                            
Somos un equipo de profesionales altamente especializados, con basta experiencia en las distintas ramas del Derecho y sólidos fundamentos éticos, que trabajamos en forma integrada asumiendo el compromiso de brindar a nuestros clientes un servicio jurídico de excelencia.
                        </p>
                    </div>
                    <div data-aos="fade-left" class="6u$ 12u$(medium) important(medium)">
                        <span class="image fit"><img src={portada} alt="" /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}