
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useContext, useEffect, useState } from "react";
import { axiosPrivate } from "../api/axios";
import ButtonBack from '../components/ButtonBack';

const Users = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoaded(true)
        axiosPrivate.get("/users")
          .then((response) => {
            setData(response.data.students);
            
          })
          .catch((error) => {
            setError(error);
            
          });
      }, []);

      useEffect(() => {
        if (error) {
          navigate("/");
        }
        data&&setIsLoaded(false)
      }, [error, navigate]);
      const location = useLocation()
    return (
      !isLoaded?<div>
            <ButtonBack namePage={'Пользователи'}/>
            {<ul>
                {data.map((e)=><li>{e}</li>)}
            </ul>}
            
        </div>:'Подождите загрузка данных'
    )
}

export default Users