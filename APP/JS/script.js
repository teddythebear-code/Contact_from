//the HTML id element 

const firstname = document.getElementById("firstname");
const secondname = document.getElementById("secondname");
const message = document.getElementById("message");

//the form sendemailjs function
function sendemailjs(){

//the objcet form the element in a
const templateParams = {
firstname :firstname.value,
secondname: secondname.value,
message: message.valus,
};

//the sendemailjs program
emailjs.send("service_12phka2", "template_mmeoe47", templateParams).then(
() => alert("send mail").catch(() => alert("send not mail")));
}