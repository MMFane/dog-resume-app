import React from 'react';
import dogs from "../data/temp-data.json"
import Dog from './Dog';

function DogsList() {

  return (
    <div className="DogsList">
        <ul>
          { dogs.map((dog) => {
            return <Dog dog={{...dog}}/>
          })}   
        </ul>
    </div>
  );
}

export default DogsList;
