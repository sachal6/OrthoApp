exposed = FlowRouter.group({
});
exposed.route( '/', {
  action: function() {
    BlazeLayout.render( 'layout', { navbar: 'login', main: 'landing' } ); 
  },
  name: 'landing'
});

exposed.route( '/survey/:_id', {
  action: function() {
    BlazeLayout.render( 'layout', { navbar: 'login', main: 'survey', questionArea: 'surveywelcome' } ); 
  },
  name: 'survey'
});


protected = FlowRouter.group({
 triggersEnter: [ enterProtected ]
});

protected.route( '/dashboard/:_id', {   
  action: function() {
    BlazeLayout.render( 'layout', { navbar: 'login', main: 'dashboard' } ); 
  },
    name: 'dashboard'
});



// Deny access if not logged in
// Add the following coffeescript to client once we have a standalone login page
/*Accounts.onLogin ->
  redirect = Session.get ‘redirectAfterLogin’
  if redirect?
    unless redirect is '/login'
      FlowRouter.go redirect
*/
// this is the old way of doing this, we should use template side check to reduce latency
function enterProtected() {
  if(!Meteor.loggingIn() && !Meteor.userId()){
      route = FlowRouter.current();
      if(route.route.name != 'landing'){
          Session.set('redirectAfterLogin', route.path);
      }
      FlowRouter.go('landing');
  }   
}