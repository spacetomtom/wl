import React from 'react';
import { SearchComponent } from './components/SearchComponent';
import { Header } from './components/Header';

function App() {
  const handleSearch = (searchTerm: string) => {
    console.log('Recherche pour:', searchTerm);
  };

  return (
    <>
    <Header />
    <div className="container">
      <h1 className="greeting">Hello World!</h1>
      <SearchComponent onSearch={handleSearch} />
    </div>
    </>
  );
}

export default App;