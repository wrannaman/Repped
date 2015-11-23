Template.addToList.helpers({
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
                { key: '_id', label: 'Id', hidden: true},
                { key: 'name', label: 'Name'},
                { key: 'email', label: 'Email', tmpl: Template.emailTemplateImport},
                { key: 'emailType', label: 'Email Type'},
                { key: 'company', label: 'Company'},
                { key: 'companyType', label: 'Type'},
                { key: 'department', label: 'Department'},
                
                
                { key: 'city', label: 'City'},
            ]
        }
    },
    'paid': function () {
        return Session.get('paid');
    }
});

Template.addToList.rendered = function () {

    Session.set('paid',true);
    Meteor.call('HasPaid', function (e,r){
        Session.set('paid', r)
    });

    Meteor.call('GetMasterAgentList', function (e, r) {
        Session.set("UploadedList", r)
    });
    Meteor.setTimeout(function(){
        $('input:checkbox').prop("checked", false);

        var list = Session.get('UploadedList');
        for (var i=1; i<= list.length; i++) {
            //console.log($('#tracker' + i));
            //console.log(list[i-1].Track);
            $('#tracker'+i).val(list[i-1].Track);
        }


    },500);

   

    Meteor.call("WhichPlan", function (e,r) {
       if (r) {
           Session.set('WhichPlan',r);
       }
    });


};






Template.addToList.events({
    'click #backToList': function () {
        Router.go('/loading');
        Meteor.setTimeout(function(){
            Router.go('/list');
        },300);
    },
    'click .reactive-table tr': function () {
        var details = this;
        Meteor.call('GetThisUserListLength', function(e,r) {
            if (r) {
                    Session.set('listLength', r);
                }
        });
        var listLength = Session.get('listLength');
        if ( (Meteor.user().plan == '1' && listLength > 100) || (Meteor.user().plan == '2' && listLength > 200) || (Meteor.user().plan == '3' && listLength > 400)) {
            Notifications.error('Error', "Your list has reached it's max length, please upgrade or delete list items to add this contact",[options={'timeout': 500}]);
        } else {
            Meteor.call('AddToUserList', details, function(e,r) {
            if (r) {Notifications.success('Contact Added', details.name + " was added to your list.",[options={'timeout': 500}]);}
            });
        }
        // if (Meteor.user().plan == '2' && listLength > 200) {
        //     Notifications.error('Error', "Your list has reached it's max length, please upgrade or delete list items to add this contact",[options={'timeout': 500}]);
        // } else {
        //     Meteor.call('AddToUserList', details, function(e,r) {
        //     if (r) {Notifications.success('Contact Added', details.name + " was added to your list.",[options={'timeout': 500}]);}
        //     });
        // }
        // if (Meteor.user().plan == '3' && listLength > 300) {
        //     Notifications.error('Error', "Your list has reached it's max length, please upgrade or delete list items to add this contact",[options={'timeout': 500}]);
        // } else {
        //     Meteor.call('AddToUserList', details, function(e,r) {
        //     if (r) {Notifications.success('Contact Added', details.name + " was added to your list.",[options={'timeout': 500}]);}
        //     });
        // }


        
        console.log(details);
        Session.set('details', details);
    },
    'click #delete': function () {

        Meteor.setTimeout(function () {
            Meteor.call('deleteListItem', Session.get('details'), function (e,r) {
                if (e) {
                    console.log(e);
                }
                if (r) {
                    Router.go('/loading');
                    Meteor.setTimeout(function() {
                        Router.go('/list');
                    }, 200);


                }
            });
        },300);
    },
    'click #save': function (e,t) {

        var saveRow = $(e.target)[0].parentNode.parentNode.childNodes[3].innerHTML;
        var details = Session.get("UploadedList")[0].list[Number(saveRow)];
        var company = $(e.target)[0].parentNode.parentNode.childNodes[8].children[0].value;
        var email = $(e.target)[0].parentNode.parentNode.childNodes[13].children[0].value;
        var name = $(e.target)[0].parentNode.parentNode.childNodes[18].children[0].value;
        var track = $(e.target)[0].parentNode.parentNode.childNodes[23].children[0].value;
        console.log("********");
        console.log(saveRow,details,company,email,name,track);

        var object = {
            Company: company,
            Name: name,
            Email: email,
            Track: track
        };
        Session.set('object',object);

        console.log(object);


        Meteor.setTimeout(function(){
            Meteor.call('deleteListItem', Session.get('details'), function (e,r) {
                if (e) {
                    console.log(e);
                }
                if (r) {
                    console.log(r);
                }
            });
            Meteor.call('addListItem', Session.get('object'), function (e,r) {
                if (e) {
                    console.log(e);
                }
                if (r) {
                    Router.go('/loading');
                    Meteor.setTimeout(function() {
                        Router.go('/list');
                    }, 200);
                }
            });
        },300);
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

Template.addToList.destroyed = function () {
    console.log('list Destroyed');
    Meteor.call('GetList', function (e, r) {
        Session.set("UploadedList", r)
    });
};
