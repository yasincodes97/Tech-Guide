import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>This is the beginning of your best coding journey ever..!</h1>
    </div>
  );
}

export default Home;
