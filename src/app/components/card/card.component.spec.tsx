import React from 'react';
import { render } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { Card } from './card.component';

it('Renders without crashing', () => {
  const { baseElement } = render(<Card user={dave} />);
  expect(baseElement).toBeInTheDocument();
});

it('Shows user', () => {
  const { getByText } = render(<Card user={dave} />);
  expect(getByText(dave.name)).toBeInTheDocument();
  expect(getByText(dave.role)).toBeInTheDocument();
  expect(getByText(dave.email)).toBeInTheDocument();
});
