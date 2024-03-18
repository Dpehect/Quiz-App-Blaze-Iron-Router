// /client/quiz.js

Template.quiz.onCreated(function() {
    this.currentQuestionIndex = new ReactiveVar(0);
    this.questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "John Steinbeck", "J.K. Rowling"],
        correctAnswer: "Harper Lee"
      }
    ];
  });
  
  Template.quiz.helpers({
    question() {
      const instance = Template.instance();
      const index = instance.currentQuestionIndex.get();
      return instance.questions[index];
    }
  });
  
  Template.quiz.events({
    'click #answerBtn'(event, instance) {
      const index = instance.currentQuestionIndex.get();
      const selectedOption = $('input[name=option]:checked').val();
      
      if (!selectedOption) {
        alert("Please select an option.");
        return;
      }
      
      if (selectedOption === instance.questions[index].correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is: " + instance.questions[index].correctAnswer);
      }
  
      if (index < instance.questions.length - 1) {
        instance.currentQuestionIndex.set(index + 1);
      } else {
        alert("Quiz Completed!");
        Router.go('/');
      }
    }
  });
  