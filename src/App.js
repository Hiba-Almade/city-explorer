import React, { Component } from 'react';
import City from './component/City';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "0.0",
      lon: "0.0",
      cityName: "",
      img: "",
      handleRender: false,
      errorMsg: false,
      weatherArr: []
    }
  }

  getUserInputHandler = (e) => {
    this.setState({
      cityName: e.target.value
    })
    console.log(this.state.cityName);
  }

  submitHandler = (e) => {
    e.preventDefault();
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.3bdf6b99a25ebd79aa8617d4d81d3da8&q=${this.state.cityName}&format=json`
    try {
      axios.get(url).then(res => {
        let data = res.data[0]
        this.setState({
          cityName: data.display_name,
          lat: data.lat,
          lon: data.lon,
          img: `https://maps.locationiq.com/v3/staticmap?key=pk.3bdf6b99a25ebd79aa8617d4d81d3da8&center=${data.lat},${data.lon}`,
          handleRender: true
        })
      }).then(() => {
        let cityName = this.state.cityName.split(',')[0]
        let weatherUrl = `http://localhost:3001/weather?cityname=${cityName}&lat=${this.state.lat}&lon=${this.state.lon}`
        axios.get(weatherUrl).then(res => {
          console.log(res.data)
          this.setState({
            weatherArr: res.data
        
          })
          console.log(this.state.weatherArr)
        })
      })

    } catch {
      this.setState({
        errorMsg: true
      })
    }
  }
  render() {
    return (
      <div>
        <h1 class="text-center text-primary">LocationIQ API</h1>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input type="text" onChange={(e) => { this.getUserInputHandler(e) }} placeholder="Search by City name" class="form-control col-6" />
          <input type="submit" value="Explore!" class="btn btn-primary btn-lg active mx-auto" />
        </form>
        <City cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon} img={this.state.img} handleRender={this.state.handleRender} errorMsg={this.state.errorMsg} />
      <Weather weatherArr={this.state.weatherArr} />
      </div>
    )
  }
}

export default App


