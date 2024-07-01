import React, { useContext } from 'react'
import { AuthContext, UserId } from '../App'
import { useNavigate } from 'react-router-dom'
import { axiosPrivate } from '../api/axios'
import { useState } from 'react'
import './Header.css'
const Header = () => {
    const changeId = useContext(AuthContext)
    const userId = localStorage.getItem('user_id')
    const navigate = useNavigate()
    function LogOut(){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user_id')
        navigate('/')
    }
    function doSomthing(url){
        axiosPrivate.get(url)
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => {
            localStorage.removeItem('user_id')
            navigate('/login')
          });
    }
    return (
        <div className="header-box">
            <div className="logo">
            PlayBook
            </div>
        <div className="in-out" onClick={LogOut} style={{textDecoration:'underline'}}>
          Выход
        </div>
    </div>
    )
}

export default Header