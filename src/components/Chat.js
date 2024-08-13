import React, { useEffect, useState } from 'react'
import Message from './Message'
import { io } from 'socket.io-client';
import Swal from 'sweetalert2'
import {Oval} from 'react-loader-spinner'

function Chat() {

    const [text, setText] = useState("");
    const [socket, setSocket] = useState();
    const [allTexts, setAllTexts] = useState([]);
    const [connecting, setConnecting] = useState(false);

    const handleSubmit = () => {
        
        if(!socket){
            setText("");
            return;
        } 
        socket.emit('chat message', text)
        setAllTexts((e) => [...e, {user : true, msg:text}]);
        setText("");
    }

    const handleStart = () => {
        
        const sock = io('https://chat-with-strangers-oql4.onrender.com/8000');

        setSocket(sock);
        setConnecting(true)
    }

    useEffect(() => {
        if(socket == null) return;
        socket.on('connect', () => {
            console.log(socket.id)
            console.log("User connected...")
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Your are connected with user`,
                showConfirmButton: false,
                timer: 1500
              });

        })
    }, [socket])

    useEffect(() => {
        if(!socket) return;
        socket.on('chat message', (message) => {
            console.log(message)
            setAllTexts((e) => [...e, {user: false, msg:message}]);
        })

        socket.on('partner', (id) => {
            
            setConnecting(false)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Your are connected with user ${id}`,
                showConfirmButton: false,
                timer: 1500
              });

        })

        return () => {
            socket.off('connect');
        };
    }, [socket])

  return (

    <div className={`flex flex-col items-center`}>

        {
            connecting&&<div className='absolute top-[45%]'>
            <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
            <h3 className='me-5'>Finding a partner</h3>
                        </div>
        }

        <div className='border border-[1px]-[black] h-16 flex w-[100vw]'>
            <div className='ms-[45%] p-3'>Talk to anyone</div>
        </div>

        <div className={'h-[75vh] bg-[#EFEFE0] w-[95vw] mt-5 overflow-y-scroll'}>

        {
            allTexts.map((e, ind) => {
                console.log(e)
                return (
                    
                    <Message key={ind} msg = {e.msg} user = {e.user} textColor={!e.user ? "text-orange-700": "text-[green]"}/>
                )
            })
        }
            
        
        </div>
    
        <div className='border border-[1px]-[black] mt-2 p-4 box-border w-[95vw] text-center'>
 
            <button className='bg-[#0CA4D5]     text-[1.4rem] p-3 me-2 rounded-[5px] text-[white] ps-6 pe-6 hover:bg-[#048AB6]'
            onClick={handleStart}
            >
            Start
            </button>

            <input type="text" className='bg-[#EFEFE0] w-[75%] text-[1.4rem] border border-[1px]-[black] p-3' onChange={(e) => setText(e.target.value)} value={text}/>

            <button className='bg-[#5CC102] text-[1.4rem] p-3 ms-2 rounded-[5px] text-[white] ps-6 pe-6 hover:bg-[#4FA503]' onClick={handleSubmit}>
                Send
            </button>
        </div>

    </div>
  )
}

export default Chat