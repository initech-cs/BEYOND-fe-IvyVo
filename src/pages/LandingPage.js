import React from 'react'
import {Navigationbar,SigningUp,Footer,ShopNow,Jumbotron} from '../components'
import '../App.css'

const LandingPage = () => {
    return (
        <div className="body">
            <div className="ivy">
            </div>
            
          
           <ShopNow/>
           <div className="lastpage" style={{backgroundColor:""}}>
               <div className="cucmauxanh"></div>
            <SigningUp/>

            <Footer/>


           </div>
           
        
          
        </div>
    )
}

export default LandingPage
