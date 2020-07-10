import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import DataTable from '../DataTable';
import Slider from 'rc-slider';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

describe('DataTable', () => {

  it('changes the range of the year when slider is moved', () => {
    const wrapper = shallow(<DataTable />);
    wrapper.find(Range).at(1926).simulate('change', { target: { value: [1950, 2019] } });
    expect(onChange).toHaveBeenCalled();
  })

  it('renders without failing', () => {
    render(<DataTable />);
  });
});