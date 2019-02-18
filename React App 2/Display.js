import React, {Component} from 'react';
import './MyApp.css';

class Display extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="meradiv">
        <p className="p"> Name : {this.props.name} </p>
        <p className="p"> Age : {this.props.age} </p>
        <p className="p"> Birthmonth : {this.props.birthmonth} </p>
      </div>
    )
  }
}

export default Display;
