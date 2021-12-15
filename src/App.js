import React from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import Quote from './components/Quote';
import QuoteDelete from './components/QuoteDelete';
import QuoteFetch from './components/QuoteFetch';
import QuoteList from './components/QuoteList';
import QuoteCount from './components/QuoteCount';

function App() {
  return (
    <div id="wrapper" className="flex flex-col container mt-5">
      <div id="header">
        <Title />
      </div>
      <div className="row">
        <div className="firstRow">
          <QuoteFetch />
          <QuoteDelete />
        </div>
        <div className="firstRow">
          <Filter />
        </div>
        <div className="firstRow">
          <QuoteCount />
        </div>
      </div>
      <div className="row">
        <QuoteList />
        <Quote />
      </div>
    </div>
  );
}

export default App;
