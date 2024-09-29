import React, { useEffect, useState } from 'react';
import axios from 'axios';

// used for HTTP GET requests

function Home() {
  
  //var test = [1,2,3]; (Array)
  
  const [currMsg, updateMsg] = useState('');
  //array destrukturierung 

  useEffect(() => { //Callback Funktion als Parameter
    axios.get('http://localhost:5000')
      .then(response => { //anonymous arrow function, response is parameter 
        updateMsg(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []); //leeres array 2. param. damit nur 1mal executed 
 
}
  //in React gibt return den JSX-code zurück

 
export default Home;
