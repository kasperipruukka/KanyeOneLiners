import React from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import QuoteDelete from './components/QuoteDelete';
import QuoteFetch from './components/QuoteFetch';
import QuoteList from './components/QuoteList';
import Counter from './components/Counter';

function App() {
  return (
    <div id="wrapper" className="flex flex-col container mt-5">
      <div id="header">
        <Title />
      </div>
      <div className="row mt-5">
        <div className="firstRow">
          <QuoteFetch />
          <QuoteDelete />
        </div>
        <div className="firstRow">
          <Filter />
        </div>
        <div className="firstRow flex justify-center items-center">
          <Counter />
        </div>
      </div>
      <div className="row mt-5 text-center justify-center">
        <QuoteList />
      </div>
    </div>
  );
}

export default App;
