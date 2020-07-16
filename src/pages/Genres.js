import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Button, Row } from 'react-bootstrap'
import { Navigationbar, SigningUp, Footer, GenresDetail } from '../components'
import { Link, useHistory } from 'react-router-dom'
import Artist from './Artist'


const Genres = () => {
    let [genres, setGenres] = useState([])
    let [genre, setGenre] = useState(null)
    let history = useHistory()



    useEffect(() => {
        if (genres.length == 0) {
            axios.get("http://localhost:5000/genres").then((res) => {
                console.log("genres", res.data.data)
                setGenres(res.data.data)
            }, [])
        }

    }, []);

    return (
        <div>
            <Navigationbar />
            <div>
                <Row>

                    <Col md={4}>
                        {genres.map(element => <div style={{ margin: "5px" }}><h5><div onClick={() => setGenre(element)} style={{ color: "white" }}>{element.genre}</div></h5></div>)}
                    </Col>
                    <Col md={8}>
                        {genre ? <GenresDetail genre={genre} /> : <></>}

                    </Col>

                </Row>

            </div>

            <SigningUp />
            <Footer />
        </div>
    )
}

export default Genres
