UI.registerHelper("currentRouteName",function(){
    return Router.current()?Router.current().route.getName():"";
});

Meteor.startup(function () {
    _.extend(Notifications.defaultOptions, {
        timeout: 1000
    });
});