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
        const {results} = await starWarsService.getStarships();
        setterStarships(results)
    }
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Starships Page</h2>
                        <p>See all Star Wars Starships</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            starShipsList.map((item) =>
                                <Card style={{ width: '40rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Model: {item.model}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Manufacturer: {item.manufacturer}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Cost in Credits: {item.cost_in_credits}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Length: {item.length}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Max Atmosphering Speed: {item.max_atmosphering_speed}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Crew: {item.crew}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Passengers: {item.passengers}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Cargo Capacity: {item.cargo_capacity}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Consumables: {item.consumables}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Starship Class: {item.starship_class}</Card.Subtitle>
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