Template.verify.rendered = function(){
    $('#verifyform').animateCss('fadeIn');
}
// TODO: form submission will go here
Template.verify.events({
    'submit #verifyform'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log("did run");
    //TODO: Meteor.call verification routing, respond to callback
    BlazeLayout.render( 'layout', { navbar: 'login', main: 'survey', questionArea: 'loading' } ); 
  }
});
