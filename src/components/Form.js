import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <div className="inputHolder"><input type="text" name="city" placeholder="Enter city name" /></div>
      	
        <div className="inputHolder"><input type="text" name="country" placeholder="Enter country name" /></div>
      	<button className="btn">Get Weather</button>
      </form>
    );
  }
}

export default Form;