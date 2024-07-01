import herophoto from '../assets/hero.svg'
import charge from '../assets/charge.svg'
import { InfoCoinPanel } from './InfoCoinPanel'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './MainInfo.css'
import { useNavigate } from 'react-router-dom'
import { axiosPrivate } from '../api/axios'
import ThreeDObject from '../TreeDObject'

export const MainInfo = () =>{
    const [modal, setModal]=useState(false)
    const [coins, setCoins] = useState()
    const [charge, setCharge] = useState(null)
    const [lvl, setLevel] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState("");

    const navigate = useNavigate()
    useEffect(() => {
      setIsLoaded(true)
      axiosPrivate.get("/parameters")
        .then((data) => {
          console.log(data)
          setCharge(data.data.parameters.energy);
          setCoins(data.data.parameters.coins);
          setLevel(data.data.parameters.lvl);
        })
        .catch((error) => {
          setError(error);
        });
    }, []);

    useEffect(() => {
      if (error) {
        console.log(error)
        navigate("/");
      }
      charge&&setIsLoaded(false)
    }, [error, navigate]);

    return(

        isLoaded&&<div className="maininfoconteiner">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className="hero">
                <img src={herophoto}/>
            </div>
            <div className="maininfo" onClick={()=>setModal(true)}>
                <InfoCoinPanel coins={coins} energy={charge}></InfoCoinPanel>
                <h1>25 монет<br /> до следущего уровня</h1>
            </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className='rank'><h1>Читатель {lvl}-го ранга</h1></div>
            </div>
        </div>
)
}