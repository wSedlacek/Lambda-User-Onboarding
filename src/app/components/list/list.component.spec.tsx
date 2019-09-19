import React from 'react';
import { render } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { List } from './list.component';

it('Renders without crashing', () => {
  const { baseElement } = render(<List users={[dave]} />);
  expect(baseElement).toBeInTheDocument();
});

it('Has shows card', () => {
  const { baseElement } = render(<List users={[dave]} />);
  expect(baseElement.querySelector('.Card')).toBeInTheDocument();
});
