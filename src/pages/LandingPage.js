import React from 'react'
import {Navigationbar,SigningUp,Footer,ShopNow,Jumbotron} from '../components'

const LandingPage = () => {
    return (
        <div>
            <div className="ivy">
                <Navigationbar/>
                {/* <Jumbotron/> */}

            </div>
           
            <ShopNow/>
            <SigningUp/>
            <Footer/>
        </div>
    )
}

export default LandingPage
