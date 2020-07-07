import React from 'react';
import { render } from '@testing-library/react';
import DataTable from '../DataTable';

describe('DataTable', () => {
  it('renders without failing', () => {
    render(<DataTable />);
  });
});
