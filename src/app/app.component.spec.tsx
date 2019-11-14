import React from 'react';
import { render } from '@testing-library/react';

import { App } from './app.component';

it('Renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});
