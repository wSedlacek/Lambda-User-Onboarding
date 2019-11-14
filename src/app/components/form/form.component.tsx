import React from 'react';
import './form.component.scss';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withFormik, Form as Formik, Field } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { User, Role } from '../../models/User';
import { UserService } from '../../services/user.service';

type SignupFormProps = {
  values: User;
  errors: { name: string; email: string; password: string; role: string; tos: string };
  touched: { name: boolean; email: boolean; password: boolean; role: boolean; tos: boolean };
  isSubmitting: boolean;
};

function SignupForm({ values, errors, touched, isSubmitting }: SignupFormProps) {
  const roles = [Role.Admin, Role.User];
  return (
    <Paper className='Form'>
      <Typography gutterBottom variant='h4' component='h2'>
        Signup
      </Typography>
      <Formik className='Inputs'>
        <Field className='Input' type='text' name='name' label='Name' component={TextField} />
        <Field className='Input' type='email' name='email' label='Email' component={TextField} />
        <Field
          className='Input'
          type='password'
          name='password'
          label='Password'
          component={TextField}
        />

        <Field className='Input' type='text' name='role' label='Role' select component={TextField}>
          {roles.map(role => (
            <MenuItem value={role} key={role}>
              {role}
            </MenuItem>
          ))}
        </Field>

        <FormControl className='TOS Input' error={errors.tos !== undefined && touched.tos}>
          <FormLabel component='legend'>Terms of Service</FormLabel>
          <FormControlLabel
            control={<Field type='checkbox' name='tos' value={values.tos} component={Checkbox} />}
            label='I agree'
          />
        </FormControl>

        <Button className='Submit' type='submit' disabled={isSubmitting}>
          Submit
        </Button>
      </Formik>
    </Paper>
  );
}

export const Form = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      password: '',
      role: '',
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
    role: Yup.string().required('You are required to have a role'),
    tos: Yup.boolean().oneOf([true], 'You are required to agree'),
  }),
  handleSubmit(user, { resetForm, setSubmitting }) {
    UserService.addUser(user as User)
      .then(() => resetForm())
      .catch(err => alert(err))
      .finally(() => setSubmitting(false));
  },
})(SignupForm as any);
