import React from 'react';
import Header from './Header';
import Home from './Home';
import fruittrunk from '../assets/img/fruittrunk.jpg';

function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          background-image: url(${fruittrunk});
          background-size: cover;
          background-repeat: repeat;
        }
        `}</style>
      <Header/>
      <Home/>

    </div>
  );
}

export default App;
