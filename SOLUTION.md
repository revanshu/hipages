Solution Documentation
===========================

Components
===========================
LeadManagementComponent
InvitedListComponent
AcceptedListComponent
InvitedCardComponent
AcceptedCardComponent

API's
===========================
/jobs/new GET  (For invited list)
/jobs/accepted GET  (For accepted list)
/jobs/update POST

UI Design
===========================
onTabChange: As of now we are making new API call to get the Invited/Accepted lead list on click of tabs

onAccept: We will make the API call to update lead status and will show loading message to the user, once the update is successful we will reload the whole set of invited list again

onDecline: We will make the API call to update lead status and will show loading message to the user, once the update is successful we will reload the whole set of invited list again


Future changes
===========================
* As of now there is no docker setup, I am parallely reading about the same
* Pagination for huge set of data
* On Accept and Decline, currently I am loading the whole data again, I can make changes to delete only that particular job.
