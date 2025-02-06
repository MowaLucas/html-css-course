//select the form
document.getElementById("signUpForm").addEventListener("submit", function(event){
//prevents default submit action
event.preventDefault();

//get the form fields

const name= document.getElementById("firstName").value.trim();

const lname= document.getElementById("lastName").value.trim();

const email= document.getElementById("emailAddress").value.trim();

const password = document.getElementById("enterPassword").value.trim();

//validate form fields
if(!name){
    alert("Please enter your first name");
    return;
}

if(!lname){
  alert("Please enter your last name");
  return;
}

if(!email || !/\S+@\S+\.\S+/.test(email)){
    alert("Please insert a valid Email");
    return;
}
 
if(!password || password.length < 6){
    alert("Password must be at least 6 characters long ");
    return;
}  
// if all validation pass
alert("Form submitted Successfully!");
this.submit();//Submit the form programmatically
})