Template.settings.rendered = function () {
    Meteor.call('GetReminderEmails', function(e,r) {
        if (r) {
            Session.set('reminders', r);
        }
     });
};

Template.settings.events({
    'click #saveSettings': function (e,t) {
        var template = $('#template').val();
        var date = $('#date').val();
        Meteor.call('ReminderEmail', template, date, function (e,r) {
            if (e){
                console.log(e);
            } if (r) {
                swal({   title: "Cool",   text: "Reminder set!",   imageUrl: "img/camera.gif" });
            }
        });
        Meteor.setTimeout(function() {
            Meteor.call('GetReminderEmails', function(e,r) {
                if (r) {
                    Session.set('reminders', r);
                }
            });
        },400);
    }
});

Template.settings.helpers({
    reminders: function () {
        return Session.get('reminders');
    }
});



