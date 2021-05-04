import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="text-center">
                <img className = "img-logo" src="/bears-and-bulls.png" alt="logo" className="text-center"/>
                <h1>This application uses Alpha Vantage api to fetch information about stocks</h1>
            </div>
        )
      }
  }
export default Logo