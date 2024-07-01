import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack'
import { useState, useEffect } from 'react'
import { axiosPrivate } from '../api/axios'
import Puzzle from '../components/Puzzle'
import CompletedTaskWindow from '../components/completedTaskBanner'
const EveryDayTask = () => {
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false)
    const [dataPuzzle, setDataPuzzle] = useState({})
    const [dataPhraz, setDataPhraz] = useState({})
    const [activePazzle, setActivePuzzle] = useState(true)
    const [activePhraz, setActivePhraz] = useState(false)
    const navigate = useNavigate()

    function loadData(){
      setIsLoaded(true)
        axiosPrivate.get("/everydaytask1")
          .then((response) => {
            setDataPuzzle(response.data.day_puzzle_info)
            setDataPhraz(response.data.day_phraseologism_info)
            setActivePuzzle(response.data.day_puzzle_info.is_completed)
            setActivePhraz(response.data.day_phraseologism_info.is_completed)
            console.log(response.data.day_puzzle_info)
            setIsLoaded(false)
          })
          
          .catch((error) => {
            setError(error);
          });
      
    }


    useEffect(() => {
        loadData();
      }, []);
      
      useEffect(() => {
        if (error) {

          navigate("/");
        }
        
      }, [error, navigate]);
    return (
        !isLoaded&&<div>
            <ButtonBack namePage={'Ежедневное задание'}/>
            <div>
            {!activePazzle?<Puzzle update={()=>loadData()} data={dataPuzzle}/>:<CompletedTaskWindow/>
            }
              </div>

            </div>
    )
}

export default EveryDayTask