//stores the data from the Firbase server
var dataRef = new Firebase('https://nhs-application.firebaseio.com/');
//stores the data from the Users section of the Firbase servers
var users = dataRef.child('Users');


function setUpLogin(){
	$('#LoginForm').css({"visibility" : "visible", "display" : "block"});
}
function setUpRegister(){
	
	
}

/*Logs in the user if they have an account
*and their password and email are correct
*
*/
function doLogin() {
	
	var mail = $('#login').val();
	var pass = $('#password').val();
	
	users.authWithPassword({
	  email    : mail,
	  password : pass
	}, function(error, authData) {
	  if (error) {
		
		switch(error.code){
			
			case "INVALID_EMAIL":
				errorLoggingIn("The Email Provided is invalid");
				break;
			case "INVALID_USER":
				errorLoggingIn("The Email Provided does not exist");
				break;
			case "INVALID_PASSWORD":
				errorLoggingIn("The Password Provided is incorrect");
				break;
			default:
				console.log("Login Failed!", error);
				alert("Something went wrong with logging you in. Please refresh the page." + 
				"If the error persists, please contact your system administrator");
				
			
		}
		
	  } else {
		console.log("Authenticated successfully with payload:", authData);
		console.log("pass: " + authData.password);
		
	  }
	});
	
}


function errorLoggingIn(error){
	setLoginAsError();
	alert(error);
	
}

function setLoginAsError(){
	
	
	
}




/*Creates a user if they don't already have an account 
*and saves their email and password
*/
function doSignUp() {
	
	var mail = $('#signUp').val();
	var pass = $('#signUppassword').val();
	var confirmPass = $('#signUpConfirmpassword').val();
	
	console.log("mail: " + mail + " pass: " + pass);
	
	users.createUser({
	  email    : mail,
	  password : pass
	}, function(error, userData) {
	  if (error) {
		console.log("Error creating user:", error);
	  } else {
		console.log("Successfully created user account with uid:", userData.uid);
		finishRegister(getName(mail), userData.uid);
	  }
	});
	
	
}

function getName(name) {
	var tester = ["@", "#", "!", ".", "*", "$", "&"];
	var temp;
	for(var i = 0; i<name.length; i++){
		for(var t=0; t<tester.length; t++){
			if (name.substring(i,i+1) == tester[t]){
				temp = (name.substring(0,i) + name.substring(i+1, name.length));
			}
		}
	}
	return temp;
}

function finishRegister(email, uid){
	
	users.child(email).child("UID").set(uid);
	
}


function doLogOut(){
	
	
}


function LoginOrOut(){
	
	var test = $('#LoginButton').val();
	if (test=="Login"){
		setUpLogin();
	}
	else{
		$('#LoginButton').val("Login");
		doLogOut();
		
	}
}


users.onAuth(function(authData){
	if (authData) {
		$('#LoginButton').val("Log out of" + " " + authData.password.email);
	}
});


