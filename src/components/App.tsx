import React from 'react';
import './App.css';
import DogsList from './DogsList';


function App() {
  return (
    <div className="App">
      <h1>Bark Resume</h1>
      <h2>Create a CV for your dog</h2>

      <DogsList />
    </div>
  );
}

export default App;
