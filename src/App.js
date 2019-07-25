import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


class App extends Component {

  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    wind:undefined,
    pressure:undefined,
    description:undefined,
    error:undefined,
    mainDescription:undefined,
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_key = "6fd4b6ace3ae65129fab947d120f1ae3";
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);  
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        wind:data.wind.speed,
        pressure:data.main.pressure,
        description:data.weather[0].description,
        mainDescription:data.weather[0].main,
        error:" ",
      }) 
    }else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        wind:undefined,
        pressure:undefined,
        description:undefined,
        mainDescription:undefined,
        error:"Please enter a value",
      }) 
    }
    
  }

  render() {
    return (
      <div className="fullcontent">
        <div className="wrapper">
          <Titles  
            mainDescription={this.state.mainDescription}
            temperature={this.state.temperature} city={this.state.city}
          />
          <div className="info">
            <div className="location">
              <Form getWeather={this.getWeather}/>
            </div>
            <div className="stats">
              {this.state.temperature &&
              <p>Statistics</p>
              }
              <Weather 
                temperature={this.state.temperature}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                wind = {this.state.wind}
                pressure = {this.state.pressure}
                description = {this.state.description}
                error = {this.state.error}
              />
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
