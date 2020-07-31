//@ts-check
import React, { useState } from "react";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="row">
      <form className="col s6">
        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={password}
          />
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
