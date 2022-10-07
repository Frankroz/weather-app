import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities.length > 0){
    return (
      <div className='cards'>
        {cities.map((c, i) => <Card
            key={c.name+i}
            name={c.name}
            temp={c.temp}
            img={c.img}
            wind={c.wind}
            humidity={c.humidity}
            id={c.id}
            onClose={() => onClose(c.id)}
          /> )}
      </div>
    );
  } else {
    return(
      <h3 style={{marginTop:"10rem", color:"var(--text-color"}}>There are no cities added!</h3>
    )
  }
}
