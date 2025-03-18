import React from 'react';
import { SimpleComponent } from './components/SimpleComponent';

function App() {
  return (
    <div className="container">
      <h1 className="greeting">Hello World!</h1>
      <SimpleComponent message="simple component !" />
    </div>
  );
}

export default App;