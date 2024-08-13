import React from 'react'

export default function Message(props) {
  return (
    <div className={`mt-2`}>
        <div className={`inline-block text-[1.2rem] me-2 ms-4 ${props.textColor}`}>Sender : {props.user ? "You" : "Friend"}</div>


        <div className='inline-block'>{props.msg}</div>
    </div>
  )
}
