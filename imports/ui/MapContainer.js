import React, {Component} from 'react';
import {Map, InfoWindow, Marker} from 'google-maps-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';

class MapContainer extends Component {
  renderMarkers()
  {
    //Events.insert({ lat : 15, lng : 15 });
    if(this.props.events.length == 0)
    {
      return;
    }
    console.log(this.props.events);
    return this.props.events.map((event) => (
      <Marker key = {event.lat * event.lng} position = {{lat : event.lat, lng : event.lng}}/>
    ));
  }

  render() {
    return (
      <Map google = {this.props.google} zoom = {8}>
        <Marker position = {{lat: 29.7604, lng: -95.3698}}/>  
        {this.renderMarkers()}
    </Map>
    );
  }


}

export default withTracker(() => {
  Meteor.subscribe('events');
  return {
    events: Events.find({}).fetch()
  };
})(MapContainer);
