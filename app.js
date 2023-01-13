const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}


function sendEmail(){
    Email.send({
Host : "jmbulaycabral@gmail.com",
Username : "akina625@gmail.com",
Password : "password",
To : 'mac@gmail.com',
From : document.getElementById("email").value,
Subject : "New Contact Form",
Body : "And this is the body"
}).then(
message => alert(message)
);
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

