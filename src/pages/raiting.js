import React, { useState } from 'react'
import ReitingElement from '../components/ReitingElement'
import ButtonBack from '../components/ButtonBack'
import './RaitingPage.css'


const Header = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr 1fr' }}>
        <div></div>
        <div style={{ textAlign: 'center' }}>Информация</div>
        <div style={{ textAlign: 'center', marginRight: '10px' }}>Итог</div>
    </div>
);


const RaitingPage = () => {
    const [listElements, setListElements] = useState([{},{},{}])
    return (
        <div>
            <ButtonBack namePage={'Рейтинг'} />
            <Header />
            <div className="divider"></div>
            <ul className="element-list">
                {listElements.map((element, index) => (
                    <li key={index} className="element-item">
                        <ReitingElement index={index+1}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RaitingPage