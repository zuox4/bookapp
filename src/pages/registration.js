import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../api/axios";
import LogoDragon from '../assets/hero.svg'

const RegistrationPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [grad, setGrad] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post("/register", {
        email,
        password,
        name,
        grad,
      });
      // Можно добавить обработку успешной регистрации здесь
      console.log(response.data); // Можно вывести информацию об успешной регистрации
      // Можно перенаправить пользователя на страницу входа после успешной регистрации
      navigate('/');
    } catch (error) {

      setError(error.response.data.msg);
    }
  };

  return (
    <div>
        <div className="stage">
          <div className="logophoto bounce-1"><img src={LogoDragon}/></div>
        </div>
      <h1>Регистрация</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Класс"
          value={grad}
          onChange={(e) => setGrad(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" >Зарегистрироваться</button>
      </form>
      <p onClick={()=>navigate('/') } style={{textDecoration:'underline'}}>Войти</p>
    </div>
  );
};

export default RegistrationPage;