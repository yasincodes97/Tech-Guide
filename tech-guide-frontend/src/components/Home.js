import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
  //var test = [1,2,3];
  
  const [currMsg, updateMsg] = useState('');
//array destrukturierung 

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => { //anonymous arrow function,  response is parameter 
        updateMsg(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  //in React gibt return den JSX-code zurück
  return (

    <div>
      <h1 class = "head">Home</h1>
      <h2 id = "tail">Test </h2>
    </div>

);
}
 
export default Home;
