import React, { useState, useContext } from "react";
import axios from "axios";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../api/axios";
import LogoDragon from '../assets/hero.svg'
const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.post("/login", {
        email,
        password,
      });
      // Сохранение токена доступа
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("user_id", response.data.id);
      console.log(response.data.access_token)
      // Устанавливаем значение контекста userID для приложения
      // Перенаправление на защищенную страницу
      navigate('/lk/main')
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div>
      <div className="stage">
          <div className="logophoto bounce-1"><img src={LogoDragon}/></div>
        </div>
        <h1>Авторизация</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <p onClick={()=>navigate('reg') } style={{textDecoration:'underline'}}>Зарегистрироваться</p>
    </div>
  );
};

export default LoginPage;