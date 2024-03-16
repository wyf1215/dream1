document.querySelector("p").addEventListener("click", function() {
  alert("别学啦，我害怕！");
});

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/头像.jpg") {
    myImage.setAttribute("src", "images/头像.jpg");
  } else {
    myImage.setAttribute("src", "images/头像.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字:");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎你 " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "欢迎你 " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
