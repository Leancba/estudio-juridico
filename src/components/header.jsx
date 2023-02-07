import React, {useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css';

import logo from "../images/abogadoz.png"

export default function Header(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
    },[]);
    
    return( 
        <section id="header">
            <div class="inner">
                <a href="/#"><img src={logo} alt="" width="350" height="350"/></a>
                <h1 data-aos="zoom-in" ><strong>Jose R. Ibañez & asociados</strong>
                <br />
                    Estudio jurídico</h1>
                
                <ul class="actions">
                    <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#one" class="button scrolly">Nuestra firma</a></li>
                        <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#two" class="button scrolly">Sobre nosotros</a></li>
                        <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#three" class="button scrolly">Areas de practica</a></li>
                        <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#four" class="button scrolly">Contactanos</a></li>
                </ul>
            </div>
        </section>
    )
}