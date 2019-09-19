import React from 'react';
import { render } from '@testing-library/react';

import { List } from './list.component';

it('Renders without crashing', () => {
  const { baseElement } = render(<List />);
  expect(baseElement).toBeInTheDocument();
});
