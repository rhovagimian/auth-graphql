//@ts-check
import React from "react";
import AuthForm from "./AuthForm";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";

const mutation = graphql`
  mutation LoginForm_Mutation($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

function LoginForm() {
  return (
    <div>
      <h3>Login</h3>
      <AuthForm
        onSubmit={({ email, password }) => {
          commitMutation(environment, {
            mutation,
            variables: {
              email,
              password,
            },
            onCompleted: (response, errors) => {
              if (errors) {
                console.log(errors);
              }
            },
          });
        }}
      />
    </div>
  );
}

export default LoginForm;
