import Ember from 'ember';

export default Ember.Component.extend({
  isUpdateShowing: false,

  actions: {
    showUpdateFrom: function() {
      this.set('isUpdateShowing', true);
    },

    updateQuestion(params, question) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.set('isUpdateShowing', false);
    }
  }
});
