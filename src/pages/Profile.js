import React, {useEffect} from 'react'
import {Navigationbar,SigningUp,Footer,ShopNow,Jumbotron} from '../components'
import axios from 'axios'
import {useSelector} from 'react-redux'


const Profile = () => {

    const user = useSelector(s=>s.user)
    console.log(user)
    return (
        <div>
            <Navigationbar/>
            <h1 style={{color:"white"}}>{user.user.name}</h1>
            <SigningUp/>
            <Footer/>
        </div>
    )
}

export default Profile
