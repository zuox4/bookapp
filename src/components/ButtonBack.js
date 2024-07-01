import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackArrow from '../assets/back.svg'
const ButtonBack = ({namePage}) => {
    const navigate = useNavigate()

    return (
        
        <div className="back" style={{display:'flex', flexDirection:'row', marginBottom:'15px', alignContent:'center', fontSize:'20px', fontFamily:'Montserrat Alternates'}} onClick={()=>navigate(-1) }>
            <img src={BackArrow} alt="" style={{width:'25px', marginRight:'10px'}} />
            {namePage}
        </div>


    )
}

export default ButtonBack