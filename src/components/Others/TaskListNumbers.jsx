import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='text-white py-6 px-9 w-[25%] bg-rose-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='text-white py-6 px-9 w-[25%] bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='text-white py-6 px-9 w-[25%] bg-violet-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='text-white py-6 px-9 w-[25%] bg-teal-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers