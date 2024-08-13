import React, { useState } from 'react'

function LandingPage() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const handleSubmit = () => {
    
  }


  return (
    <div className='bg-[#354f52] h-[100vh] flex justify-center items-center '>
      <div className='h-[40vh] w-[500px] bg-[#D5D48B] rounded-[10px] flex flex-col justify-center items-center'>
        <input type="text" className='w-[200px] outline-none p-2 text-[1.2rem]' onChange={(e) => setAge(e.target.value)}/>
        <br />
        
        <input type="text" name="" id="" className='w-[200px] outline-none text-[1.2rem] p-2 mb-8' onChange={(e) => setAge(e.target.value)}/>

        <button className='text-[1.5rem] bg-[#354f52] text-white font-bold p-2 w-[200px] hover:bg-[green]' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default LandingPage