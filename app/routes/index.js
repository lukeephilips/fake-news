import Ember from 'ember';

export default Ember.Route.extend({
  didInsertElement () {
   Ember.$('.carousel').carousel();
  },
  model() {
    return this.store.findAll('article');
  }
});
