import Ember from 'ember';

export function answersAmount(params/*, hash*/) {
  var answers = params[0];
  var amount = answers.get('length');
  return Ember.String.htmlSafe('<span class="answers-amount">'+amount+'</span>');
}

export default Ember.Helper.helper(answersAmount);
