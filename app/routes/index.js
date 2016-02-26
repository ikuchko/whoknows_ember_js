import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      console.log(params)
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    }
  }
});
