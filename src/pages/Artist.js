import React from 'react' 
import {Navigationbar,SigningUp,Footer} from '../components'


const Artist = () => {
    return (
        <div>
            <Navigationbar/>

            <div className="artistpage">
            <h1>Artist page</h1>
            </div>
           
            <SigningUp/>
            <Footer/>
        </div>
    )
}

export default Artist
