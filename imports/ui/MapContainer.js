import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google = {this.props.google} zoom = {8}>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey : 'AIzaSyBmlSJGyprhqkW2ry1KEwTZGdzoFURGQ4A'
})(MapContainer)
