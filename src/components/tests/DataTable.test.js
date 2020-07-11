import React from 'react';
import { render } from '@testing-library/react';
import DataTable from '../DataTable';
import history from '../../data/history.json';

describe('DataTable', () => {
  it('renders without failing', () => {
    render(<DataTable snpData={history} />);
  });
});
