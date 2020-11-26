import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import StarWarsService from '../services/films-service'
import { Card } from 'react-bootstrap'

const starWarsService = new StarWarsService();

export default function People(){
    const [planetsPeople, setterPeople] = useState([])

    useLayoutEffect(() => {
        getPeople()
    }, [])

    const getPeople = async () =>  {
        const {results} = await starWarsService.getPeople();
        setterPeople(results)
    }
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>People Page</h2>
                        <p>See all Star Wars People</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            planetsPeople.map((item) =>
                                <Card style={{ width: '40rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Height: {item.height}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Mass: {item.mass}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Hair Color: {item.hair_color}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Skin Color: {item.skin_color}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Gravity: {item.gravity}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Eye Color: {item.eye_color}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Birth Year: {item.birth_year}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Gender: {item.gender}</Card.Subtitle>
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