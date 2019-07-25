import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="statsboxbox">
        {this.props.temperature &&
          <div className="statsbox">
            <div className="statkey">temperature</div>
            <div className="statvalue">{this.props.temperature + " K"}</div>
          </div>
        }
        {this.props.wind &&
          <div className="statsbox">
            <div className="statkey">Wind</div>
            <div className="statvalue">{this.props.wind + " Km/hr"}</div>
          </div>
        }
        {this.props.humidity &&
          <div className="statsbox">
            <div className="statkey">Humidity</div>
            <div className="statvalue">{this.props.humidity + "%"}</div>
          </div>
        }
        {this.props.pressure &&
          <div className="statsbox">
            <div className="statkey">Pressure</div>
            <div className="statvalue">{this.props.pressure + " mb"}</div>
          </div>
        }
        {this.props.description &&
          <div className="statsbox">
            <div className="statkey">Condition</div>
            <div className="statvalue">{this.props.description}</div>
          </div>
        }
        {this.props.error &&
          <div className="statsbox">
            <div className="statvalue">{this.props.error}</div>
          </div>
        }
      </div>
    );
  }
}

export default Weather;