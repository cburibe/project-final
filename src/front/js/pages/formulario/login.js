import React, { useRef, useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/login.css";
import Modaluser from "./modalregistro";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { actions } = useContext(Context);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user, pwd);
      let response = await actions.login2(user, pwd);
      console.log(response);
      setUser("");
      setPwd("");
      setSuccess(true);
      history.push(`/profile/${user}`);
    } catch (e) {
      if (e.message === "401") {
        alert("usuario y o contraseña no coinciden");
      }
      console.error(e);
    }
  };
  return (
    <>
      <section className="form">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            className="inp"
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            className="inp"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button type="submit">Log in</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <a href="#">
              <Modaluser />
            </a>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
