import React, { useState } from 'react';
import history from '../data/history.json';

const DataTable = () => {
  const snpData = [...history];
  var prevReturn = 0;
  snpData.reverse();
  return (
    <div>
      <table>
        <tr>
          <th>Year</th>
          <th>Total Return</th>
          <th>Cumulative Return</th>
        </tr>
        <tbody>
          {snpData.map(data => {
            const totalReturn = parseFloat(data.totalReturn);
            const currReturn = prevReturn + totalReturn;
            prevReturn = currReturn;
            return (
              <tr>
                <td>{data.year}</td>
                <td>{data.totalReturn}</td>
                <td>{currReturn.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
