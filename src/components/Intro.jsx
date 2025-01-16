import React from 'react';

function Intro() {
   return (
      <div className="flex items-left justify-left flex-col text-left pt-20 pb-12">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-6 font-bold">Lista de recursos</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Aprende a programar gratis y de forma autodidacta</p>
         <p className="text-m w-full mb-6 font-bold">
            Lista super simple de recursos gratis (sitios web, libros, tutoriales, etc) para aprender a programar gratis y de forma audidacta.
            <br />
            <br />
            Algunos de los recursos extienden certificaciones para agregar a tu CV y otros no, pero lo fundamental es que indistintamente de los recursos podamos llevarnos ejercicios y proyectos terminados que nos ayuden a practicar.
            <br />
            <br />
            Te recomiendo seguir el "Mapa de ruta sugerido" pero si no te sentis comode, arranca por donde más te llame la atención o te genere más curiosidad.
            <br/>
            <br/>
            Esto no es un curso ni un bootcamp, no utiliza ningun stack especifico ni tiene contenido propio (todo el contenido son recursos gratis de terceros) pero el objetivo es formarse a si misme como programador y tener una idea general pero en profundidad de varias tecnologias y lenguajes generando en nosotros mismes la capacidad de aprender lenguajes nuevos en tiempos razonables y comprender el diseño y arquitectura de software creado por alguien más para contribuir valor cuando nos toque trabajar en desarrollo sin perder de vista que aprendimos porque nos hace felices.
         </p>
         <hr/>
      </div>
   )
}

export default Intro;