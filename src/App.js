import React, { useState } from 'react';
import './App.css';
import { data } from './data/data';
import Cell from './components/Cell';

function App() {
  const [cells, setCells] = useState(data.cells);
  return (
    <div className="container-fluid">
      <table className='table table-bordered table-dark'>
        <thead>
          <tr>
            <th>Cell Type</th>
            <th>Execution Count</th>
            <th>Metadata</th>
            <th>Oututs</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>{cells.map((cell, i) => <Cell data={cell} key={i} />)}</tbody>
      </table>
      
    </div>
  );
}

export default App;
