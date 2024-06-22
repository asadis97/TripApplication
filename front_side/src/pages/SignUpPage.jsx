import React from 'react'
import { useUser } from '../users/providers/UserProvider';
import useUsers from '../users/hooks/useUsers';
import useForm from '../forms/hooks/useForm';
import initialSignUpForm from '../forms/initialForms/initialSignUpForm';
import SignUpSchema from '../forms/models/joi-schema/signUpSchema';
import { Container } from '@mui/material';
import Form from '../forms/components/Form';
import ROUTES from '../routes/routesModel';
import Input from '../forms/components/Input';
import { Navigate } from 'react-router-dom';

export default function SignUpPage() {
  const { user } = useUser();
  const { handleSignup } = useUsers();

  const { value, ...rest } = useForm(
    initialSignUpForm,
    SignUpSchema,
    handleSignup
  );
  if (user) return <Navigate replace to={ROUTES.ROOT}/>;
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Sign Up"
        styles={{ maxWidth: "450px" }}
        to={ROUTES.ROOT}
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
      >
        <Input
          label="First Name"
          name="FirstName"
          type="text"
          error={value.errors.firstName}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label="Last Name"
          name="LastName"
          type="text"
          error={value.errors.lastName}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label="email"
          name="email"
          type="email"
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label="password"
          name="password"
          type="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
  )
}
