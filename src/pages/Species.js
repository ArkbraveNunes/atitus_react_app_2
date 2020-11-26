import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import StarWarsService from '../services/films-service'
import { Card } from 'react-bootstrap'

const starWarsService = new StarWarsService();

export default function Starships(){
    const [starShipsList, setterStarships] = useState([])

    useLayoutEffect(() => {
        getStarships()
    }, [])

    const getStarships = async () =>  {
        const {results} = await starWarsService.getSpecies();
        setterStarships(results)
    }
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Species Page</h2>
                        <p>See all Star Wars Species</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            starShipsList.map((item) =>
                                <Card style={{ width: '40rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Classification: {item.classification}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Designation: {item.designation}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Average Height: {item.average_height}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Skin Colors: {item.skin_colors}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Hair Colors: {item.hair_colors}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Eye Colors: {item.eye_colors}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Average Lifespan: {item.average_lifespan}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Language: {item.language}</Card.Subtitle>
                                        <Card.Text>{item.opening_crawl}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}