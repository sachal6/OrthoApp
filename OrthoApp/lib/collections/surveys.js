Surveys = new Mongo.Collection("Surveys");
// Should use SimpleSchema to enforce schema
Reservations = new Mongo.Collection("Reservations");
SimpleSchema.messages({
    "resStartInvalid": "Start must be before end!",
    "inPast": "Start time must be in the future!"
});


