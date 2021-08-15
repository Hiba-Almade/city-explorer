import React, { Component } from 'react';
import City from './component/City';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button, FormControl, Nav } from 'react-bootstrap';
import Weather from './component/Weather';
import Movie from './component/Movie';


console.log(process.env.REACT_APP_API_KEY)
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
      weatherArr: [],
      movieArr: []
    }
  }

  getUserInputHandler = (e) => {
    this.setState({
      cityName: e.target.value
    })
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
        let weatherUrl = `https://city-explorer-301p2.herokuapp.com/weather?lat=${this.state.lat}&lon=${this.state.lon}`
        axios.get(weatherUrl).then(res => {
          console.log(res.data)
          this.setState({
            weatherArr: res.data

          })
          console.log(this.state.weatherArr)
        })

      }).then(() => {
        let city = this.state.cityName.split(',')[0]
        let movieUrl = `https://city-explorer-301p2.herokuapp.com/movies?cityname=${city}`
        axios.get(movieUrl).then(res => {
          console.log('movieback' + res.data)
          this.setState({
            movieArr: res.data

          })
          console.log(this.state.movieArr)

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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Ciry Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '80px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" onSubmit={(e) => this.submitHandler(e)}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => { this.getUserInputHandler(e) }}
              />
              <Button variant="outline-info" type="submit">Explore!</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <City cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon} img={this.state.img} handleRender={this.state.handleRender} errorMsg={this.state.errorMsg} />
        <Weather weatherArr={this.state.weatherArr} />
        <Movie movieArr={this.state.movieArr} />
      </div>
    )
  }
}

export default App


