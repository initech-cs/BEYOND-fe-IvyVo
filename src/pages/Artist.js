import React, {useEffect, useState} from 'react' 
import axios from 'axios'
import {Navigationbar,SigningUp,Footer} from '../components'
import {useHistory } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"


const Artist = () => {
    let [artists, setArtists] = useState([])
    let history = useHistory()
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()
    // console.log("hahahhahaha")
    useEffect(() => {
        if (artists.length == 0) {
            axios.get("https://beyond-be.herokuapp.com/artists").then((res) => {
                console.log(res.data)
                setArtists(res.data.data)
                dispatch({type:"LOADED"})
            })
        }

    },[]);
    return (
        <div>
            
            <Navigationbar/>
            
            { loading ? <h1>Loading, please wait</h1> : 
            <div className="artistpage">
            {artists.map(element=> <div style={{margin:"5px"}}><h4><div onClick={()=>history.push({pathname:`/artists/${element.title}`})} style={{color:"white"}}>{element.title}</div></h4></div>)}
            </div>
           }
            
            <SigningUp/>
            <Footer/>
        </div>
    )
}

export default Artist
