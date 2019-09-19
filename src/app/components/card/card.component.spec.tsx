import React from 'react';
import { render } from '@testing-library/react';

import { Card } from './card.component';

it('Renders without crashing', () => {
  const { baseElement } = render(<Card />);
  expect(baseElement).toBeInTheDocument();
});
