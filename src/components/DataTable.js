import React, { useState } from 'react';
import history from '../data/history.json';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const DataTable = () => {
  const snpData = [...history];
  const maxYear = snpData[0].year;
  var prevReturn = 0;
  snpData.reverse();
  const minYear = snpData[0].year;

  const [userMin, setUserMin] = useState(minYear);
  const [userMax, setUserMax] = useState(maxYear);
  const [value, setValue] = useState([minYear, maxYear]);

  const handleChange = value => {
    setValue(value);
    setUserMin(value[0]);
    setUserMax(value[1]);
  };

  const styles = {
    color: 'red',
  };

  const marks = {
    1926: `${minYear}`,
    2019: `${maxYear}`,
  };

  return (
    <div className='container p-auto m-auto'>
      <Range
        min={minYear}
        max={maxYear}
        value={value}
        marks={marks}
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
            .filter(data => {
              return data.year >= userMin && data.year <= userMax;
            })
            .map(data => {
              const totalReturn = parseFloat(data.totalReturn);
              const currReturn = prevReturn + totalReturn;
              prevReturn = currReturn;
              return (
                <tr key={data.year}>
                  <td>{data.year}</td>
                  {data.totalReturn > 0 ? (
                    <td>{data.totalReturn}</td>
                  ) : (
                    <td style={styles}>{data.totalReturn}</td>
                  )}
                  {currReturn > 0 ? (
                    <td>{currReturn.toFixed(2)}</td>
                  ) : (
                    <td style={styles}>{currReturn.toFixed(2)}</td>
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
