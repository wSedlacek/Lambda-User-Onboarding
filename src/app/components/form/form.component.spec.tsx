import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { dave } from '../../../setupTests';

import { Form } from './form.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

it('Renders without crashing', () => {
  const { baseElement } = render(<Form />);
  expect(baseElement).toBeInTheDocument();
});

it('Can add users', async () => {
  let data: Array<User> = [];
  UserService.subscribe(users => (data = users));

  const { baseElement, getByText } = render(<Form />);
  const inputs = baseElement.querySelectorAll('input');

  fireEvent.input(inputs[0], { target: { value: dave.name } });
  fireEvent.input(inputs[1], { target: { value: dave.email } });
  fireEvent.input(inputs[2], { target: { value: dave.password } });
  fireEvent.click(document.getElementById('select-role') as any);
  fireEvent.click(getByText(dave.role));
  fireEvent.click(inputs[4]);
  fireEvent.submit(getByText('Submit'));

  await new Promise((resolve, v) => setTimeout(resolve.bind(null, v), 1500));
  expect(data.length).toEqual(1);
});
