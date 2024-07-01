import React from 'react'
import './Reiting.css'
import Like from '../assets/like2.png'
import LogoDragon from '../assets/hero.svg'
const ReitingElement = ({index}) => {
    
    return (
        <div className='reiting-element'>
            <div className="" style={{display:'flex',alignItems:'center'}}>{index} место</div>

            <div className="infoplayer">
                <h3>Миша Алексеев</h3>
                <h4>Прочитано книг: 100</h4>
                <h4>Выполнено заданий: 100</h4>
            </div>
            <div className="total">1001</div>
            {/* <div style={{display:'flex', alignItems: 'center', flexDirection:'row'}}>
                <img style={{width:'30px'}} src={Like} alt="" />
            </div> */}
        </div>
    )
}

export default ReitingElement