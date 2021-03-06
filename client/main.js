if (Meteor.isServer) {
    Meteor.startup(function () {

        // code to run on server at startup
    });
}
if (Meteor.isClient) {
    Meteor.startup(function () {
        BlazeLayout.setRoot('body');
        toastr.options = {
            "positionClass": "toast-bottom-right",
        }
        Accounts.createUser({
            username: "test",
            email: "test@test.com",
            password: "password",
            profile: {
                name: "Test McTest"
            }
        }, function (error) {
            if (error) {
                toastr.error(error.reason);
            }
        });
    });
}