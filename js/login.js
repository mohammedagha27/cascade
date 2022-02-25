let pop = document.querySelector(".popup-shdow");
let cancel = document.querySelector(".cancel");
let ret = document.querySelector(".return");
let email = document.forms["login"]["email"];
let pass = document.forms["login"]["pass"];
let repass = document.forms["login"]["repass"];
let email2 = document.forms["login2"]["email"];
let pass2 = document.forms["login2"]["pass"];
let repass2 = document.forms["login2"]["repass"];
let eror = document.querySelector(".validate");
let eror2 = document.querySelector(".validate2");
let erori = document.querySelector(".em-i");
cancel.onclick = function () {
  pop.classList.remove("active");
};
ret.onclick = function () {
  open("index.html", (target = "_self"));
};
function sub() {
  if (email.value.length < 1) {
    eror.style.display = "block";
    eror.innerHTML = "Please Enter your Email";
    email.style.borderColor = "yellow";
    erori.classList.add("active");
    document.querySelector(".pass-i").classList.remove("active");
    document.querySelector(".repass-i").classList.remove("active");
    email.focus();
    return false;
  } else if (pass.value.length < 8) {
    eror.style.display = "block";
    eror.innerHTML = "Please Enter 8 digit password";
    pass.style.borderColor = "yellow";
    document.querySelector(".pass-i").classList.add("active");
    erori.classList.remove("active");
    document.querySelector(".repass-i").classList.remove("active");
    email.style.borderColor = "lightgreen";
    pass.focus();
    return false;
  } else if (
    repass.value.length < 8 ||
    repass.value.length != pass.value.length
  ) {
    eror.style.display = "block";
    eror.innerHTML = "Not matching";
    repass.style.borderColor = "yellow";
    document.querySelector(".repass-i").classList.add("active");
    erori.classList.remove("active");
    document.querySelector(".pass-i").classList.remove("active");
    pass.style.borderColor = "lightgreen";
    eror.style.borderColor = "lightgreen";
    repass.focus();
    return false;
  } else {
    pop.classList.toggle("active");
    document.getElementById("form1").reset();
    document.querySelector(".repass-i").classList.remove("active");
    email.style.borderColor = "transparent";
    pass.style.borderColor = "transparent";
    repass.style.borderColor = "transparent";
    eror.style.display = "none";

    return false;
  }
}
function logg() {
  if (email2.value.length < 1) {
    eror2.style.display = "block";
    eror2.innerHTML = "Please Enter your Email";
    email2.style.borderColor = "yellow";
    document.querySelector(".em2-i").classList.add("active");
    document.querySelector(".pass2-i").classList.remove("active");
    email2.focus();
    document.querySelector(".fa-eye").style.top = "270px";
    return false;
  } else if (pass2.value.length < 8) {
    eror2.style.display = "block";
    eror2.innerHTML = "Please Enter corect password";
    pass2.style.borderColor = "yellow";
    document.querySelector(".pass2-i").classList.add("active");
    document.querySelector(".em2-i").classList.remove("active");
    email2.style.borderColor = "lightgreen";
    pass2.focus();
    document.querySelector(".fa-eye").style.top = "270px";
    return false;
  } else {
    // pop.classList.toggle("active");
    document.getElementById("form2").reset();
    email2.style.borderColor = "transparent";
    pass2.style.borderColor = "transparent";
    eror2.style.display = "none";
    document.querySelector(".fa-eye").style.top = "230px";
    return false;
  }
}
document.querySelector(".alr a").onclick = function () {
  document.querySelector(".signin").style.display = "none";
  document.querySelector(".login").style.display = "block";
  return false;
};
document.querySelector(".don a").onclick = function () {
  document.querySelector(".signin").style.display = "block";
  document.querySelector(".login").style.display = "none";
  return false;
};
document.querySelector(".fa-eye").onclick = function () {
  if (document.querySelector("#pass").type === "password") {
    document.querySelector("#pass").type = "text";
    document.querySelector(".fa-eye").classList.toggle("fa-eye-slash");
  } else if (document.querySelector("#pass").type === "text") {
    document.querySelector("#pass").type = "password";
    document.querySelector(".fa-eye").classList.toggle("fa-eye-slash");
  }
};
