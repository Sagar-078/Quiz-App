import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (

    <div className='h-[100vh] w-full bg-emerald-300'>
      <div className='h-full flex flex-col justify-center w-[40%] max-sm:w-[90%] mx-auto items-center gap-24'>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-slate-200 font-bold'>Hello Jee</h1>
        <h1 className='font-bold'>There is some challenges for you ...</h1>
        <h1 className='font-bold'>Be serious</h1>
        <Link to={'/Question'}>
          <button className='mt-10 px-5 py-3 bg-sky-700 rounded'>Let's Start</button>
        </Link>
      </div>

      <div>
        <h1 className='text-2xl font-semibold text-gray-700'>Introduction</h1>
        <span className='text-1xl gap-2 flex flex-col'>
          Their Some interduction for You, <br/> 
          <ul className='text-1xl gap-2 flex flex-col list-disc'>
            <li>You will get 60sec for each Question.</li>
            <li>It is a multiple choice based QuestionYou will get four Options in every Question.</li>
            <li>After pick a option if this is Wrong then it Highlight the Correct answer.</li>
            <li>After compliting all Question it shows the Score.</li>
          </ul>
        </span>
      </div>
    </div>
    </div>
  )
}

export default HomePage