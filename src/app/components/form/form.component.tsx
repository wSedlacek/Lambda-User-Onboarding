import React from 'react';
import './form.component.scss';

import { withFormik, Form as Formik, Field } from 'formik';
import * as Yup from 'yup';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

// - A Submit button to send our form data to the server.

type SignupFormProps = {
  values: User;
  errors: { name: string; email: string; password: string };
  touched: { name: boolean; email: boolean; password: boolean; tos: boolean };
  isSubmitting: boolean;
};

function SignupForm({ values, errors, touched, isSubmitting }: SignupFormProps) {
  return (
    <Formik>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='name' name='name' placeholder='Name' />
      </div>

      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>

      <label>
        <Field type='checkbox' name='tos' checked={values.tos} />
        Accept TOS
      </label>

      <button disabled={isSubmitting}>Submit</button>
    </Formik>
  );
}

export const Form = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      password: '',
      tos: false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters or longer')
      .required('Password is required'),
  }),
  handleSubmit(user, { resetForm, setSubmitting }) {
    UserService.addUser(user as User)
      .then(() => resetForm())
      .finally(() => setSubmitting(false));
  },
})(SignupForm as any);
