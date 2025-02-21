import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';



function LandingPage() {

  const [username, setUsername] = useState("");
  const [chatType, setChatType] = useState(null)

  const [searchParams] = useSearchParams()

  let {name, setName} = useContext(UserContext)

  const navigate = useNavigate()


  useEffect(() => {
    const typeOfChat = searchParams.get('chat')

    setChatType(typeOfChat)

    console.log(typeOfChat)

  }, [])


  const handleSubmit = () => {
    console.log("ok")
    setName(username)
    setUsername("")
    // if(chatType === 'text') navigate(`/chat/${username}`)
    if(username === "") return
    
    navigate(`/chat/${username}`)
  }


  return (
    <div className='bg-[black] h-[100vh] flex justify-center items-center '>
      <div className='h-[40vh] w-[500px] bg-[#D5D48B] rounded-[10px] flex flex-col justify-center items-center'>
        <input type="text" className='mb-4 w-[200px] outline-none p-2 text-[1.2rem]' placeholder='Pick a fun fake name!' onChange={(e) => setUsername(e.target.value)}/>
        
        <button className='text-[1.5rem] bg-[#354f52] text-white font-bold p-2 w-[200px] hover:bg-[green]' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default LandingPage