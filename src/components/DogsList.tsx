import React from 'react';
import dogs from "../data/temp-data.json"
import Dog from './Dog/DogCard';

function DogsList() {

  return (
    <ul className="w-full flex container">
      { dogs.map((dog) => {
        return <Dog dog={{...dog}} key={dog.id}/>
      })}   
    </ul>
  );
}

export default DogsList;
