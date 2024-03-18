Router.configure({
    layoutTemplate: 'layout'
  });
  
  Router.route('/', {
    name: 'home',
    template: 'home'
  });
  
  Router.route('/quiz', {
    name: 'quiz',
    template: 'quiz'
  });
  