import React, {Component} from 'react'
import MapContainer from './MapContainer.js'
import {GoogleApiWrapper} from 'google-maps-react';

class App extends Component
{
  render() {
    return (
      <MapContainer google = {this.props.google}/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmlSJGyprhqkW2ry1KEwTZGdzoFURGQ4A',
})(App)
