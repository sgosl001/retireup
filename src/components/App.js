import React from 'react';
import DataTable from '../components/DataTable';
import history from '../data/history.json';
import '../styles/App.css';

function App() {
  return (
    <div className='App mt-4'>
      <h1>RetireUp Coding Test</h1>
      <DataTable snpData={history} />
    </div>
  );
}

export default App;
