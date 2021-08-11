import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap';

export class Movie extends Component {
    render() {
        try {
            return (
                <div>
                    <h4 class="d-flex justify-content-center align-items-center h-100 mt-5 bg-info text-white">Movies List</h4>
                    <Row xs={3} md={4} lg={3}>
                        {(this.props.movieArr !== undefined) &&
                            this.props.movieArr.map(element => {
                                return (
                                    <div>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img
                                                variant="top"
                                                class="img-fluid"
                                                src={element.img}
                                                alt={element.title}
                                            />
                                            <Card.Body>
                                                <Card.Title>{element.title}</Card.Title>
                                               <div className="scroll"> <Card.Text>
                                                    {element.overview}
                                                </Card.Text>
                                                </div>
                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                <p>⭐️⭐️⭐️⭐️⭐️{element.avgVote} With {element.totalVote} Votes</p>
                                                <p>popularity: {element.pop}</p>
                                                <p>released_on: {element.released}</p>
                                            </Card.Body>
                                        </Card>
                                    </div>)

                            })}
                    </Row>
                </div>
            )
        }
        catch {
            return (
                <p>no Movies data for this city</p>
            )

        }
    }
}

export default Movie;