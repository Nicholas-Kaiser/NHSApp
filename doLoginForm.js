//stores the data from the Firbase server
var dataRef = new Firebase('https://nhs-application.firebaseio.com/');
//stores the data from the Users section of the Firbase servers
var users = dataRef.child('Users');

/*Logs in the user if they have an account
*and their password and email are correct
*
*/
function doLogin() {
	
	var email = $('#login').val();
	var pass = $('#password').val();
	console.log(pass);
	console.log(email);
	
	var test = checkConfirmation(email, pass);
	
	if (test){
		console.log("L");
		finishLogin(email, pass);
	}
	
}

function finishLogin(email, pass){
	console.log("Logged In");
	$('#signUp').hide();
	
}


/*Creates a user if they don't already have an account 
*and saves their email and password
*/
function doSignUp() {
	
	var email = $('#signUp').val();
	var pass = $('#signUppassword').val();
	var confirmPass = $('#signUpConfirmpassword').val();
	var test = checkConfirmationSignUp(pass,email,confirmPass);
	if (test){
		users.child(email).child("password").set(pass);
		finishLogin(email, pass);
	}
	else if (test=="email"){
		$("#login").val("");
		$("#login").css({"border-color":"red"});
		alert("Email does not exist");
	}
	
	
}


/*checks to see if the password and confirm password are correct,
*and if there is an email, that is available
*Var password: holds the value from the input for password
*Var email: holds the value from the input for email
*Var confirmpass: holds the value to confirm the password
*Precondition:password, email, and confirmpass are non-null values
*/
function checkConfirmationSignUp(password, email, confirmpass){
	var d;
	if (password!=confirmpass){
		$("#signUppassword").val("");
		$("#signUppassword").attr("placeholder", "must be the same");
		$("#signUppassword").css({"border-color":"red"});
		$("#signUpConfirmpassword").val("");
		$("#signUpConfirmpassword").attr("placeholder", "must be the same");
		$("#signUpConfirmpassword").css({"border-color":"red"});
		return false;
	}
	if (email==""){
		$('#signUp').val("");
		$('#signUp').attr("placeholder", "cant be empty");
		$("#signUp").css({"border-color":"red"});
		return false;
	}
	
	users.once("value", function(snapshot) {
		console.log(email);
		d = snapshot.child(email).exists();
		console.log(d);
		
	});
	
	if (d){
		return email;
	}
	
	return true;
}


function checkConfirmation(user, pass){
	var d;
	users.once("value", function(snapshot) {
	  
		d = snapshot.child(user).exists();
		if (!d){
			$("#login").val("");
			$('#login').attr("placeholder", "email does not exist");
			$("#login").css({"border-color":"red"});
			console.log("failed");
			alert("The email entered does not exist");
			return false;
		}
		console.log(d);
	});
	
	users.child(user).once("value", function(snapshot) {
		
		d = snapshot.child("password").val();
		
		if (!pass==d){
			console.log("password does not match");
			return false;
		}
		
	});
	return true;
	
	
}




