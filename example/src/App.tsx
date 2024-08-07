import React from 'react';
import { usePleaseStay } from './hooks/usePleaseStay';

function App() {
  usePleaseStay([
    'Example A Palooza',
    'wewt!',
    'Get in here monkeyboy!!',
    'tf ya lookin at dipshit',
  ]);

  return (
    <>
      <h1>Example A Palooza</h1>
      <h2>wewt!</h2>
    </>
  );
}

export default App;
