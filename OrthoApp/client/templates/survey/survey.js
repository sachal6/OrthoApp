// TODO: move this somewhere global
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, callback);
    }
});

removeWelcome = function(){
    $('#welcomeli').removeClass('animated fadeIn');
    $('#welcomeDetailli').removeClass('animated fadeIn');
    $('#welcomeli').animateCss('fadeOut');
    $('#welcomeDetailli').animateCss('fadeOut', function(){
    BlazeLayout.render( 'layout', { navbar: 'login', main: 'survey', questionArea: 'verify' } ); 
});
}


Template.survey.rendered = function(){
    $('#welcomeli').animateCss('fadeIn');
    $('#welcomeDetailli').animateCss('fadeIn', removeWelcome);
}


