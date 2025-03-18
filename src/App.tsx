import React from 'react';
import { SimpleComponent } from './components/SimpleComponent';
import { SearchComponent } from './components/SearchComponent';

function App() {
  const handleSearch = (searchTerm: string) => {
    console.log('Recherche pour:', searchTerm);
  };

  return (
    <div className="container">
      <h1 className="greeting">Hello World!</h1>
      <SimpleComponent message="simple component !" />
      <SearchComponent onSearch={handleSearch} />
    </div>
  );
}

export default App;