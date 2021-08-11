import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        try {
            return (
                <div>
                    <h4 class="d-flex justify-content-center align-items-center h-100 mt-5 bg-info text-white">Weather Info</h4>
                    <table class="table table-striped" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        {(this.props.weatherArr !== undefined) &&
                            this.props.weatherArr.map(element => {
                                return (
                                    <tr>
                                        <th scope="row"> </th>
                                        <td>{element.date}</td>
                                        <td>{element.description}</td>

                                    </tr>


                                )
                            }
                            )}

                    </table>
                 </div>
            )
        }
        catch {
            return (
                <p>no weather data for this city</p>
            )

        }
    }
}

export default Weather