"use client"
import React, { useState } from 'react'

function AddGoal() {
  const [title, setTitle] = useState("")
  const [description, setDesc] = useState("")
  const [completionDate, setCompletionDate] = useState("")

  return (
    <div className="bg-grayApp rounded-3xl shadow-border p-8">
      <form action="" className='flex flex-row'>
        <div className="w-2/3 mr-4">
          <div className='mt-4'>
            <label htmlFor="" className='font-bold italic'>Tell us your goal:</label>
            <textarea 
            name="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='What is your goal?'
            className="rounded-2xl resize-none border-black border-solid border-[2px] p-2 w-full"></textarea>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='font-bold italic mt-4'>What is it about:</label>
            <textarea 
            name="description" 
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='More information'
            className="rounded-2xl resize-none border-black border-solid border-[2px] p-2 w-full"></textarea>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='font-bold italic mt-4'>When is it completed:</label>
            <textarea 
            name="completionDate" 
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            placeholder='Deadline?'
            className="rounded-2xl resize-none border-black border-solid border-[2px] p-2 w-full"></textarea>
          </div>
          
          <div className='font-bold text-right mt-5'>
            <button className="p-2 bg-secondary rounded-2xl">Add Goal</button>
          </div>
        </div>
        <div className="addGoalImg shadow-border min-h-[400] w-1/3 min-w-[300]"></div>
      </form>
    </div>
    
  )
}

export default AddGoal