import React, { useEffect, useState } from 'react'

function Check() {

    const [text, setText] = useState("");

    console.log('new Promise')


    useEffect(() => {

        console.log("I am useEffect")
    })

  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    
    </div>
  )
}

export default Check