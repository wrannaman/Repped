// for the user's email attachments
Attachments = new Meteor.Collection('attachments');

// the user's email templates
Emails = new Meteor.Collection('emails');

// copy from the master list to the user list. can be combo of whichever master list. 
UserList = new Meteor.Collection('userlist');

// master list for agents
AgentMasterList = new Meteor.Collection('agentmasterlist');

// master list for managers, modeling, cds, etc. 
ManagerMasterList = new Meteor.Collection('managermasterlist');

// master list for modeling, cds, etc. 
ModelMasterList = new Meteor.Collection('modelmasterlist');

// master list for cd 
CdMasterList = new Meteor.Collection('CdMasterList');

// sends the email reminders
Reminders = new Meteor.Collection('reminders');

// test to track the data that goes with that email address. 
Tracking = new Meteor.Collection('tracking');

// Promotional code checking and usage.
PromoCode = new Meteor.Collection('promocode');

PromoCodeHistory = new Meteor.Collection('promocodehistory');