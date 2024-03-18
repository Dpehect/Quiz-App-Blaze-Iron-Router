import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';



Template.quiz.onCreated(function() {
  this.correctAnswers = new ReactiveVar(0);
  this.wrongAnswers = new ReactiveVar(0);
});

Template.quiz.helpers({
  question: "What is the capital of France?",
  options: ["Paris", "London", "Berlin", "Rome"],
  correctAnswers: function() {
    return Template.instance().correctAnswers.get();
  },
  wrongAnswers: function() {
    return Template.instance().wrongAnswers.get();
  }
});

Template.quiz.events({
  'click #submit-btn': function(event, template) {
    const selectedAnswer = template.find('input[name=answer]:checked').value;
    
    if (selectedAnswer === "Paris") {
      template.correctAnswers.set(template.correctAnswers.get() + 1);
    } else {
      template.wrongAnswers.set(template.wrongAnswers.get() + 1);
    }
  }
});


