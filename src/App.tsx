import React from 'react';
import { SearchComponent } from './components/SearchComponent';
import { Header } from './components/Header';
import { SearchResults } from './components/SearchResults';
import { Title } from './components/Title';

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Title />
      <SearchComponent />
      <SearchResults />
    </div>
    </>
  );
}

export default App;