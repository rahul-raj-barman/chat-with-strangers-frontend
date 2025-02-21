import React from 'react'
import styles from '../css/homepage.module.css'
import { NavLink } from 'react-router-dom'


function HomePage() {

    
  return (
    <div className={styles.cont}>
        
        <div className={styles.box}>
            <div className={styles.innerCont}>
                <div className={styles.first}>
                Connect with people around the world anonymously
                </div>

                <div className={styles.second}>
                Start a conversation, share your thoughts, or just enjoy a chat with someone new — no strings attached. Simply enter a nickname and begin your journey of unexpected and meaningful interactions!
                </div>
                
                <div className={styles.buttonCont}>

                <button>
                <NavLink to='/?chat=text'>Text Chat</NavLink>
                </button>
                
                <button>
                <NavLink to='/?chat=video'>Video Chat</NavLink>
                </button>

                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage