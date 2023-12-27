import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../mainData/Data';

const Question = () => {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [isOptionClicked, setOptionClicked] = useState(false);
  let [rightCount, setRightCount] = useState(0);
  let [islastQuestion, setLastQuestion] = useState(false);
  let [timer, setTimer] = useState(true);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let optionArr = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if(isOptionClicked === false){
      if(question.ans === ans){
        e.target.classList.add("right");
        setOptionClicked(true);
        setRightCount(prev => prev+1);
      }
      else{
        e.target.classList.add("worng");
        setOptionClicked(true);
        optionArr[question.ans-1].current.classList.add("right");
      }
    }
  }

  function clickHandler(){
    if(isOptionClicked === true){
      if(index === data.length -1){
        setLastQuestion(true);
        setTimer(false);
        return 0;
        
      }
      setIndex(++index);
      setQuestion(data[index]);
      setOptionClicked(false);
      optionArr.map((option) => {
        option.current.classList.remove("worng");
        option.current.classList.remove("right");
        return null;
      })
      setMinutes(0);
      setSeconds(0);
    }
  }

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if(seconds === 59){
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000)

     return () => clearInterval(timer);

  })

  if(minutes === 1){
    if(index === data.length -1){
      setLastQuestion(true);
      setTimer(false);
      return 0;
      
    }
    setIndex(++index);
    setQuestion(data[index]);
    setOptionClicked(false);
    optionArr.map((option) => {
      option.current.classList.remove("worng");
      option.current.classList.remove("right");
      return null;
    })
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className='w-full h-[100vh] bg-gray-500 flex items-center'>
      <div className='w-[50%] max-md:w-[70%] max-sm:w-full max-[1000px]:w-[70%] mx-auto flex flex-col justify-center items-center gap-5 bg-gray-400 px-10 py-14'>

        {
          islastQuestion ?(<div/>) : (
          <div className='flex flex-col font-semibold justify-center items-center'>
            <h1 className='text-2xl'>Timer</h1>
            <h1 className='font-bold'>{minutes < 10 ? "0"+ minutes : minutes}:{seconds < 10 ? "0"+ seconds : seconds}</h1>
          </div>
          ) 
        }

        <h1 className='text-2xl font-bold text-gray-500'>Quiz App</h1>
        <div className='h-[5px] w-full bg-slate-600'/>
        {
          islastQuestion ? (
          <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='text-2xl font-semibold text-purple-600'>Congratulation</h1>
            <h1 className='font-bold'>You have Scored {rightCount} out of {data.length}</h1>
            <Link to={'/'}>
              <button className='bg-sky-700 rounded px-5 mx-auto py-2 mt-3 text-white font-bold'>Reset</button>
            </Link>
          </div>) : (
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <h1>{index+1}. {question.question}</h1>
              <ul className='list-inside pl-4'>
                <li ref={option1} onClick={(e)=> {checkAns(e, 1)}}>(i). {question.option1}</li>
                <li ref={option2} onClick={(e)=> {checkAns(e, 2)}}>(ii). {question.option2}</li>
                <li ref={option3} onClick={(e)=> {checkAns(e, 3)}}>(iii). {question.option3}</li>
                <li ref={option4} onClick={(e)=> {checkAns(e, 4)}}>(iv). {question.option4}</li>
              </ul>

            </div>
            <button onClick={clickHandler} className='bg-sky-700 rounded w-[30%] mx-auto py-2 mt-3'>Next</button>
            <div className='text-center pt-5'>{index+1} of {data.length} questions</div>  
          </div>
          )    
        }
        
      </div>

    </div>
  )
}

export default Question