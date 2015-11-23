Template.plan.rendered = function () {
Session.set('plan', 1);
    Meteor.call('HasPaid', function (e,r){
        Session.set('paid', r)
    })
};

Template.plan.events({
    'click #promoCodeButton': function () {
      var code = $('#promoCode').val();
        Meteor.call('CheckPromoCode', code, function(e,r){
            if (r == "valid") {
                $('#promoCode').val("");
                Session.set('paid', true);
                return sweetAlert("All Set!", "Good Luck!");
            }
            if (r == "notValidCode") {
                $('#promoCode').val("");
                return sweetAlert("error", "That's not a valid code");
            }
        });
    },
    'submit #promoForm': function (e,t) {
        e.preventDefault();
      var code = $('#promoCode').val();
        Meteor.call('CheckPromoCode', code, function(e,r){
            
            if (r) {

                if (r == "valid") {
                    $('#promoCode').val("");
                    Session.set('paid', true);
                    return sweetAlert("Success", "All Set!");
                }
                if (r == "notValidCode") {
                    $('#promoCode').val("");
                    return sweetAlert("Error", "That's not a valid code");
                }
                if ( r == "used") {
                    $('#promoCode').val("");
                    sweetAlert("Error", "You already used this Code");
                }
                
            }
            
        });
    },
    'click #saveSettings': function (e,t) {
        var ccNum = $('#ccNum').val();
        var ccExpYr = $('#ccExpYr').val();
        var ccExpMo = $('#ccExpMo').val();
        var ccCvc = $('#ccCvc').val();
        if (ccExpMo.length > 2) {
            return sweetAlert("error", "Just the last two digits of the year please!")
        }
        console.log(ccNum, ccExpMo, ccExpYr, ccCvc);
        Meteor.call('CreateStripeToken', ccNum, ccExpYr, ccExpMo, ccCvc, function (e,r) {
            if (e){
                console.log(e);
            } if (r) {
                console.log(r);
                Session.set('stripe', r);
                console.log('stripe is set ^^^^^^');
            }
        });
        Meteor.setTimeout(function () {
            var r = Session.get('stripe');
            console.log(r);
            Meteor.call('ChargeToken', r.id, Session.get('plan'), function (e,r) {
                if (e) {
                    console.log(e);
                }
                if (r) {
                    swal({title: "Thank you!",   text: "You're all set!",   imageUrl: "img/camera.gif" });
                    Meteor.call('Paid', Session.get('plan'), function (e,r){
                        if (e) {
                            console.log(e);
                        }
                        if (r) {
                            Session.set('paid', true);
                        }
                    });
                }
            });
        },500);
    },

    'change #plan': function (e,t) {
        Session.set('plan',$('#plan').val());
    }
});

Template.plan.helpers({
    'number': function () {
        return Session.get('plan');
    },
    'cost': function () {
        if (Session.get('plan') == "1") {
            return 25;
        }
        if (Session.get('plan') == "2") {
            return 35;
        }
        if (Session.get('plan') == "3") {
            return 50;
        }
    },
    'submissions': function () {
        if (Session.get('plan') == "1") {
            return 100;
        }
        if (Session.get('plan') == "2") {
            return 200;
        }
        if (Session.get('plan') == "3") {
            return 400;
        }
    },
    'total': function () {
        if (Session.get('plan') == "1") {
            return 400;
        }
        if (Session.get('plan') == "2") {
            return 800;
        }
        if (Session.get('plan') == "3") {
            return 1600;
        }
    },
    'paid': function () {
        return Session.get('paid');
    }
});




