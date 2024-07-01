import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ButtonMenu.css'

const ButtonMenu = ({src, obj}) => {
    const navigate = useNavigate()
    const styleForDiv = {
        display:'flex', alignItems:'center', fontSize:'13px',flexDirection:'column', fontFamily:'Montserrat Alternates'
    }
    return (
        <div  style={styleForDiv} onClick={() => navigate(obj.url)}>
        <img className='x' style={{width:'55px', marginBottom:'10px'}} src={src} />
            {obj.name}
        </div> 
    )
}

export default ButtonMenu