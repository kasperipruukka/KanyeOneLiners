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
      <div className="flex sm:flex-col md:flex-row sm:items-center sm:mt-3 md:mt-5">
        <div className="sm:w-7/12 md:firstRow sm:text-center sm:flex sm:items-center">
          <QuoteFetch />
          <QuoteDelete />
        </div>
        <div className="sm:w-full md:firstRow flex justify-center items-center">
          <Filter />
        </div>
        <div className="sm:w-full md:firstRow flex justify-center items-center">
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
