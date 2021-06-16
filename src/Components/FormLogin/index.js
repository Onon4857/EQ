import axios from "../../axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";

const FormLogin = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [nullUsername, setNullusername] = useState(false);
  const [nullPassword, setNullPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const loginHandler = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!password || !username) {
      setNullusername(true);
      setNullPassword(true);
      props.shake(true);

      if (!username) {
        store.addNotification({
          title: "Нэвтрэх нэрээ оруулна уу?",
          message: "Нэвтрэх нэр заавал оруулах шаардлагатай!",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      } else if (!password) {
        store.addNotification({
          title: "Нууц үгээ оруулна уу?",
          message: "Нууц үг заавал оруулах шаардлагатай!",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 4000,
            onScreen: true,
          },
        });
      }

      setTimeout(() => {
        props.shake(false);
      }, 400);
    } else {
      const data = { username, password };
      axios
        .post("/login", data)
        .then((result) => {
          store.addNotification({
            title: "Амжилттай нэвтэрлээ.",
            message: "Түр хүлээнэ үү?",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
            },
          });
        })
        .catch((err) => {
          props.shake(true);

          store.addNotification({
            title: "Алдаа гарлаа",
            message: err.response.data.error,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true,
            },
          });

          setTimeout(() => {
            props.shake(false);
          }, 400);
        });
    }
  };

  return (
    <div className="FormLogin">
      <h2>Нэвтрэх</h2>
      <div>
        <p>Нэвтрэх нэрээ оруулна уу?</p>
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
        <p>Нууц үгээ оруулна уу?</p>
        <div className="FormLogin__password">
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
              className="fas fa-eye FormLogin__eye"
            ></i>
          )}
        </div>
      </div>

      <div className="FormLogin-checkbox">
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

export default FormLogin;
