import React from 'react'
import {Navigationbar,SigningUp,Footer,ShopNow,Jumbotron} from '../components'

const LandingPage = () => {
    return (
        <div>
            <Navigationbar/>
        
            <Jumbotron/>
            <ShopNow/>
            <SigningUp/>
            <Footer/>
        </div>
    )
}

export default LandingPage
