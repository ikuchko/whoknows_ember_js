import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer(question) {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('question')
      }
      this.set('author', '');
      this.set('answer', '');
      this.sendAction('addAnswer', params);
    }
  }
});
