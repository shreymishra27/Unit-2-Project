//container -1 sliding component
var slider = document.querySelector(".container-1");
var slides = document.querySelectorAll(".slide1");
slider.style.overflow = "hidden";

slides.forEach(function (s, i) {
  console.log(i);
  s.style.transform = `translateX(${100 * i}%)`;
});

console.log(slides);
var curSlide = 0;
var maxSlide = slides.length - 1;

var btnRight = document.querySelector(".btn-right");
btnRight.addEventListener("click", function () {
  if (curSlide == maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach(function (s, i) {
    console.log(i);
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

var btnLeft = document.querySelector(".btn-left");
btnLeft.addEventListener("click", function () {
  if (curSlide == 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach(function (s, i) {
    console.log(i);
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

document.querySelector("#buttons").addEventListener("click", signinFunc);

function signinFunc() {
  document.querySelector(".signin-modal").style.display = "flex";
}

document.querySelector(".closein").addEventListener("click", closeinFunc);

function closeinFunc() {
  document.querySelector(".signin-modal").style.display = "none";
}

document.querySelector("#button").addEventListener("click", signupFunc);

function signupFunc() {
  document.querySelector(".bg-modal").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", closeFunc);

function closeFunc() {
  document.querySelector(".bg-modal").style.display = "none";
}

document.querySelector("#signUp-form").addEventListener("submit", function () {
  event.preventDefault();

  var userData = JSON.parse(localStorage.getItem("userCreds")) || [];

  var userObj = {
    firstName: document.querySelector("#first").value,
    lastName: document.querySelector("#last").value,
    email: document.querySelector("#email").value,
    mobile: document.querySelector("#mobile").value,
    password: document.querySelector("#pass").value,
    birthDate: document.querySelector("#birth").value,
  };

  userData.push(userObj);

  localStorage.setItem("userCreds", JSON.stringify(userData));

  window.location.href = "afterSign.html";
  alert("Login Successful!");
});

document.querySelector("#signIn-form").addEventListener("submit", function () {
  event.preventDefault();
  var regdUsers = JSON.parse(localStorage.getItem("userCreds"));

  var enteredEmail = document.querySelector("#userName").value;
  var enteredPass = document.querySelector("#password").value;

  for (var i = 0; i < regdUsers.length; i++) {
    if (
      regdUsers[i].email == enteredEmail &&
      regdUsers[i].password == enteredPass
    ) {
      alert("Login Succesfull!");
      window.location.href = "afterSign.html";
      break;
    } else {
      alert("Login Failure!");
      window.location.href = "index.html";
      break;
    }
  }
});

function onloadcartnumber() {
  var productnumber = localStorage.getItem("cartNumber");
  if (productnumber) {
    document.querySelector(" #cartno").textContent = productnumber;
  }
}

function cartNumber() {
  var productnumber = localStorage.getItem("cartNumber") || [];
  productnumber = parseInt(productnumber);
  if (productnumber) {
    localStorage.setItem("cartNumber", productnumber + 1);
    document.querySelector("#cartno").textContent = productnumber + 1;
  } else {
    localStorage.setItem("cartNumber", 0);
    document.querySelector("#cartno").innerText = 0;
  }
}
onloadcartnumber();
cartNumber();

document.querySelector("#submitt").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".signin-modal").style.display = "none";
});
