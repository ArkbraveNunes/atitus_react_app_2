import React, { useLayoutEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useHistory, Link } from "react-router-dom";
import TypeAcessEnum from "../enums/type-access"
import FirebaseService from "../services/firebase-service";


export default function Register() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const register = () => {
    if (password !== confirmPassword) {
      console.log("As senhas digitadas não são equivalentes");
    } else {
      FirebaseService.getAuth().createUserWithEmailAndPassword(email, password)
        .then((retorno) => {
          sessionStorage.setItem("uuid", retorno.user.uid);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          history.push("/home");
        })
        .catch((erro) => {
          console.log(erro);
          setMsg("Usuário ou senha inválidos!");
        });
    }
  };

  return (
    <>
      <div>
        <Header type={TypeAcessEnum.PUBLIC}/>
        <Banner
          title="Task Management"
          message="A web page for management of tasks"
        />
        <section id="three" className="wrapper special container">
          <h3>Register</h3>
          <form>
            <div class="row uniform">
              <div class="6u 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="row uniform">
              <div class="6u$ 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="6u$ 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div class="12u$">
                <ul class="actions">
                  <li>
                    <input type="button" value="Cadastrar" onClick={register} />
                  </li>
                  <li>
                    <Link to="/">
                      <input type="button" value="Login" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
