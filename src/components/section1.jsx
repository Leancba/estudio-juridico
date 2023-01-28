import React, {useEffect} from "react";


import 'aos/dist/aos.css';

export default function Section1(){

    

    return (
        <section  id="one" class="main style1">
            <div class="container">
                <div class="row 150%">
                    <div data-aos="fade-right" class="6u 12u$(medium)">
                        <header class="major">
                            <h2>Este es un titulo <br />
                                Este es un titulo </h2>
                        </header>
                        <p>
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                        </p>
                    </div>
                    <div data-aos="fade-left" class="6u$ 12u$(medium) important(medium)">
                        <span class="image fit"><img src="https://tomasweb.com.ar/plantillas/promos/1/images/quienes-somos.PNG" alt="" /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}