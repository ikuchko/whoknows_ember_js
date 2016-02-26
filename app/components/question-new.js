import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        question: this.get('question')
      }
      this.set('authot', '');
      this.set('title', '');
      this.set('question', '');
      this.sendAction('save', params);
    },

    updateQuestion(model) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        question: this.get('question')
      }
      this.sendAction('updateQuestion', params, model);
    }
  }
});
