Template.s3_tester2.rendered = function () {

    // Delete's all from Agent List
    //Meteor.call('DeleteTestingLists', function(){});
    
}

Template.s3_tester2.events({
    'click button.upload': function() {
        var attachment_name = $("input[type='file']")[0].files[0].name;
        var files = $("input.file_bag")[0].files;
        console.log($("input[type='file']")[0].files);
        var templateNumber = 1;
        S3.upload(files,"/subfolder",function(e,r){
            var list_url = r.url;
            console.log(list_url);
            Session.set("list_url", list_url);
        });

        Meteor.setTimeout(function(){
            Papa.parse( Session.get("list_url"), {
                download: true,
                header: true,
                complete: function(results, file){
                    console.log(results.data);
                    console.log(results.data.length);
                    //whichList, email, name, company, emailType, department, companyType, city
                    for (var i=0; i<results.data.length; i++) {
                        Meteor.call('InsertListItem', results.data[i].email,results.data[i].name,results.data[i].company, 
                            results.data[i].emailType, results.data[i].department,results.data[i].companyType, results.data[i].city, function(e,r) {
                                if (r) {
                                    Session.set("UploadList", r);
                                }
                        });
                    }
                }
            });
        },900);
    }
});

Template.s3_tester2.helpers({
    "files": function(){
        return S3.collection.find();
    }
});

Template.admin.helpers({
    settings: function () {
        return {
            collection: Session.get("UploadList"),
            rowsPerPage: 25,
            showFilter: true,
            fields: [
                //{ key: 'Send', label: 'Send', tmpl: Template.checkboxTemplate },
                { key: 'Number', label: 'Number', sort: '-1', fn: function (value, object) {
                    var searchTerm = object.email,
                        index = -1,
                        myArray = Session.get("UploadList");
                    for(var i = 0, len = myArray.length; i < len; i++) {
                        if (myArray[i].email == searchTerm) {
                            var number = i+1;

                            return index = i+1;
                        }
                    }
                    $('#tracker'+number).val(object.Track);
                }},
                { key: '_id',         label: 'Id', tmpl: Template.idTemplate2},
                { key: 'name',        label: 'Name', tmpl: Template.nameTemplate2},
                { key: 'email',       label: 'Email', tmpl: Template.emailTemplate2},
                { key: 'company',     label: 'Company', tmpl: Template.companyTemplate2},
                { key: 'companyType', label: 'Company Type', tmpl: Template.companyTypeTemplate2},
                { key: 'emailType',   label: 'Type', tmpl: Template.emailTypeTemplate2},
                { key: 'Save', label: 'Save', tmpl: Template.saveTemplate2 },
                { key: 'Delete', label: 'Delete', tmpl: Template.deleteTemplate2 }
            ]
        }
    },
    'paid': function () {
        return Session.get('paid');
    },
    'uploadedList': function () {
        if (Session.get("UploadList").length > 0) {
            return true
        } else {
            return false;
        }
    },
    'userCount': function () {
        return Session.get('userCount');
    }
});

Template.admin.rendered = function () {
    Session.set('paid',true);
    Meteor.call('HasPaid', function (e,r){
        Session.set('paid', r)
    });

    Meteor.call('userCount', function (e,r) {
        if (r) {
            Session.set('userCount',r)
        }
    });

    Meteor.call('GetMasterAgentList', function (e, r) {
        Session.set("UploadList", r)
    });
    Meteor.setTimeout(function(){
        $('input:checkbox').prop("checked", true);

        var list = Session.get('UploadList');
        for (var i=1; i<= list.length; i++) {
            //console.log($('#tracker' + i));
            //console.log(list[i-1].Track);
            $('#tracker'+i).val(list[i-1].Track);
        }
    },500);
};

Template.admin.events({
    'click .reactive-table tr': function () {
        var details = this;
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
        Meteor.call('DeleteTestingLists', function (e,r){
            if (r) {
                Router.go('/loading');
                Meteor.setTimeout(function() {
                    Router.go('/list');
                }, 900);
            }
        });
    }
});

Template.promoCodes.events({
    'click #addPromoCode': function (e,t) {
        var code = $('#promoCode').val();
        Meteor.call('AddPromoCode', code, function(e,r) {
            if(e) {
                console.log(e);
            }
            if (r) {
                console.log(r);
            }
        });
    }
});

