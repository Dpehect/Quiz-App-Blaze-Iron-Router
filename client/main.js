import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.quiz.onCreated(function() {
  this.questions = new ReactiveVar([
    {
      text: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    }

  ]);

  this.correctAnswers = new ReactiveVar(0);
  this.wrongAnswers = new ReactiveVar(0);
});

Template.quiz.helpers({
  currentQuestion: function() {
    const questions = Template.instance().questions.get();
    const index = Session.get('currentQuestionIndex') || 0;
    return questions[index];
  },
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
    const currentQuestion = template.currentQuestion();

    if (selectedAnswer === currentQuestion.correctAnswer) {
      template.correctAnswers.set(template.correctAnswers.get() + 1);
    } else {
      template.wrongAnswers.set(template.wrongAnswers.get() + 1);
    }

    // Bir sonraki soruya geçmek için
    const nextIndex = Session.get('currentQuestionIndex') + 1;
    Session.set('currentQuestionIndex', nextIndex);
  }
});
