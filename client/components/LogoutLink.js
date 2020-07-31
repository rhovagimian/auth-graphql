//@ts-check
import React from "react";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";
import { useHistory } from "react-router-dom";

const mutation = graphql`
  mutation LogoutLink_Mutation {
    logout {
      id
    }
  }
`;

function LogoutLink() {
  const history = useHistory();
  const updater = (store, response) => {
    const { id } = response.logout;
    if (id) {
      store.delete(id);
    }
  };
  const onLogout = () => {
    commitMutation(environment, {
      mutation,
      variables: {},
      onCompleted: () => {
        history.push("/");
      },
      updater,
    });
  };
  return <a onClick={onLogout}>Logout</a>;
}

export default LogoutLink;
