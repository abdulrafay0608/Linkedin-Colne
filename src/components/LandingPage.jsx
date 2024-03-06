import React from 'react'
import Profile from './Profile'
import Main from './Main'
import Connection from './Connection'

const LandingPage = () => {
    
    return (
        <main style={{display:"flex", justifyContent:"center", gap:"25px" , margin:"75px 100px"}}>
            <Profile />
            <Main />
            <Connection />
        </main>

    )
}

export default LandingPage