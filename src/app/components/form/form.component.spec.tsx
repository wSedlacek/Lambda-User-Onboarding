import React from 'react';
import { render } from '@testing-library/react';

import { Form } from './form.component';

it('Renders without crashing', () => {
  const { baseElement } = render(<Form />);
  expect(baseElement).toBeInTheDocument();
});
