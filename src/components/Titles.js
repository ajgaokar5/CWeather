import React, { Component } from 'react';

class SubData extends Component {
  render() {
    return (
    		<div className="topbox">
      		{(this.props.temperature && this.props.mainDescription && this.props.city) ?
      			<div className="headings">
      				
					<h2>{this.props.city}</h2>
					<h1>{Math.round(this.props.temperature-273.15)+"°"}</h1>
					<h2>{this.props.mainDescription}</h2>
      			</div>

      			:

      			<div className="headings">
      				<h1>CWeather</h1>

      			</div>
      		}
      		</div>
    );
  }
}

export default SubData;