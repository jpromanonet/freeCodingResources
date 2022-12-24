import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-left my-20">
         <div className="w-full">
            <Title>Mapa de ruta sugerido</Title>
            {timeline.map(item => (
               <TimelineItem 
                  year={item.step}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;