import React from 'react';
import './app.css';

import { navbar, brand, header } from './omponents';
import { footer, blog, features, possibility, whatGPT3, cta } from './containers';

const App = () => {
  return (
    <div className="app">
      <div className="gradiend_bg">
        <navbar />
        <header />
      </div>

      <brand />
      <whatGPT3 />
      <features />
      <possibility />
      <cta />
      <blog />
      <footer />
    </div>
  );
};

export default App;