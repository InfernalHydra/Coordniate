import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export const Events = new Mongo.Collection('events');

if(Events.find({poi:{ $exists: true}}).fetch().length === 0) {
  Events.insert({poi : '', lat : 0, lng : 0});
}
Meteor.methods({
  'events.insert'(event) {
    Events.insert(event);
  }
});

if(Meteor.isServer) {
  Meteor.publish('events', () =>
  {
      return Events.find({});
  });
}
