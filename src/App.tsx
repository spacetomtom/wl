import React from 'react';
import { SearchComponent } from './components/SearchComponent';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <SearchComponent />
    </div>
    </>
  );
}

export default App;