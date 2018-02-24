import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export const Events = new Mongo.Collection('events');

if(Meteor.isServer) {
  Meteor.publish('events', () =>
  {
      return Events.find({});
  });
}
