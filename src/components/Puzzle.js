import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { axiosPrivate } from '../api/axios'
const Puzzle = ({data, update}) => {

    const [answer, setAnswer] = useState('')
    function clickAnswerButton(){
      axiosPrivate.post('/check_correct_answer_puzzle', {id: data.id, dailyTaskPuzzleId: data.day_puzzle_id, answer_question: answer}).then((data)=>{
        console.log(data.data.answer);
        data.data.answer?update():console.log('Неправильно')
      })
    }

    return (
        

        <div  className='puzzle' style={{display:'flex', border:'2px solid gray', padding:'10px', borderRadius:'10px',  flexDirection:'column', alignItems:'strech'}}>
            <h1 style={{fontSize:'20px', marginTop:'0px', marginBottom:'2px'}}>Загадка</h1>
            <div>{data.question}</div>

            <input style={{maxWidth:'500px', width:'100%', textTransform:'uppercase'}} type='text' onChange={(e)=>setAnswer(e.target.value)}/>
            <button style={{marginBottom:'0px', marginTop:'10px'}} onClick={()=>clickAnswerButton()}>Ответить</button>
        </div>
    )
}

export default Puzzle