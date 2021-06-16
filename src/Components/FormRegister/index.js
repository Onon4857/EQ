import axios from "../../axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";

const FormRegister = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [nullUsername, setNullusername] = useState(false);
  const [nullPassword, setNullPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const loginHandler = () => {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const notification = {
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    };

    const data = { firstname, lastname, email, username, password };
    console.log(data);
    axios
      .post("/researcher/register", data)
      .then(() => {
        store.addNotification({
          ...notification,
          title: "Амжилттай нэвтэрлээ.",
          message: "Түр хүлээнэ үү?",
          type: "success",
          dismiss: {
            duration: 4000,
          },
        });
      })
      .catch((err) => {
        props.shake(true);

        store.addNotification({
          ...notification,
          title: "Алдаа гарлаа",
          message: err.response.data.error,
          type: "danger",
        });

        setTimeout(() => {
          props.shake(false);
        }, 400);
      });
  };
  return (
    <div className="Form__auth FormRegister">
      <h2>Бүртгүүлэх</h2>
      <div>
        <p>Овог</p>
        <input
          onChange={() => {
            setNullusername(false);
            setNullPassword(false);
          }}
          className={`Form__input ${nullUsername && "Form__border--red"}`}
          id="lastname"
          placeholder="Жишээ: Батсайхан"
          type="text"
        />
      </div>
      <div>
        <p>Нэр</p>
        <input
          onChange={() => {
            setNullusername(false);
            setNullPassword(false);
          }}
          className={`Form__input ${nullUsername && "Form__border--red"}`}
          id="firstname"
          placeholder="Жишээ: Болд"
          type="text"
        />
      </div>
      <div>
        <p>Э-Мэйл</p>
        <input
          onChange={() => {
            setNullusername(false);
            setNullPassword(false);
          }}
          className={`Form__input ${nullUsername && "Form__border--red"}`}
          id="email"
          placeholder="Жишээ: bold@gmail.com"
          type="text"
        />
      </div>
      <div>
        <p>Нэвтрэх нэр</p>
        <input
          onChange={() => {
            setNullusername(false);
            setNullPassword(false);
          }}
          className={`Form__input ${nullUsername && "Form__border--red"}`}
          id="username"
          placeholder="Жишээ: bold"
          type="text"
        />
      </div>

      <div>
        <p>Нууц үг</p>
        <div className="Form__auth__password">
          <input
            onChange={() => {
              setNullusername(false);
              setNullPassword(false);
            }}
            className={`Form__input ${nullPassword && "Form__border--red"}`}
            id="password"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
          />
          {showPassword ? (
            <i
              onClick={() => setShowPassword(false)}
              className="fas fa-eye-slash"
            ></i>
          ) : (
            <i
              onClick={() => setShowPassword(true)}
              className="fas fa-eye Form__auth__eye"
            ></i>
          )}
        </div>
      </div>

      <div className="Form__auth-checkbox">
        <div>
          <input
            onClick={() =>
              rememberMe ? setRememberMe(false) : setRememberMe(true)
            }
            type="checkbox"
            checked={rememberMe}
            id="remember-me"
          />
          <p
            onClick={() =>
              rememberMe ? setRememberMe(false) : setRememberMe(true)
            }
          >
            Намайг сана{" "}
          </p>
        </div>
        <Link to="/register">Нууц үгээ мартсан</Link>
      </div>

      <button onClick={loginHandler} type="submit">
        НЭВТРЭХ
      </button>
      <Link to="/register">Шинээр бүртгэл үүсгэх</Link>
    </div>
  );
};

export default FormRegister;
