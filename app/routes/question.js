import Ember from 'ember';

export default Ember.Route.extend({
  answers: [],

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    addAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
    },

    deleteQuestion(question) {
      var _this = this;
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
         return question.destroyRecord();
      }).then(function() {
        _this.transitionTo('index');
      });
    },
  }
});
