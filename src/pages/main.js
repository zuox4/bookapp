import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainInfo } from '../components/MainInfo'
import dnevnik from '../assets/dnevnik1.svg';
import friends from '../assets/friends1.svg';
import info from '../assets/raiting.svg';
import vs from '../assets/1vs1.svg'
import katalog from '../assets/katalog.svg'
import tasks from '../assets/tasks.svg'
import ButtonMenu from '../components/ButtonMenu';
const Main = () => {
    // const navigate = useNavigate()
    const styleMenu = {

    }
    const pages = {users:{name:'Пользователи', url:'/lk/users'}, 
                   tasks:{name:'Задания', url:'/lk/everydaytask'},
                   raiting:{name:'Рейтинг', url:'/lk/reiting'}
                    }

    return (
        <div className='main'>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', columnGap:'20px', rowGap:'20px'}}>
                <ButtonMenu src={friends} obj={pages.users}/>
                <ButtonMenu src={tasks} obj={pages.tasks}/>
                <ButtonMenu src={info} obj={pages.raiting}/>
                <ButtonMenu src={dnevnik} obj={pages.users}/>
                <ButtonMenu src={dnevnik} obj={pages.users}/>
            </div>
            
        </div>
    )
}

export default Main