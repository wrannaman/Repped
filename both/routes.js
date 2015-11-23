//************************************************SEO CONFIG************************************************************

Meteor.startup(function() {
 if(Meteor.isClient){
      return SEO.config({
        title: 'Repped | Actor and Model Talent Submissions',
        meta: {
          'description': 'Repped helps actors and models to submit talent agencies and managers from Los Angeles ( LA ), New York ( NY )'
        },
        og: {
          'image': 'http://repped.co/img/repped.png' 
        }
      });
    }
});

//************************************************ Google Analytics CONFIG ************************************************************
Router.configure({
    trackPageView: true
});

//************************************************Main Controller************************************************************
MainController=RouteController.extend({
    layoutTemplate:"mainLayout",
    loadingTemplate: "spinner",
    yieldTemplates:{
        "navbar":{
            to:"navbar"
        }
    },
    onBeforeAction: function() {
        if (!Meteor.userId()) {
            Router.go('/');
            sweetAlert({
                    title: "Sneaky, Sneaky...",
                    text: "You don't have permission! Try logging in, or registering.",
                    type: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#eb6a5a",
                    confirmButtonText: "Whoops",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }
            );
            return;
        }
        if (Meteor.user().emails[0].verified) {
            if (Meteor.user().roles === "free") {
                this.render('/faq');
                this.next();
                console.log("you're validated as client, proceed");
            }
        } else {
            sweetAlert({
                    title: "Sooooo Close!",
                    text: "You need to verify your email before going any further.",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#eb6a5a",
                    confirmButtonText: "Got it",
                    closeOnConfirm: true,
                    closeOnCancel: true,
                    timer: 1500
                }
            );
            Router.go('/');
        }
        
        //this.next();
    }
});

AdminController=RouteController.extend({
    layoutTemplate:"mainLayout",
    loadingTemplate: "spinner",
    yieldTemplates:{
        "navbar":{
            to:"navbar"
        }
    },
    onBeforeAction: function() {
        if (!Meteor.userId()) {
            Router.go('/');
            sweetAlert({
                    title: "Sneaky, Sneaky...",
                    text: "You don't have permission! Try logging in, or registering.",
                    type: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#eb6a5a",
                    confirmButtonText: "Whoops",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }
            );
            return;
        }
        if (Meteor.user().emails[0].verified) {
            if (Meteor.user().email == "andrewpierno@gmail.com") {
                this.render('/admin');
                this.next();
                console.log("you're validated as the master, proceed");
            }
        } else {
            sweetAlert({
                    title: "Sooooo Close!",
                    text: "You need to verify your email before going any further.",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#eb6a5a",
                    confirmButtonText: "Got it",
                    closeOnConfirm: true,
                    closeOnCancel: true,
                    timer: 1500
                }
            );
            Router.go('/');
        }
        
        //this.next();
    }
});
//************************************************ Admin Controllers ***********************************************************
AdminController = MainController.extend({
    template:"admin"
});
Router.map(function(){
    this.route("admin",{
        path:"/admin",
        controller:"AdminController"
    });
});


//************************************************App Controllers***********************************************************
EmailController = MainController.extend({
    template:"email"
});
Router.map(function(){
    this.route("email",{
        path:"/email",
        controller:"EmailController"
    });
});

ListController = MainController.extend({
    template:"list"
});
Router.map(function(){
    this.route("list",{
        path:"/list",
        controller:"ListController"
    });
});

AddToListController = MainController.extend({
    template:"addToList"
});
Router.map(function(){
    this.route("addToList",{
        path:"/add",
        controller:"AddToListController"
    });
});

LoadingController = RouteController.extend({
    template:"loading"
});
Router.map(function(){
    this.route("loading",{
        path:"/loading",
        controller:"LoadingController"
    });
});
HomeController = RouteController.extend({
    template:"home",
    waitOn: function () {
        Meteor.setTimeout(function () {
            return true;
        },300);
    }
});
Router.map(function(){
    this.route("home",{
        path:"/",
        controller:"HomeController"
    });
});

SignupController = RouteController.extend({
    template:"signup"
});
Router.map(function(){
    this.route("signup",{
        path:"/signup",
        controller:"SignupController"
    });
});

AttachmentsController = MainController.extend({
    template:"attachments"
});
Router.map(function(){
    this.route("attachments",{
        path:"/attachments",
        controller:"AttachmentsController"
    });
});

SettingsController = MainController.extend({
    template:"settings"
});
Router.map(function(){
    this.route("settings",{
        path:"/settings",
        controller:"SettingsController"
    });
});


AllDoneController = MainController.extend({
    template:"allDone"
});
Router.map(function(){
    this.route("allDone",{
        path:"/allDone",
        controller:"AllDoneController"
    });
});

PlanController = MainController.extend({
    template:"plan"
});
Router.map(function(){
    this.route("plan",{
        path:"/plan",
        controller:"PlanController"
    });
});
FaqController = MainController.extend({
    template:"faq"
});
Router.map(function(){
    this.route("faq",{
        path:"/faq",
        controller:"FaqController"
    });
});