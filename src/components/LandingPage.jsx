import React from 'react'
import Profile from './Profile'
import Main from './Main'
import Connection from './Connection'

import "./LandingPage.css"

const LandingPage = () => {
    
    return (
        <main id='main'>
            <Profile />
            <Main />
            <Connection />
        </main>

    )
}

export default LandingPage