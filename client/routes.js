import { Router } from 'meteor/iron:router';

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('quiz');
});
