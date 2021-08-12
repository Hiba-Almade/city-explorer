import React, { Component } from 'react'

export class City extends Component {
    render() {
        return (
            <div>
               
            {   this.props.handleRender === true &&
                <div class="card border-primary mx-auto" style={{ width: '45rem' }}>
                <div class="card-body">
                <h4 class="card-title text-center">{this.props.cityName}</h4>
                <p class="card-text text-center">Lat: {this.props.lat}</p>
                <p class="card-text text-center">Lon: {this.props.lon}</p>
                </div>
                <img src ={this.props.img} alt = 'map' class="card-img rounded mx-auto d-block" height = "400px"/>
                </div>
                
               || 
               
               this.props.handleRender === false &&
                   <div class="card border-primary mx-auto" style={{ width: '45rem' }}>
                   <div class="card-body">
                   <h4 class="card-title text-center">City Name</h4>
                   <p class="card-text text-center">Lat: </p>
                   <p class="card-text text-center">Lon: </p>
                   </div>
                   <img src ='https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg' alt = 'map' class="card-img rounded mx-auto d-block" height = "400px"/>
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
