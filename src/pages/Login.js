import React, { useLayoutEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TypeAcessEnum from "../enums/type-access";
import FirebaseService from "../services/firebase-service";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lembreme, setLembreme] = useState(false);
  const [msg, setMsg] = useState("");

  useLayoutEffect(() => {
    const emailStorage = localStorage.getItem("email");
    const passwordStorage = localStorage.getItem("password");
    setEmail(emailStorage ? emailStorage : '');
    setPassword(passwordStorage? passwordStorage : '');
    setLembreme(true);
  }, []);

  const login = () => {
    if (lembreme == false) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    FirebaseService.getAuth()
      .signInWithEmailAndPassword(email, password)
      .then((retorno) => {
        sessionStorage.setItem("uuid", retorno.user.uid);
        if (lembreme === true) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        }
        setMsg("");
        history.push("/home");
      })
      .catch((erro) => {
        console.log(erro);
        setMsg("Usuário ou senha inválidos!");
      });
  };

  return (
    <>
      <div>
        <Header type={TypeAcessEnum.PUBLIC} />
        <Banner
          title="Task Management"
          message="A web page for management of tasks"
        />
        <section id="three" className="wrapper special container">
          <h3>Login</h3>
          <form>
            <div class="row uniform">
              <div class="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="6u$ 12u$(small)">
                <input
                  type="checkbox"
                  id="human"
                  name="human"
                  checked={lembreme}
                  onChange={(e) => setLembreme(e.target.checked)}
                />
                <label for="human">Lembre-me</label>
              </div>
              <div class="12u$">
                <ul class="actions">
                  <li>
                    <input type="button" value="Login" onClick={login} />
                  </li>
                  <li>
                    <Link to="/register">
                      <input type="button" value="Cadastrar" />
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
