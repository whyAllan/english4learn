import { useState } from "react";
import api from "../../authentication/api";
import "../../css/auth.css";

interface User {
  password: string;
  email: string;
}

function Login({ setpath }: any) {
  const [user, setUser] = useState<User>({
    password: "",
    email: "",
  });

  function LoginFunction(event: any) {
    event.preventDefault();

    api.post("/authorization/login", user);
  }
  return (
    <div className="authForm">
      <h1>Login</h1>
      <hr />

      <form className="form-group" onSubmit={LoginFunction}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <div className="footer">
          <p>
            Not registered? <i onClick={() => setpath("/register")}>Register</i>
          </p>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;