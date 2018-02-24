import React, {Component} from 'react';
import {Map, InfoWindow, Marker} from 'google-maps-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';

class MapContainer extends Component {
  renderMarkers() {
    //Events.insert({ lat : 15, lng : 15 });
    console.log(this.props.events);
    return this.props.events.map((event) => (
      <Marker key = {event.lat * event.lng} position = {{lat : event.lat, lng : event.lng}}/>
    ));
  }

  render() {
    console.log("Rendered")
    return (
      <Map classname = "map" google = {this.props.google} zoom = {8}>
        <span style= {{display : 'none'}} ><Marker /></span>
        {this.props.isReady ? this.renderMarkers() : ''}
    </Map>
    );
  }


}

export default withTracker(() => {
  const subscription = Meteor.subscribe('events');
  return {
    isReady : subscription.ready(),
    events: subscription.ready() && Events.find({}).fetch()
  };
})(MapContainer);
