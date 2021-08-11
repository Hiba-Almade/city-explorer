import React, { Component } from 'react'

export class Weather extends Component {
    render() {
       try{
           return (
        <div>
            {(this.props.weatherArr !== undefined) && 
            this.props.weatherArr.map(element => {
              return (<div>
                  <p>{element.date}</p>
                  <p>{element.description}</p>
                  <p>__________</p>
              </div>)
              
            })}
        </div>
    )}
    catch{
        return (
            <p>no weather data for this city</p>
        )

    }
    }
}

export default Weather
