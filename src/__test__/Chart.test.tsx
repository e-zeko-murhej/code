import React from 'react';
import { render, screen } from '@testing-library/react';
import Chart from '../components/molecules/Chart';

const data = [
  {
    day: 'monday',
    value: 10,
  },
  {
    day: 'tuesday',
    value: 5,
  },
  {
    day: 'wednesday',
    value: 13,
  },
  {
    day: 'thursday',
    value: 23,
  },
  {
    day: 'friday',
    value: 11,
  },
  {
    day: 'saturday',
    value: 8,
  },
  {
    day: 'sunday',
    value: 3,
  },
];
test('test if the chart visible', async () => {
  render(<Chart data={data} labelKey="day" valueKey="value" title="test campaign" />);
  const chartLabel = await screen.findByText('test campaign');
  expect(chartLabel).toBeInTheDocument();
});
