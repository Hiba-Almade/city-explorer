import React, { Component } from 'react'

export class City extends Component {
    render() {
        return (
            <div>
               
             {   this.props.handleRender&&
                <div class="card border-primary mx-auto" style={{ width: '60rem' }}>
                <div class="card-body">
                <h4 class="card-title text-center">{this.props.cityName}</h4>
                <p class="card-text text-center">{this.props.lat}</p>
                <p class="card-text text-center">{this.props.lon}</p>
                </div>
                <img src ={this.props.img} alt = 'map' class="card-img rounded mx-auto d-block" width = "400px" height = "500px"/>
                {this.props.weatherArr.forEach(element => {
                  <div>
                      <h4>THE WEATHER</h4>
                      <p>{element.date}</p>
                      <p>{element.description}</p>
                      <p>__________</p>
                  </div>
                  
                })}
                </div>
                }

                {this.props.errorMsg && 
                <h3 class="border border-danger text-danger text-center">Something Rong</h3>
                }

            </div>
        )
    }
}

export default City
