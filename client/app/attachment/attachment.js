Template.attachments.destroyed = function () {
     Session.set('attachmentPage',false);
}

Template.attachments.rendered = function () {
    Session.set('attachmentPage',true);


    Meteor.call("GetAttachments", 1, function (e,r) {
        Session.set("AttachmentResults", r);
    });

    function getAttachment() {
        if ($("input[type='file']")[0].files[0]) {
            Router.go('/loading');
            if ($("input[type='file']")[0].files[0].size > 3000000) {
              sweetAlert({
                title: "Whoah Captain!",
                type: 'error',
                text: "File size is too big! Try making your file smaller than 3mb. This limit is to ensure your email gets to people's inboxes.",
            });
                Meteor.setTimeout(function() {
                    Router.go('/attachments');
                },700);
            }

            if ($("input[type='file']")[0].files[0].size < 3000000 ) {
                var attachment_name = $("input[type='file']")[0].files[0].name;
                var type = attachment_name.substr(attachment_name.length - 3);
                if (type === "pdf") {
                    var pdf = true
                } else {
                    pdf = false
                }
                console.log(type);
                var files = $("input.file_bag")[0].files;
                var templateNumber = 1;
                S3.upload(files, "/subfolder", function (e, r) {
                    var attachment_url = r.url;
                    console.log(attachment_url);
                    Meteor.call('AddAttachment', attachment_name, attachment_url, pdf, templateNumber, function (error, result) {
                        console.log(result);
                        console.log("****result from add attachment****^**");
                        Session.set("AttachmentResults", result);
                        $('#uploadedPercent').fadeOut();

                    });
                });
            } // end second if. 
            $("input[type='file']").remove();
            
            Meteor.setTimeout(function() {
                Router.go('/attachments');
            },500);

        }  // end if check on if the file bag is empty

        Meteor.setTimeout(function() {
        if (Session.get('attachmentPage') == true) {  
            getAttachment();   
        }
        },1000);
    }
        getAttachment();   
    
    

};

Template.attachments.events({
    'click #delete': function (e,t) {
        console.log(this._id);
        Meteor.call("RemoveAttachment", this._id, function (err, result) {
            if (err) {
                return err
            }
            if (result) {
                Meteor.call("GetAttachments", 1, function (e,r) {
                    Session.set("AttachmentResults", r);
                });
            }
        });
    }
});

Template.attachments.helpers({
    attachments: function () {
        return Session.get("AttachmentResults");
    }
});

Template.s3_tester3.events({
    "click #uploadButton": function(){
        if ($("input[type='file']")[0].files[0].size > 3000000) {
              sweetAlert({
                title: "Whoah Captain!",
                type: 'error',
                text: "File size is too big! Try making your file smaller than 3mb. This limit is so we can ensure they get to people's inboxes.",
            });
        }

        if ($("input[type='file']")[0].files[0].size < 3000000 ) {
            var attachment_name = $("input[type='file']")[0].files[0].name;
            var type = attachment_name.substr(attachment_name.length - 3);
            if (type === "pdf") {
                var pdf = true
            } else {
                pdf = false
            }
            console.log(type);
            var files = $("input.file_bag")[0].files;
            var templateNumber = 1;
            S3.upload(files, "/subfolder", function (e, r) {
                var attachment_url = r.url;
                console.log(attachment_url);
                Meteor.call('AddAttachment', attachment_name, attachment_url, pdf, templateNumber, function (error, result) {
                    console.log(result);
                    console.log("****result from add attachment****^**");
                    Session.set("AttachmentResults", result);
                    $('#uploadedPercent').fadeOut();

                });
            });
        }

    }
});

Template.s3_tester3.helpers({
    "files": function(){
        return S3.collection.find();
    }
});

