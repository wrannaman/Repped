
Template.list.helpers({
    settings: function () {

        return {
            collection: Session.get("UploadedList"),
            rowsPerPage: 25,
            showFilter: true,
            fields: [
                { key: 'Number', label: 'Number', sort: '-1', fn: function (value, object) {
                    var searchTerm = object.email,
                        index = -1,
                        myArray = Session.get("UploadedList");
                    for(var i = 0, len = myArray.length; i < len; i++) {
                        if (myArray[i].email == searchTerm) {
                            var number = i+1;

                            return index = i+1;
                        }
                    }
                    //console.log($('#tracker'+number));
                    //console.log(object.Track);
                    $('#tracker'+number).val(object.Track);
                }},
                { key: 'Company', label: 'Company', tmpl: Template.companyTemplate},
                { key: 'Email', label: 'Email', tmpl: Template.emailTemplate},
                { key: 'masterId', label: 'masterId', hidden: true},
                { key: 'Name', label: 'Name', tmpl: Template.nameTemplate},
                { key: 'track', label: 'Track', tmpl:Template.trackTemplate},
                { key: 'Save', label: 'Save', tmpl: Template.saveTemplate },
                { key: 'Delete', label: 'Delete', tmpl: Template.deleteTemplate }
            ]
        }
    },
    'paid': function () {
        return Session.get('paid');
    }
});

Template.list.rendered = function () {
    //Session.set('paid',false);
    Meteor.call('HasPaid', function (e,r){
        if (e) {
            return e;
        } else {
            Session.set('paid', r);
        }
    });
    Meteor.call("WhichPlan", function (e,r) {
       if (r) {
           Session.set('WhichPlan',r);
       }
    });
    Meteor.call('GetList', function (e, r) {
        Session.set("UploadedList", r)
    });
};

Template.trackTemplate.helpers({
       'count': function () {
           var searchTerm = this.email,
               index = -1,
               myArray = Session.get("UploadedList");
               tracker = this.track;

           for (var i = 0, len = myArray.length; i < len; i++) {
               if (myArray[i].email == searchTerm) {
                   return index = i + 1;
               }
           }
       },
    'track': function () {
        var searchTerm = this.email,
                        index = -1,
                        myArray = Session.get("UploadedList"),
                        tracker = this.track;
                    for (var i = 0; i < myArray.length; i++) {
                        if (myArray[i].email == searchTerm) {
                            var number = i + 1;
                            var selector = "#tracker"+number;
                            var secondSelector = "tracker"+number;
                            Meteor.setTimeout(function() {
                                 $(selector).val(tracker);
                             },500);
                            //$(selector).val(tracker);
                           
                           // document.getElementById('tracker'+number).value = this.track;
                            //document.getElementById(secondSelector).value = this.track;
                           // $('tracker'+number).val(this.track);
                        }
                    }
        return this.track;
    }
});


Template.list.events({
    'click .reactive-table tr': function () {
        var details = this;
        Session.set('details', details);
        console.log('reactive table click');
        console.log(details);
    },
    'click #delete': function () {

        Meteor.setTimeout(function () {
            Meteor.call('deleteListItem', Session.get('details'), function (e,r) {
                if (e) {
                    console.log(e);
                }
                if (r) {
                    Session.set('UploadedList',r);
                }
            });
        },300);
    },
    'click #save': function (e,t) {
        Meteor.setTimeout(function(){
            console.log('This is what Im saving');
            var details = Session.get('details');
            var track = $(e.target)[0].parentNode.parentNode.childNodes[26].children[0].value;
            if (track == "") {
                track = "1";
            }
            details.track = track;
            var company = $(e.target)[0].parentNode.parentNode.childNodes[8].children[0].value;
            var email = $(e.target)[0].parentNode.parentNode.childNodes[13].children[0].value;
            var name = $(e.target)[0].parentNode.parentNode.childNodes[21].children[0].value;
            details.company = company;
            details.email = email;
            details.name = name;
            console.log(details);

            Meteor.call('UpdateThisUserList', details, function(e,r) {
                if (r) {
                    Notifications.success('Contact Updated', details.name + " was saved.");
                    Meteor.call('GetThisUserList', function (e, r) {
                        Session.set("UploadedList", r);
                    });
                }
            });
        },500);
    },
    'click #addNew': function (e,t) {
        if(Session.get('WhichPlan') == 1) {
            if (Session.get("UploadedList")[0].list.length > 99) {
                sweetAlert({
                    title: "Whoa Captain!",
                    text: "Your list has reached it's max size.",
                    type: 'error'
                });

            } else {
                e.preventDefault();
                var email = $('#newEmail').val();
                var name = $('#newName').val();
                var company = $('#newCompany').val();
                console.log(email,name,company);
                var object = {
                    Name: name,
                    Email: email,
                    Company: company,
                    Track: "1"
                };
                Meteor.call('addListItem', object, function (e,r) {
                    if (e) {
                        return e;
                    }
                    if (r) {
                        Router.go('/loading');
                        Meteor.setTimeout(function() {
                            Router.go('/list');
                        }, 300);
                    }
                });
            }
        }
        if(Session.get('WhichPlan') == 2) {
            if (Session.get("UploadedList")[0].list.length > 199) {
                sweetAlert({
                    title: "Whoa Captain!",
                    text: "Your list has reached it's max size.",
                    type: 'error'
                });

            } else {
                e.preventDefault();
                var email = $('#newEmail').val();
                var name = $('#newName').val();
                var company = $('#newCompany').val();
                console.log(email,name,company);
                var object = {
                    Name: name,
                    Email: email,
                    Company: company,
                    Track: "1"
                };
                Meteor.call('addListItem', object, function (e,r) {
                    if (e) {
                        return e
                    }
                    if (r) {
                        Router.go('/loading');
                        Meteor.setTimeout(function() {
                            Router.go('/list');
                        }, 100);
                    }
                });
            }
        }
        if(Session.get('WhichPlan') == 3) {
            if (Session.get("UploadedList")[0].list.length > 399) {
                sweetAlert({
                    title: "Whoa Captain!",
                    text: "Your list has reached it's max size.",
                    type: 'error'
                });

            } else {
                e.preventDefault();
                var email = $('#newEmail').val();
                var name = $('#newName').val();
                var company = $('#newCompany').val();
                console.log(email,name,company);
                var object = {
                    Name: name,
                    Email: email,
                    Company: company,
                    Track: "1"
                };
                Meteor.call('addListItem', object, function (e,r) {
                    if (e) {
                        return e
                    }
                    if (r) {
                        Router.go('/loading');
                        Meteor.setTimeout(function() {
                            Router.go('/list');
                        }, 100);
                    }
                });
            }
        }
    },
    'click #deleteList': function (e,t) {
        Meteor.call('deleteList', function (e,r){
            if (r) {
                Router.go('/loading');
                Meteor.setTimeout(function() {
                    Router.go('/list');
                }, 900);
            }
        });
    }
});
Template.list.destroyed = function () {
    console.log('list Destroyed');
    // Meteor.call('GetList', function (e, r) {
    //     Session.set("UploadedList", r)
    // });
};

Template.emailTemplate.helpers({
    'paidTrue': function () {
        return Session.get('paid');
    }
});