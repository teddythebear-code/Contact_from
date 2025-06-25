//the HTML id element 

const firstname = document.getElementById("firstname");
const secondname = document.getElementById("secondname");
const message = document.getElementById("message");

//
function sendemailjs();
const templateParams = {
firstname.value,
secondname.value,
message.valus,
};

//
emailjs.send("service_12phka2", "template_mmeoe47", templateParams).then(
() => alert("send mail").catch(() => alert("send not mail")));
}