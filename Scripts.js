var dataRef = new Firebase('https://nhs-application.firebaseio.com/');

var personRef;
var AccountsRef;
var personActivitiesRef;
var personPersonalInfoRef;
var personAwardsRef;


function clickHandler() {
	AccountsRef = dataRef.child("Applications");
	
	personRef = dataRef.child($('#FirstName').val() + " " + $('#LastName').val());
	personPersonalInfoRef = personRef.child('Personal Info');
	
	personActivitiesRef = personRef.child('Activities');
	personActivitiesRef.setPriority(1);
	
	personAwardsRef = personRef.child('Awards');
	personAwardsRef.setPriority(2);
	
	//if ($('#SignUpform').is('visible')){
		console.log("here");
		$("#SignUpform").css({"visibility":"hidden","display":"none"});
	//}
	uploadPersonalInfo();
	
	uploadActivities();
	
	uploadAwards();
	
}

function uploadPersonalInfo() {
	
	
	var Fname = $('#FirstName').val();
	var Lname = $('#LastName').val();
	var HomePhone = $('#HomePhone').val();
	var Email = $('#Email').val();
	var Mail = $('#Mail').val();
	
	checkAndUploadPersonalInfo('First Name', Fname, 0);
	checkAndUploadPersonalInfo('Last Name', Lname, 1);
	checkAndUploadPersonalInfo('Phone Number', HomePhone, 2);
	checkAndUploadPersonalInfo('Email', Email, 3);
	checkAndUploadPersonalInfo('Mailing Address', Mail, 4);
}

function checkAndUploadPersonalInfo(name, info, value) {
	
	if (info !=""){
		personPersonalInfoRef.child(name).set(info);
		personPersonalInfoRef.child(name).setPriority(value);
	}
}

function uploadActivities() {
	var line1 = $('#ActNameLine1').val();
	var line2 = $('#ActNameLine2').val();
	var line3 = $('#ActNameLine3').val();
	var line4 = $('#ActNameLine4').val();
	var line5 = $('#ActNameLine5').val();
	var line6 = $('#ActNameLine6').val();
	
	uploadActivitiesNames(line1, 1);
	uploadActivitiesNames(line2, 2);
	uploadActivitiesNames(line3, 3);
	uploadActivitiesNames(line4, 4);
	uploadActivitiesNames(line5, 5);
	uploadActivitiesNames(line6, 6);
}

function uploadActivitiesNames(name, line){
	
	if (name != ""){
		ActivitesTime(name, line);
	}
}

function ActivitesTime(name, line){
//all the checkbox info for line 1

	var Year9Line1 = $('#TimeSpent-Years-9Line1').is(':checked');
	var Year10Line1 = $('#TimeSpent-Years-10Line1').is(':checked');
	var Year11Line1 = $('#TimeSpent-Years-11Line1').is(':checked');
	var Year12Line1 = $('#TimeSpent-Years-12Line1').is(':checked');
	var Line1CheckBoxInfo = [Year9Line1, Year10Line1, Year11Line1, Year12Line1];
//all the text box info for line 1

	var Year9Line1Time = $('#TimeSpent-Text-Year9-Line1').val();
	var Year10Line1Time = $('#TimeSpent-Text-Year10-Line1').val();
	var Year11Line1Time = $('#TimeSpent-Text-Year11-Line1').val();
	var Year12Line1Time = $('#TimeSpent-Text-Year12-Line1').val();
	var Line1TimeInfo = [Year9Line1Time, Year10Line1Time, Year11Line1Time, Year12Line1Time];
//all the dropbox info for line 1

	var Year9Line1DropBox = $('#TimeSpent-DropDown-Selecter-Year9-Line1').val();
	var Year10Line1DropBox = $('#TimeSpent-DropDown-Selecter-Year10-Line1').val();
	var Year11Line1DropBox = $('#TimeSpent-DropDown-Selecter-Year11-Line1').val();
	var Year12Line1DropBox = $('#TimeSpent-DropDown-Selecter-Year12-Line1').val();
	var Line1DropBoxInfo = [Year9Line1DropBox, Year10Line1DropBox, Year11Line1DropBox, Year12Line1DropBox];
//all the checkbox info for line 2

	var Year9Line2 = $('#TimeSpent-Years-9Line2').is(':checked');
	var Year10Line2 = $('#TimeSpent-Years-10Line2').is(':checked');
	var Year11Line2 = $('#TimeSpent-Years-11Line2').is(':checked');
	var Year12Line2 = $('#TimeSpent-Years-12Line2').is(':checked');
	var Line2CheckBoxInfo = [Year9Line2, Year10Line2, Year11Line2, Year12Line2];
//all the text box info for line 2

	var Year9Line2Time = $('#TimeSpent-Text-Year9-Line2').val();
	var Year10Line2Time = $('#TimeSpent-Text-Year10-Line2').val();
	var Year11Line2Time = $('#TimeSpent-Text-Year11-Line2').val();
	var Year12Line2Time = $('#TimeSpent-Text-Year12-Line2').val();
	var Line2TimeInfo = [Year9Line2Time, Year10Line2Time, Year11Line2Time, Year12Line2Time];
//all the dropbox info for line 2

	var Year9Line2DropBox = $('#TimeSpent-DropDown-Selecter-Year9-Line2').val();
	var Year10Line2DropBox = $('#TimeSpent-DropDown-Selecter-Year10-Line2').val();
	var Year11Line2DropBox = $('#TimeSpent-DropDown-Selecter-Year11-Line2').val();
	var Year12Line2DropBox = $('#TimeSpent-DropDown-Selecter-Year12-Line2').val();
	var Line2DropBoxInfo = [Year9Line2DropBox, Year10Line2DropBox, Year11Line2DropBox, Year12Line2DropBox];
//all the checkbox info for line 3

	var Year9Line3 = $('#TimeSpent-Years-9Line3').is(':checked');
	var Year10Line3 = $('#TimeSpent-Years-10Line3').is(':checked');
	var Year11Line3 = $('#TimeSpent-Years-11Line3').is(':checked');
	var Year12Line3 = $('#TimeSpent-Years-12Line3').is(':checked');
	var Line3CheckBoxInfo = [Year9Line3, Year10Line3, Year11Line3, Year12Line3];
//all the text box info for line 3

	var Year9Line3Time = $('#TimeSpent-Text-Year9-Line3').val();
	var Year10Line3Time = $('#TimeSpent-Text-Year10-Line3').val();
	var Year11Line3Time = $('#TimeSpent-Text-Year11-Line3').val();
	var Year12Line3Time = $('#TimeSpent-Text-Year12-Line3').val();
	var Line3TimeInfo = [Year9Line3Time, Year10Line3Time, Year11Line3Time, Year12Line3Time];
//all the dropbox info for line 3

	var Year9Line3DropBox = $('#TimeSpent-DropDown-Selecter-Year9-Line3').val();
	var Year10Line3DropBox = $('#TimeSpent-DropDown-Selecter-Year10-Line3').val();
	var Year11Line3DropBox = $('#TimeSpent-DropDown-Selecter-Year11-Line3').val();
	var Year12Line3DropBox = $('#TimeSpent-DropDown-Selecter-Year12-Line3').val();
	var Line3DropBoxInfo = [Year9Line3DropBox, Year10Line3DropBox, Year11Line3DropBox, Year12Line3DropBox];
//all the checkbox info for line 4

	var Year9Line4 = $('#TimeSpent-Years-9Line4').is(':checked');
	var Year10Line4 = $('#TimeSpent-Years-10Line4').is(':checked');
	var Year11Line4 = $('#TimeSpent-Years-11Line4').is(':checked');
	var Year12Line4 = $('#TimeSpent-Years-12Line4').is(':checked');
	var Line4CheckBoxInfo = [Year9Line4, Year10Line4, Year11Line4, Year12Line4];
//all the text box info for line 4

	var Year9Line4Time = $('#TimeSpent-Text-Year9-Line4').val();
	var Year10Line4Time = $('#TimeSpent-Text-Year10-Line4').val();
	var Year11Line4Time = $('#TimeSpent-Text-Year11-Line4').val();
	var Year12Line4Time = $('#TimeSpent-Text-Year12-Line4').val();
	var Line4TimeInfo = [Year9Line4Time, Year10Line4Time, Year11Line4Time, Year12Line4Time];
//all the dropbox info for line 4

	var Year9Line4DropBox = $('#TimeSpent-DropDown-Selecter-Year9-Line4').val();
	var Year10Line4DropBox = $('#TimeSpent-DropDown-Selecter-Year10-Line4').val();
	var Year11Line4DropBox = $('#TimeSpent-DropDown-Selecter-Year11-Line4').val();
	var Year12Line4DropBox = $('#TimeSpent-DropDown-Selecter-Year12-Line4').val();
	var Line4DropBoxInfo = [Year9Line4DropBox, Year10Line4DropBox, Year11Line4DropBox, Year12Line4DropBox];
//all the checkbox info for line 5

	var Year9Line5 = $('#TimeSpent-Years-9Line5').is(':checked');
	var Year10Line5 = $('#TimeSpent-Years-10Line5').is(':checked');
	var Year11Line5 = $('#TimeSpent-Years-11Line5').is(':checked');
	var Year12Line5 = $('#TimeSpent-Years-12Line5').is(':checked');
	var Line5CheckBoxInfo = [Year9Line5, Year10Line5, Year11Line5, Year12Line5];
//all the text box info for line 5

	var Year9Line5Time = $('#TimeSpent-Text-Year9-Line5').val();
	var Year10Line5Time = $('#TimeSpent-Text-Year10-Line5').val();
	var Year11Line5Time = $('#TimeSpent-Text-Year11-Line5').val();
	var Year12Line5Time = $('#TimeSpent-Text-Year12-Line5').val();
	var Line5TimeInfo = [Year9Line5Time, Year10Line5Time, Year11Line5Time, Year12Line5Time];
//all the dropbox info for line 5

	var Year9Line5DropBox = $('#TimeSpent-DropDown-Selecter-Year9-Line5').val();
	var Year10Line5DropBox = $('#TimeSpent-DropDown-Selecter-Year10-Line5').val();
	var Year11Line5DropBox = $('#TimeSpent-DropDown-Selecter-Year11-Line5').val();
	var Year12Line5DropBox = $('#TimeSpent-DropDown-Selecter-Year12-Line5').val();
	var Line5DropBoxInfo = [Year9Line5DropBox, Year10Line5DropBox, Year11Line5DropBox, Year12Line5DropBox];
//all the checkbox info for line 6

	var Year9Line6 = $('#TimeSpent-Years-9Line6').is(':checked');
	var Year10Line6 = $('#TimeSpent-Years-10Line6').is(':checked');
	var Year11Line6 = $('#TimeSpent-Years-11Line6').is(':checked');
	var Year12Line6 = $('#TimeSpent-Years-12Line6').is(':checked');
	var Line6CheckBoxInfo = [Year9Line6, Year10Line6, Year11Line6, Year12Line6];
//all the text box info for line 6

	var Year9Line6Time = $('#TimeSpent-Text-Year9-Line6').val();
	var Year10Line6Time = $('#TimeSpent-Text-Year10-Line6').val();
	var Year11Line6Time = $('#TimeSpent-Text-Year11-Line6').val();
	var Year12Line6Time = $('#TimeSpent-Text-Year12-Line6').val();
	var Line6TimeInfo = [Year9Line6Time, Year10Line6Time, Year11Line6Time, Year12Line6Time];
//all the dropbox info for line 6

	var Year9Line6DropBox = $('#TimeSpent-DropDown-Selecter-Year9-Line6').val();
	var Year10Line6DropBox = $('#TimeSpent-DropDown-Selecter-Year10-Line6').val();
	var Year11Line6DropBox = $('#TimeSpent-DropDown-Selecter-Year11-Line6').val();
	var Year12Line6DropBox = $('#TimeSpent-DropDown-Selecter-Year12-Line6').val();
	var Line6DropBoxInfo = [Year9Line6DropBox, Year10Line6DropBox, Year11Line6DropBox, Year12Line6DropBox];
//emails
	var emailLine1 = $('#ActSponsorEmailLine1').val();
	var emailLine2 = $('#ActSponsorEmailLine2').val();
	var emailLine3 = $('#ActSponsorEmailLine3').val();
	var emailLine4 = $('#ActSponsorEmailLine4').val();
	var emailLine5 = $('#ActSponsorEmailLine5').val();
	var emailLine6 = $('#ActSponsorEmailLine6').val();
	var Emails = [emailLine1, emailLine2, emailLine3, emailLine4, emailLine5, emailLine6];
	
	var TotalCheckBoxInfo = [Line1CheckBoxInfo, Line2CheckBoxInfo, Line3CheckBoxInfo,
	Line4CheckBoxInfo, Line5CheckBoxInfo, Line6CheckBoxInfo];
	
	var TotalTimeInfo = [Line1TimeInfo, Line2TimeInfo, Line3TimeInfo, 
	Line4TimeInfo, Line5TimeInfo, Line6TimeInfo];
	
	var TotalDropBoxInfo = [Line1DropBoxInfo, Line2DropBoxInfo, Line3DropBoxInfo,
	Line4DropBoxInfo, Line5DropBoxInfo, Line6DropBoxInfo];
	
	
	
	uploadActivitesTime(name, TotalCheckBoxInfo[line-1], TotalTimeInfo[line-1], TotalDropBoxInfo[line-1], Emails[line-1]);
}

function uploadActivitesTime(name, CheckBoxInfo, TimeInfo, DropBoxInfo, email){
	var refAll = personActivitiesRef.child(name);
	var ref = refAll.child('Time Spent');
	
	for (x=0; x<CheckBoxInfo.length; x++){
		if (CheckBoxInfo[x]){
			ref.child((x+9) + 'th Grade').set(TimeInfo[x] + ' hours per ' + DropBoxInfo[x]);
			ref.child((x+9) + 'th Grade').setPriority(x);
		}
	}
	refAll.child('Email').set(email);
}

function uploadAwards(){
	
	var AwardNameLine1 = $('#Awards-Name-Line1').val();
	var AwardNameLine2 = $('#Awards-Name-Line2').val();
	var AwardNameLine3 = $('#Awards-Name-Line3').val();
	var AwardNameLine4 = $('#Awards-Name-Line4').val();
	var AwardNameLine5 = $('#Awards-Name-Line5').val();
	
	uploadAwardsYear(AwardNameLine1, 1);
	uploadAwardsYear(AwardNameLine2, 2);
	uploadAwardsYear(AwardNameLine3, 3);
	uploadAwardsYear(AwardNameLine4, 4);
	uploadAwardsYear(AwardNameLine5, 5);
}

function uploadAwardsYear(name, line) {
	
	var AwardYearLine1 = $('#Awards-Selector-Line1').val();
	var AwardYearLine2 = $('#Awards-Selector-Line2').val();
	var AwardYearLine3 = $('#Awards-Selector-Line3').val();
	var AwardYearLine4 = $('#Awards-Selector-Line4').val();
	var AwardYearLine5 = $('#Awards-Selector-Line5').val();
	var AwardsYearInfo = [AwardYearLine1, AwardYearLine2, AwardYearLine3, AwardYearLine4, AwardYearLine5];
	
	var AwardsEmailLine1 = $('#Awards-Email-Line1').val();
	var AwardsEmailLine2 = $('#Awards-Email-Line2').val();
	var AwardsEmailLine3 = $('#Awards-Email-Line3').val();
	var AwardsEmailLine4 = $('#Awards-Email-Line4').val();
	var AwardsEmailLine5 = $('#Awards-Email-Line5').val();
	var AwardsEmailInfo = [AwardsEmailLine1, AwardsEmailLine2, AwardsEmailLine3, AwardsEmailLine4, AwardsEmailLine5];
	
	if (name !=""){
		var Ref = personAwardsRef.child(name);
		Ref.child('Year Awarded').set(AwardsYearInfo[line-1]);
		Ref.child('Sponsor Email').set(AwardsEmailInfo[line-1]);
	}	
}









