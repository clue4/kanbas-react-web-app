import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User } from "./client";
import "./index.css";

import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div className="container">
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button className="btn btn-primary" onClick={signin}> Signin </button>
      <Link to={"/Kanbas/Account/Signup"}>No account? Signup</Link>
    </div>
  );
}
