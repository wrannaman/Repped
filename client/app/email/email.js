Template.email.rendered = function () {
    Meteor.defer(function(){
                /**
         * cbpFWTabs.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         * 
         * Copyright 2014, Codrops
         * http://www.codrops.com
         */
        ( function( window ) {
            
            'use strict';

            function extend( a, b ) {
                for( var key in b ) { 
                    if( b.hasOwnProperty( key ) ) {
                        a[key] = b[key];
                    }
                }
                return a;
            }

            function CBPFWTabs( el, options ) {
                this.el = el;
                this.options = extend( {}, this.options );
                extend( this.options, options );
                this._init();
            }

            CBPFWTabs.prototype.options = {
                start : 0
            };

            CBPFWTabs.prototype._init = function() {
                // tabs elemes
                this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
                // content items
                this.items = [].slice.call( this.el.querySelectorAll( '.content > section' ) );
                // current index
                this.current = -1;
                // show current content item
                this._show();
                // init events
                this._initEvents();
            };

            CBPFWTabs.prototype._initEvents = function() {
                var self = this;
                this.tabs.forEach( function( tab, idx ) {
                    tab.addEventListener( 'click', function( ev ) {
                        ev.preventDefault();
                        self._show( idx );
                    } );
                } );
            };

            CBPFWTabs.prototype._show = function( idx ) {
                if( this.current >= 0 ) {
                    this.tabs[ this.current ].className = '';
                    this.items[ this.current ].className = '';
                }
                // change current
                this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
                this.tabs[ this.current ].className = 'tab-current';
                this.items[ this.current ].className = 'content-current';
            };

            // add to global namespace
            window.CBPFWTabs = CBPFWTabs;

        })( window );
        new CBPFWTabs( document.getElementById( 'tabs' ) );
        $.Editable.DEFAULTS.key = 'mD6A6zlzH-9iiA11lE-13==';
    });//end meteor defer

    Meteor.call('HasPaid', function (e,r){
        Session.set('paid', r)
    });
    Meteor.call('HasSentWhichTemplates', function (e,r) {
        if (r) {
            Session.set('HasSentWhichTemplates',r);
        }
    });
    Meteor.call('WhichTemplates', function (e,r){
        if (r) {
            Session.set('Has1', r[0]);
            Session.set('Has2', r[1]);
            Session.set('Has3', r[2]);
            Session.set('Has4', r[3]);
        }
    });

    Session.set("TemplateNumber", 1);

    $("[title='Insert Video']").hide();
    $("[title='Insert Image']").hide();

    var templateNumber = Session.get("TemplateNumber");
    Meteor.call('GetHTML', templateNumber, function (e,r) {
        console.log(r);
        Session.set('HTML', r);
    });
    Meteor.setTimeout(function(){
        $("[title='Insert Video']").hide();
        $("[title='Insert Image']").hide();
        $('.froala-box').editable("setHTML", Session.get("HTML")[0].message, true);
        $('#subject').val(Session.get("HTML")[0].subject);

    },900);
    $('.container').css('width','100%');
};

Template.email.events({
    'click #T1': function (e,t) {
        Session.set("TemplateNumber", 1);
        Meteor.call('CreatedTemplate', 1, function (e,r) {
            if (r == false) {
                console.log('no template created');
                $('.froala-box').editable("setHTML", "", true);
                $('#subject').val("");
            } else {
                Meteor.call('GetHTML', 1, function (e,r) {
                    console.log(r);
                    Session.set('HTML', r);
                });
                Meteor.setTimeout(function(){
                    $('.froala-box').editable("setHTML", Session.get("HTML")[0].message, true);
                    $('#subject').val(Session.get("HTML")[0].subject);
                },900);
            }
        });
        $('#T1').addClass("tab-current");
        $('#T2').removeClass("tab-current");
        $('#T3').removeClass("tab-current");
        $('#T4').removeClass("tab-current");

        $('#numChange1').css('display', 'visible');
        $('#numChange2').css('display', 'none');
        $('#numChange3').css('display', 'none');
        $('#numChange4').css('display', 'none');
    },
    'click #T2': function (e,t) {
        Session.set("TemplateNumber", 2);
        Meteor.call('CreatedTemplate', 2, function (e,r) {
            if (r == false) {
                console.log('no template created');
                $('.froala-box').editable("setHTML", "", true);
                $('#subject').val("");
            } else {
                Meteor.call('GetHTML', 2, function (e,r) {
                    console.log(r);
                    Session.set('HTML', r);
                });
                Meteor.setTimeout(function(){
                    $('.froala-box').editable("setHTML", Session.get("HTML")[0].message, true);
                    $('#subject').val(Session.get("HTML")[0].subject);
                },900);
            }
        });

        $('#T2').addClass("tab-current");
        $('#T1').removeClass("tab-current");
        $('#T3').removeClass("tab-current");
        $('#T4').removeClass("tab-current");

        $('#numChange1').css('display', 'none');
        $('#numChange2').css('display', 'visible');
        $('#numChange3').css('display', 'none');
        $('#numChange4').css('display', 'none');
    },
    'click #T3': function (e,t) {
        Session.set("TemplateNumber", 3);
        Meteor.call('CreatedTemplate', 3, function (e,r) {
            if (r == false) {
                console.log('no template created');
                $('.froala-box').editable("setHTML", "", true);
                $('#subject').val("");
            } else {
                Meteor.call('GetHTML', 3, function (e,r) {
                    console.log(r);
                    Session.set('HTML', r);
                });
                Meteor.setTimeout(function(){
                    $('.froala-box').editable("setHTML", Session.get("HTML")[0].message, true);
                    $('#subject').val(Session.get("HTML")[0].subject);
                },900);
            }
        });
        $('#T3').addClass("tab-current");
        $('#T2').removeClass("tab-current");
        $('#T1').removeClass("tab-current");
        $('#T4').removeClass("tab-current");

        $('#numChange1').css('display', 'none');
        $('#numChange2').css('display', 'none');
        $('#numChange3').css('display', 'visible');
        $('#numChange4').css('display', 'none');
    },
    'click #T4': function (e,t) {
        Session.set("TemplateNumber", 4);
        Meteor.call('CreatedTemplate', 4, function (e,r) {
            if (r == false) {
                console.log('no template created');
                $('.froala-box').editable("setHTML", "", true);
                $('#subject').val("");
            } else {
                Meteor.call('GetHTML', 4, function (e,r) {
                    console.log(r);
                    Session.set('HTML', r);
                });
                Meteor.setTimeout(function(){
                    $('.froala-box').editable("setHTML", Session.get("HTML")[0].message, true);
                    $('#subject').val(Session.get("HTML")[0].subject);
                },900);
            }
        });

        $('#T4').addClass("tab-current");
        $('#T2').removeClass("tab-current");
        $('#T3').removeClass("tab-current");
        $('#T1').removeClass("tab-current");

        $('#numChange1').css('display', 'none');
        $('#numChange2').css('display', 'none');
        $('#numChange3').css('display', 'none');
        $('#numChange4').css('display', 'visible');

    },
    'click #sendEmail': function (e,t) {
            $('#sendEmail').css('display', 'none');

            var subject = $('#subject').val();
            var message = $('.froala-box').editable("getHTML", true, true);
            Meteor.call('ListLengthCheck', function(e,r) {
                if (e) {

                } else {
                    Session.set('ListLengthCheck', r);
                }
            });
             Meteor.call('HasSentWhichTemplates', function (e,r) {
                if (r) {
                    Session.set('HasSentWhichTemplates',r);
                }
            });
            Meteor.setTimeout(function() {
                if (Session.get('paid') && Session.get('ListLengthCheck')) {

                    sweetAlert({
                        title: "Are you sure?",
                        text: "You are about to send this template to your list.",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, send it!",
                        closeOnConfirm: true },
                        function(){
                            if (!Session.get('HasSentWhichTemplates')[Session.get('TemplateNumber')-1]) {

                                console.log(subject, message, Session.get("TemplateNumber"));
                                console.log("************************");

                                Meteor.call('SendEmail', subject, message, Session.get("TemplateNumber"), function (error, result) {
                                    console.log(result);
                                    if (result) {
                                        Meteor.setTimeout(function () {
                                            sweetAlert({
                                            title: "Sent!",
                                            type: "success",
                                            text: result + " submissions delivered."
                                            });
                                        },300);
                                        
                                    }
                                });
                                // sweetAlert({
                                //     title: "Hold Up!",
                                //     type: "error",
                                //     text: "Repped is undergoing some maintenance. We should be back up soon."
                                // });

                            } else {
                                return Meteor.setTimeout(function() {
                                    sweetAlert({
                                        title: "Whoa Captain!",
                                        type: "error",
                                        text: "You've already sent this email! To start another submission cycle, please sign up for another plan"
                                    });
                                },500);

                            }
                        });
                } else {

                    if (Session.get('paid') == false) {
                        sweetAlert({
                            title: "Whoa Captain!",
                            type: "error",
                            text: "You need to sign up for a plan before you can send this template!"
                        });
                    } else {
                        sweetAlert({
                            title: "Whoa Captain!",
                            type: "error",
                            text: "Your list is too long!"
                        });
                    }
                    
                }
            },500);
            

        Meteor.call('HasSentWhichTemplates', function (e,r) {
            if (r) {
                Session.set('HasSentWhichTemplates',r);
            }
        });

        // returns true if user has sent all templates, resets all email's sent to false
        // and sets paid to false
        Meteor.setTimeout(function () {
            Meteor.call('ResetUserAfterCompleteAllTemplates', function (e,r) {
                if (e) {

                } 
                if (r) {
                    if (r == true) {
                        Router.go('/allDone');
                    } else {

                    }
                }
            });
        }, 5000);

        Meteor.setTimeout(function () {
            $('#sendEmail').css('display', 'inline');
        }, 10000);
        
    },
    'click #testTemplate': function (e,t) {
        var subject = $('#subject').val();
        var message = $('.froala-box').editable("getHTML", true, true);

        if (subject == "" || message == "") {
            sweetAlert({
                title: "Something is empty!",
                text: "Either your email's subject or message is empty. Please fill it out to test it",
                imageUrl: "img/camera.gif",
                timer: 3000
            });
        } else {
            Meteor.call('SendEmailToSelf', subject, message, Session.get("TemplateNumber"), function (error, result) {
                if (error) {
                    sweetAlert({
                        title: "Error",
                        text: error,
                        imageUrl: "img/camera.gif",
                        timer: 2000
                    });
                } 
                console.log(result);
                if (result) {
                    console.log(result);
                    sweetAlert({
                        title: result,
                        text: "Check your inbox.",
                        imageUrl: "img/camera.gif",
                        timer: 2000
                    });
                }
            });
            
        }

    },
    'click #saveTemplate': function (e,t) {
        var subject = $('#subject').val();
        var message = $('.froala-box').editable("getHTML", true, true);
        var messageClean = message;
        var templateNumber = Session.get("TemplateNumber");

        if (Session.get("Has"+templateNumber)) {
            console.log("Updating Email");
            console.log(Session.get("Has"+templateNumber));
            console.log(templateNumber);
            Meteor.call('UpdateEmailTemplate', Session.get("HTML")[0]._id, templateNumber, subject, messageClean, function (error, result) {
                console.log(result);
                Session.set("HTML", result);
            });
        } else {
            console.log("Creating New Email Template");
            Meteor.call('SaveNewEmailTemplate', templateNumber, subject, messageClean, function (error, result) {
                if (result) {
                    Meteor.call('GetHTML', templateNumber, function (e,r) {
                        console.log(r);
                        Session.set('HTML', r);
                    });
                }
            });
        }

        Meteor.call('WhichTemplates', function (e,r){
            if (r) {
                Session.set('Has1', r[0]);
                Session.set('Has2', r[1]);
                Session.set('Has3', r[2]);
                Session.set('Has4', r[3]);
            }
        });
        sweetAlert({
            title: "All Set!",
            text: "Template Saved",
            imageUrl: "img/camera.gif"
        });
    }

});

Template.email.helpers({
    doSave: function () {
        var self = this;
        return function (e, editor) {
            // Get edited HTML from Froala-Editor

            return false; // Stop Froala Editor from POSTing to the Save URL
        }
    },
    attachments: function () {
        return Session.get("AttachmentResults");
    },
    templateNumber: function () {
        return Session.get("HTML")[0].templateNumber;
    },
    number: function () {
        return Session.get("TemplateNumber");
    }
});



