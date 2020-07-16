import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import {Badge} from 'react-bootstrap'
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux"
import { Navigationbar, SigningUp, Footer } from '../components';

const ArtistDetail = (props) => {
    let [artists, setArtists] = useState([]);
    let history = useHistory()
    const loading = useSelector(state => state.app.loading)
    let { title } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "LOADING"})
        axios.get(`http://localhost:5000/artists/${title}`).then((res) => {
            console.log("single artist data is", res.data.data)
            setArtists(res.data.data)
            dispatch({type:"LOADED"})

        })
    }, [title]);

    if(loading) return <h1>sadasdsadsa</h1>
    return (
        <div>
            <Navigationbar/>
            <h1 style={{ color: "white" }}>{title}</h1>
            <img style={{width:"40rem"}}src={artists.pictureURL}/>
            <div>{artists.genres&&artists.genres.map(item=><Badge style={{margin:"5px"}} variant="light">{item.genre}</Badge>)}</div>
            <div>{artists.biography}</div>
            <div>{artists.city}</div>
            <button><Link to="/artists">Back to Artists</Link></button>
            <SigningUp/>
            <Footer/>

        </div>
    )
}

export default ArtistDetail
