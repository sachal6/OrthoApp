Template.login.events({
    'submit #login-form': function (event) {
        event.preventDefault();
        // Auto-encrypts password, logs user in if successful
        var emailVar = event.target.email.value;
        var passVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passVar, function (err) {
            if (Meteor.user()) {
                console.log("logged");
                FlowRouter.go('/dashboard/'+Meteor.userId());
                // replace with flowrouter.go
            } else {
                console.log(err.reason);
                toastr.error(err.reason);
            }
        });
    },

    'click #logout-button': function (event) {
        console.log("logging out");
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go(FlowRouter.path('landing'));
    }
});