import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const styles = {
  color: 'red',
};

const DataTable = ({ snpData }) => {
  const maxYear = snpData[0].year;
  const minYear = snpData[snpData.length - 1].year;

  const [userMin, setUserMin] = useState(minYear);
  const [userMax, setUserMax] = useState(maxYear);

  const handleChange = value => {
    setUserMin(value[0]);
    setUserMax(value[1]);
  };

  const marks = {
    [minYear]: minYear,
    [maxYear]: maxYear,
  };

  return (
    <div className='container p-auto m-auto'>
      <Range
        min={minYear}
        max={maxYear}
        value={[userMin, userMax]}
        marks={marks}
        range={true}
        tipFormatter={value => value}
        onChange={handleChange}
      />
      <table className='table mt-4'>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Total Return</th>
            <th>Cumulative Return</th>
          </tr>
          {snpData
            .filter(data => data.year >= userMin && data.year <= userMax)
            .sort((a, b) => (a.year < b.year ? -1 : 1))
            .map((data, index, arr) => ({
              ...data,
              cumulativeReturn: arr.slice(0, index + 1).reduce((acc, curr) => {
                return acc + parseFloat(curr.totalReturn);
              }, 0),
            }))
            .map(data => {
              return (
                <tr key={data.year}>
                  <td>{data.year}</td>
                  {data.totalReturn > 0 ? (
                    <td>{data.totalReturn}</td>
                  ) : (
                    <td style={styles}>{data.totalReturn}</td>
                  )}
                  {data.cumulativeReturn > 0 ? (
                    <td>{data.cumulativeReturn.toFixed(2)}</td>
                  ) : (
                    <td style={styles}>{data.cumulativeReturn.toFixed(2)}</td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
