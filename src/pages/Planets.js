import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import StarWarsService from '../services/films-service'
import { Card } from 'react-bootstrap'

const starWarsService = new StarWarsService();

export default function Planets(){
    const [planetsList, setterPlanets] = useState([])

    useLayoutEffect(() => {
        getPlanets()
    }, [])

    const getPlanets = async () =>  {
        const {results} = await starWarsService.getPlanets();
        setterPlanets(results)
    }
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Planets Page</h2>
                        <p>See all Star Wars Planets</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            planetsList.map((item) =>
                                <Card style={{ width: '40rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Rotation Period: {item.rotation_period}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Orbital Period: {item.orbital_period}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Diameter: {item.diameter}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Climate: {item.climate}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Gravity: {item.gravity}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Terrain: {item.terrain}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Surface Water: {item.surface_water}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Population: {item.population}</Card.Subtitle>
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