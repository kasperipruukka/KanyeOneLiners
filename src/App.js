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
      <div className="sm:mt-3 md:mt-5 flex sm:flex-col md:flex-row sm:items-center">
        <div className="sm:w-9/12 md:firstRow sm:text-center xs:flex-col sm:flex sm:items-center">
          <QuoteFetch />
          <QuoteDelete />
        </div>
        <div className="sm:mt-3 sm:w-full md:firstRow flex justify-center items-center">
          <Filter />
        </div>
        <div className="sm:mt-3 sm:w-full md:firstRow flex justify-center items-center">
          <Counter />
        </div>
      </div>
      <div className="flex sm:mt-3 md:mt-5 justify-center items-center text-center">
        <div className="w-2/4">
          <QuoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
