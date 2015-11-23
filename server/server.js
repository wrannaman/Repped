//*****************************  CONFIG   *********************************************
S3.config = {
    key: '',
    secret:
    bucket: 'trottr2'
};

ServiceConfiguration.configurations.remove({
    service: "facebook"
});
ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "",
    secret: ""
});

// pretty emails start
PrettyEmail.options = function () {
    return {
      from: 'andrewpierno@gmail.com',
      logoUrl: '/img/repped.png',
      companyName: 'Repped',
      companyUrl: 'http://repped.co',
      companyAddress: 'California',
      companyTelephone: '',
      companyEmail: 'andrewpierno@gmail.com',
      siteName: 'Repped'
    };
};

// PrettyEmail.style = function () {
//     return {
//         fontFamily: 'Raleway',
//           textColor: '#606060',
//           buttonColor: '#FFFFFF',
//           buttonBgColor: '#e74c3c'
//     }
// }


// PrettyEmail.defaults.verifyEmail = function () {
//     return {
//       buttonText: "Let's Get Repped!",
//       message: "Click on the button below to activate your account!"
//     }
// }


//pretty emails end

//emails

Accounts.emailTemplates.from = "Repped <andrewpierno@gmail.com>";
Accounts.emailTemplates.verifyEmail.subject = function () {
    return "Welcome To Repped " + Meteor.user().firstName;
}
Accounts.emailTemplates.verifyEmail.html = function(user, verifyEmailUrl) {
  return PrettyEmail.render('call-to-action', {
    subject: Accounts.emailTemplates.verifyEmail.subject(user),
    heading: 'Just one more step...',
    message: 'Click on the button below to activate your account',
    buttonText: "Let's Get Repped!",
    buttonUrl: verifyEmailUrl
  });
};

// end emails

var Sendgrid = Meteor.npmRequire('sendgrid');
var sendgrid = new Sendgrid('repped', '');

var Stripe = StripeAPI('');


var Future = Npm.require('fibers/future');
var fut = new Future();
var fut2 = new Future();
var fut3 = new Future();
var fut4 = new Future();
var fut5 = new Future();
var fut6 = new Future();


//***************************** ! CONFIG   *********************************************

//*****************************  Pub Sub   *********************************************



//***************************** Pub Sub   *********************************************

Accounts.onCreateUser(function(options,user) {
    var role = 'free';
    user.roles = role;
    console.log(options);
    console.log(user);
    return user;
});

Meteor.users.allow({
    'update': function (userId, doc){
        return userId === Meteor.userId();
    }
});
Meteor.publish(null, function (){
    return Meteor.users.find({});
});

SyncedCron.add({
    name: 'Send Reminder Emails',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('at 7:00 pm');
    },
    job: function() {
        sendReminderEmail();
        return 'Email Sent';
    }
});

var sendReminderEmail = function () {
    var users = Meteor.users.find().fetch();
    var day = moment().date();
    var month = moment().month() + 1;
    var year = moment().year();
    var dateConstruct = year+ '-'+ month + '-' + day;
    // loop through each user
    for (var i=0; i< users.length; i++) {
        // loop through each reminder to check date. if date match, set up email and send it
        var reminders = Reminders.find({user_id: users[i]._id}).fetch();
        for (var j=0; j< reminders.length; j++) {
            if (reminders[j].reminderDate == dateConstruct) {
                console.log('match!!!!');
                var email = new sendgrid.Email();
                var nameArray = users[i].name.split(" ");
                var firstName = nameArray[0];
                var template = reminders[j].template;
                var html = '<div class="container"><div style="text-align:center"><h2> Hey ' + firstName + ',</h2> <p> Just wanted to remind you to log in and send Template ' + template + '.<br> Best of luck getting Repped! <br> Andrew</p>';
                email.setFrom("andrewpierno@gmail.com");
                email.to =  users[i].email;
                email.setSubject("Repped | Reminder to send Template " + template);
                email.setHtml(html);
                sendgrid.send(email, function (err, json) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(json);
                });
                console.log(email);
            }
        }
    }
};

SyncedCron.start();

Meteor.methods({
    AddFbInfo: function(id, fbEmail, fbName, fbFirstName, fbLastName, fbLink) {
        Meteor.users.update({_id:id}, {$set: {'emails': [{'address': fbEmail, 'verified': true}] } });
        Meteor.users.update({_id:id}, {$set: {"email": fbEmail}});
        Meteor.users.update({_id:id}, {$set: {"about_me": ""}});
        Meteor.users.update({_id:id}, {$set: {"name": fbName}});
        Meteor.users.update({_id:id}, {$set: {"first_name": fbFirstName}});
        Meteor.users.update({_id:id}, {$set: {"last_name": fbLastName}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate1": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate2": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate3": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate4": false}});
        Meteor.users.update({_id:id}, {$set: {"newUser": true}});

        Meteor.users.update({_id:id}, {$set: {"paid": false}});
        // Add profile picture from faebook graph api upon registering with facebook.
        //https://graph.facebook.com/592771998/picture?type=large
        var fbPic = "https://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture?type=large";
        Meteor.users.update({_id:id}, {$set: {"pic": fbPic}});
        return true;

        // console.log(id+fbEmail+fbName+fbFirstName+fbLastName+fbLink);
        //Email.send({
        //    from: "andrew@trottr.us",
        //    to: "andrewpierno@gmail.com",
        //    subject: "New Walker Applicant",
        //    text: "Name" + user
        //});
        //console.log("messageSent");
    },
    AddProfile: function (firstName, lastName) {
        console.log(firstName, lastName);
        var id = Meteor.userId();
        Meteor.users.update({_id:id}, {$set: {"firstName": firstName}});
        Meteor.users.update({_id:id}, {$set: {"name": firstName + " " + lastName}});
        Meteor.users.update({_id:id}, {$set: {"lastName": lastName}});
        Meteor.users.update({_id:id}, {$set: {"role": 'free'}});
        Meteor.users.update({_id:id}, {$set: {"paid": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate1": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate2": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate3": false}});
        Meteor.users.update({_id:id}, {$set: {"sentTemplate4": false}});
        Meteor.users.update({_id:id}, {$set: {"newUser": true}});

        var email= Meteor.user().emails[0].address;
        Meteor.users.update({_id:id}, {$set: {"email": email}});
        console.log("Client Profile was updated");
        Accounts.sendVerificationEmail(Meteor.userId());

        var addToList = new MailChimp('', {version : '2.0'});
        addToList.call('lists','subscribe',{
            'apikey': '-us10',
            'id': '',
            'email': {
                'email': email
            }
        }, function (e,r) {
            if (e) {
                console.log(e);
            }
            if (r) {
                console.log(r);
            }

        });


        return true;
    },
    SendEmail: function (subject, message, templateNumber) {

        //console.log(subject, message, templateNumber);

        var user_id = Meteor.userId();
        var list = UserList.find({user_id: user_id}).fetch();
        var sentTemplate = sentTemplate + templateNumber;
        var counter = 0;
        console.log(list.length);
        // Track is the 'No Response' from the list.
        for (var i = 0; i < list.length; i++) {
                var email = new sendgrid.Email();
                if (list[i].track == null || list[i].track == "1") {
                    //email.addTo(list[0].list[i].Email);
                    //console.log(list[0].list[i].Email);
                    email.to = list[i].email;
                }
                email.setFrom(Meteor.user().email);
                email.replyto = Meteor.user().email;

                email.setSubject(subject);

                var firstName = list[i].name.split(" ")[0];

                var companyReplace = message.replace("{{Company}}", list[i].company).replace("{{Company}}", list[i].company).replace("{{Company}}", list[i].company).replace("{{Company}}", list[i].company).replace("{{Company}}", list[i].company);
                var nameReplace = companyReplace.replace("{{Name}}",list[i].name).replace("{{Name}}",list[i].name).replace("{{Name}}",list[i].name).replace("{{Name}}",list[i].name).replace("{{Name}}",list[i].name)
                var firstNameReplace = companyReplace.replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName);

                email.setHtml(firstNameReplace);

                var numAttachments = Attachments.find({user_id: Meteor.userId()}).fetch().length;
                var attachments = Attachments.find({user_id: Meteor.userId()}).fetch();
                console.log("**********Attachments****************");
                console.log(attachments);
                console.log("**********Attachments****************");
                for (var t = 0; t < numAttachments; t++) {
                    email.addFile({
                        filename: attachments[t].attachment_name,
                        url: attachments[t].attachment_url
                    });
                }
                sendgrid.send(email, function (err, json) {
                    if (err) {
                        console.error(err);
                    }
                    if (json) {
                        console.log(json.message);

                    }
                });
                //console.log(email);

        } // end for loop

        if (templateNumber == 1) {
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate1": true}});
        }
        if (templateNumber == 2) {
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate2": true}});
        }
        if (templateNumber == 3) {
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate3": true}});
        }
        if (templateNumber == 4) {
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate4": true}});
        }
        // for each email. replace all html

       return list.length;
    },
    SendEmailToSelf: function (subject, message, templateNumber) {
        var user_id = Meteor.userId();

        var email = new sendgrid.Email();
        var name = Meteor.user().name;
        var firstName = name.split(" ")[0];
        email.to = Meteor.user().email;
        email.setFrom(Meteor.user().email);
        email.replyto = Meteor.user().email;
        email.setSubject(subject);
        var companyReplace = message.replace("{{Company}}", name).replace("{{Company}}", name).replace("{{Company}}", name).replace("{{Company}}", name).replace("{{Company}}", name);
        var nameReplace = companyReplace.replace("{{Name}}",name).replace("{{Name}}",name).replace("{{Name}}",name).replace("{{Name}}",name).replace("{{Name}}",name);
        var firstNameReplace = companyReplace.replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName).replace("{{FirstName}}",firstName);
        email.setHtml(firstNameReplace);
        var numAttachments = Attachments.find({$and: [{user_id: user_id}, {templateNumber: 1}]}).fetch().length;
        var attachments = Attachments.find({$and: [{user_id: user_id}, {templateNumber: 1}]}).fetch();

        console.log("**********Attachments****************");
        console.log(attachments);
        console.log("**********Attachments****************");

        for (var t = 0; t < numAttachments; t++) {
            email.addFile({
                filename: attachments[t].attachment_name,
                url: attachments[t].attachment_url
            });
        }

        Meteor.setTimeout(function () {
            sendgrid.send(email, function (err, json) {
                if (err) {
                    console.error(err);
                }
                if (json) {
                    console.log(json);
                    console.log(json.message);
                    fut5['return'](json.message);
                }
            });
            console.log(email);
        },1000);

            return fut5.wait();
    },
    ReturnTestEmailResults: function (e,r) {
        if (r) {
            return r;
        } else {
            return e;
        }

    },
    ReminderEmail: function (template, date) {
        console.log(template);
        console.log(date);
        var day = moment(date, 'YYYY-MM-DD').date();
        var month = moment(date, 'YYYY-MM-DD').month() + 1;
        var year = moment(date, 'YYYY-MM-DD').year();
        console.log(year+ '-'+ month + '-' + day);
        var user_id = Meteor.userId();
        Reminders.insert({user_id: user_id, template: template, reminderDate: year+ '-'+ month + '-' + day});
        return true;
    },
    GetReminderEmails: function() {
        var user_id = Meteor.userId();
        return Reminders.find({user_id: user_id}).fetch();
    },
    AddAttachment: function (attachment_name, attachment_url, pdf, templateNumber) {
        //temp user id
        console.log('called');
        var user_id = Meteor.userId();
        if (pdf) {
            var html =' <iframe width="150"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + attachment_url + '"></iframe>'
        } else {
            html = '<img src="' + attachment_url + '" style="width:150px;">'
        }
        var id = Attachments.insert({user_id: user_id, html: html, attachment_name: attachment_name, attachment_url: attachment_url, pdf: pdf, templateNumber:templateNumber});
        return  Attachments.find({$and: [ {templateNumber: templateNumber}, {user_id: user_id} ]}).fetch();
    },
    GetAttachments: function (templateNumber) {
        var user_id = Meteor.userId();
        return Attachments.find({$and: [ {templateNumber: templateNumber}, {user_id: user_id} ]}).fetch();
    },
    RemoveAttachment: function (_id) {
        return Attachments.remove({_id:_id});
    },
    userCount: function () {
        return Meteor.users.find().count();
    },
    SaveNewEmailTemplate: function (templateNumber, subject, messageClean) {

        console.log(templateNumber, subject, messageClean);

        var user_id = Meteor.userId();
        return Emails.insert({user_id: user_id, templateNumber: templateNumber, subject:subject, message:messageClean});
    },
    UpdateEmailTemplate: function (id, templateNumber, subject, messageClean) {

        console.log(id, templateNumber, subject, messageClean);

        var user_id = Meteor.userId();
        Emails.update({_id: id}, {templateNumber: templateNumber, subject:subject, message:messageClean, user_id: user_id});
        return Emails.find({_id: id}).fetch();
    },
    GetHTML: function (templateNumber) {
        var user_id = Meteor.userId();
        if (Emails.find({$and: [{templateNumber: templateNumber}, {user_id: user_id}]}).fetch() == []) {
            return {
                message: " ",
                subject: " "
            }
        } else {
            return Emails.find({$and: [{templateNumber: templateNumber}, {user_id: user_id}]}).fetch();
        }
    },
    CreatedTemplate: function (templateNumber) {
        if (Emails.find({$and: [{templateNumber: templateNumber}, {user_id: Meteor.userId()}]}).fetch() == "" ) {
            return false // they don't have this template, set html to zero.
        } else {
            return true // they have this template, grab it.
        }
    },
    WhichPlan: function () {
      return Meteor.user().plan;
    },
    WhichTemplates: function () {
        var Template1 = true, Template2 = true, Template3 = true, Template4 = true, user_id = Meteor.userId();
        if (Emails.find({$and: [{templateNumber: 1}, {user_id: user_id}]}).fetch() == false)  {
             Template1 = false
        }
        if (Emails.find({$and: [{templateNumber: 2}, {user_id: user_id}]}).fetch() == false)  {
            Template2 = false
        }
        if (Emails.find({$and: [{templateNumber: 3}, {user_id: user_id}]}).fetch() == false)  {
            Template3 = false
        }
        if (Emails.find({$and: [{templateNumber: 4}, {user_id: user_id}]}).fetch() == false)  {
            Template4 = false
        }
        return [Template1, Template2, Template3, Template4];
    },
    HasSentWhichTemplates: function () {
        var tmpl1 = Meteor.user().sentTemplate1;
        var tmpl2 = Meteor.user().sentTemplate2;
        var tmpl3 = Meteor.user().sentTemplate3;
        var tmpl4 = Meteor.user().sentTemplate4;
        return [tmpl1,tmpl2,tmpl3,tmpl4];
    },
    UploadedList: function (data) {
        var user_id = Meteor.userId();
        console.log(data);
        // if (Meteor.user().plan == 1) {
        //     data.splice(100,100000);
        // }
        // if (Meteor.user().plan == 2) {
        //     data.splice(200,100000);
        // }
        // if (Meteor.user().plan == 3) {
        //     data.splice(400,100000);
        // }

        //List.insert({user_id: user_id, list: data});
        //return List.find({user_id: user_id}).fetch();
    },
    InsertListItem: function (email, name, company, emailType, department, companyType, city) {
            AgentMasterList.insert({email: email, name: name, company: company, emailType:emailType, department:department, companyType:companyType, city:city });
            return AgentMasterList.find().fetch();
    },

    // TEST, DELETE THIS
    DeleteTestingLists: function () {
        var length = AgentMasterList.find().fetch().length
        for(var i=0; i<length; i++) {
            AgentMasterList.remove(AgentMasterList.find().fetch()[i]._id);
            console.log(length);
        }
    },
    // TEST, DELETE THIS
    GetThisUserList: function () {
        return UserList.find({user_id:Meteor.userId()}).fetch();
    },
    'GetThisUserListLength': function() {
        return UserList.find({user_id:Meteor.userId()}).fetch().length;
    },
    UpdateThisUserList: function (details) {
        return UserList.update({_id: details._id}, {user_id: Meteor.userId(), track: details.track, masterId:details._id, email: details.email, name: details.name, company: details.company, emailType:details.emailType, department:details.department, companyType:details.companyType, city:details.city });
    },
    GetMasterAgentList: function () {
        if (AgentMasterList.find().fetch() == []) {
            return [];
        } else {
            return AgentMasterList.find().fetch();
        }
    },
    AddToUserList: function(details) {
        UserList.insert({user_id: Meteor.userId(), track: "1", masterId:details.masterId, email: details.email, name: details.name, company: details.company, emailType:details.emailType, department:details.department, companyType:details.companyType, city:details.city });
            return true;
    },
    GetList: function () {
        var user_id = Meteor.userId();
        return UserList.find({user_id: user_id}).fetch();
    },
    deleteListItem: function (details) {
        console.log('deleting');
        console.log(details._id);
        UserList.remove({ _id: details._id});
        return UserList.find({user_id:Meteor.userId()}).fetch();
    },
    addListItem: function (details) {
        var user_id = Meteor.userId();
        var email = details.Email;
        var name = details.Name;
        var company = details.Company;
        var track = details.Track;
        var increment = 0;

        console.log(email, name, company);

        List.update( { "user_id" : user_id } , { $push:  { 'list': { 'Email': email, 'Name': name, 'Company': company, 'Track': track } } }) ;


        // send email to andrewpierno@gmail.com to add to master list
        var emailToSend = new sendgrid.Email();
        var emailBody = "Name: " + name + " Company: " + company + " Email: " + email;
        emailToSend.to = "andrewpierno@gmail.com";
        emailToSend.setFrom("andrewpierno@gmail.com");
        emailToSend.setSubject("Repped Master List Addition");
        emailToSend.setHtml(emailBody);
        sendgrid.send(emailToSend, function (err, json) {
            if (err) {
                return console.error(err);
            }
            console.log(json);
        });

        return List.find({user_id: user_id}).fetch();

    },
    CreateStripeCustomer: function (ccNum, ccExpYr, ccExpMo, ccCvc) {
        Stripe.customers.create({ card: { "number": ccNum, "exp_month": ccExpMo, "exp_year": ccExpYr, "cvc": ccCvc }, description: 'client for Repped'}, function(err, customer) {
            if (err) {
                console.log(err);
                return err;
            }
            if (customer) {
                fut2['return'](customer);
            }
            console.log(customer);
        });
        return fut2.wait();
    },
    CreateStripeToken: function (ccNum, ccExpYr, ccExpMo, ccCvc) {
        Stripe.tokens.create({ card: { "number": ccNum, "exp_month": ccExpMo, "exp_year": ccExpYr, "cvc": ccCvc }}, function(err, token) {
            if (err) {
                console.log(err);
                return err;
            }
            if (token) {
                fut3['return'](token);
            }
            console.log(token);
        });
        return fut3.wait();
    },
    ChargeCustomer: function (stripe_customer, stripe_card, plan) {
        Meteor.users.update({_id: Meteor.userId()}, {$set: {stripe_customer: stripe_customer, stripe_card: stripe_card}});
        if (plan == "1") {
            var amount = 250
        }
        if (plan == "2") {
            amount = 350
        }
        if (plan == "3") {
            amount = 500
        }
        Stripe.charges.create({amount: amount, currency: 'usd', card: stripe_customer, receipt_email: Meteor.user().email, description: 'Repped plan ' + plan }, function(err, charge) {
            if (err) {
                console.log(err);
                return err;
            }
            if (charge) {
                fut['return'](charge);
            }
            console.log(charge);
        });
        return fut.wait();
    },
    ChargeToken: function (token, plan) {
        if (plan == "1") {
            var amount = 2500
        }
        if (plan == "2") {
            amount = 3500
        }
        if (plan == "3") {
            amount = 5000
        }
        Stripe.charges.create({amount: amount, currency: 'usd', card: token, receipt_email: Meteor.user().email, description: 'Repped plan ' + plan }, function(err, charge) {
            if (err) {
                console.log(err);
                return err;
            }
            if (charge) {
                fut4['return'](charge);
            }
            console.log(charge);
        });
        return fut4.wait();
    },
    'Paid': function (plan) {
        Meteor.users.update({_id: Meteor.userId()}, {$set: {paid: true, plan: plan}});
        return true;
    },
    'HasPaid': function () {
        return Meteor.user().paid;
    },
    'deleteList': function () {
        List.remove({user_id: Meteor.userId()});
        return true;
    },
    'PromoCode': function (code) {
        // if (code === "KahnFree") {
        //     Meteor.users.update({_id: Meteor.userId()}, {$set: {paid: true, plan: 1}});
        //     return true
        // } else {
            return false
       // }
    },
    'ResetUserAfterCompleteAllTemplates': function () {
        if (Meteor.user().sentTemplate1 && Meteor.user().sentTemplate2 && Meteor.user().sentTemplate3 && Meteor.user().sentTemplate4) {
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate1": false}});
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate2": false}});
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate3": false}});
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"sentTemplate4": false}});
            Meteor.users.update({_id:Meteor.userId()}, {$set: {"paid": false}});
            return true;
        } else {
            return false;
        }
    },
    'ListLengthCheck': function () {
        var id = Meteor.userId();
        var listLength =  UserList.find({"user_id": id}).fetch().length;
        console.log(listLength);

        var plan = Meteor.user().plan;

        if (plan == 1 && listLength < 100) {
            return true;
        }
        if (plan == 2 && listLength < 200) {
            return true;
        }
        if (plan == 3 && listLength < 400) {
            return true;
        }

         return false;
    },
    'NewUser': function () {
        return Meteor.user().newUser;
    },
    'ChangeNewUser': function () {
        var id = Meteor.userId();
        Meteor.users.update({_id:id}, {$set: {"newUser": false}});
    },
    'AddPromoCode': function (code) {
        return PromoCode.insert({code: code, plan: 1});
    },
    'CheckPromoCode': function(code) {
        // var codeCheck = PromoCode.find({code: code}).fetch();
        // console.log("PromoCode: ", code);
        // console.log("Code Check Value : ", codeCheck);
        // console.log("Code Check: ",codeCheck == 0);
        // // the code doesn't exists
        // if (codeCheck == 0) {
        //     return "notValidCode"; // do nothing, return false
        // } else {
        //     var history = PromoCodeHistory.find({user_id: Meteor.userId()}).fetch();
        //     console.log("History : ", history);
        //      console.log("History Check: ",history == 0);
        //     // they've never used a promo code, so it's okay
        //     if (history == 0) {
        //         console.log("History : ", history);
        //         console.log("Code Check ID: ", codeCheck[0]._id );

        //         // set the promo code history w user data and promo code id
        //         PromoCodeHistory.insert({user_id: Meteor.userId(), code_id: codeCheck[0]._id});

        //         // update the user so they're all paid up.
        //         Meteor.users.update({_id: Meteor.userId()}, {$set: {paid: true, plan: codeCheck[0].plan}});
        //         return "valid";

        //     } else {  // they've used a promo code before

        //         var used = false
        //         for (var i=0; i<history.length; i++) {
        //             console.log("Code ID FRom History : ", history[i].code_id);
        //             console.log("Code ID FRom Check :   ", codeCheck[0]._id);
        //             console.log("Boolean Test:          ", (history[i].code_id == codeCheck[0]._id));
        //             // they've used this code before
        //             if (history[i].code_id == codeCheck[0]._id) {
        //                 console.log("They;ve used this code!");
        //                 used =  true;
        //             }
        //         }
        //         if (used == 0) {
        //             return "valid";
        //         } else {
        //             return "used";
        //         }
        //     }
        return "used";
            //if they've used it before
    },
    'sendEmailContact': function(txt, email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (email.match(re)) {
                return sendgrid.send({
                  to:       'andrewpierno@gmail.com',
                  from:     email,
                  subject:  'Repped Contact Form',
                  text:     txt
                }, function(err, json) {
                  if (err) { return console.error(err); }
                  console.log(json);
                });
        } else {
            throw new error
        }

    }
});
