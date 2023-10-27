// Business Logic

function roger(input) {
  const inputArray = [];
  for (let i = 0; i <= input; i += 1) {
    inputArray.push(i);
  }
  const beepArray = [];
  inputArray.forEach(function (element) {
    if (element.toString().indexOf("3") > -1) {
      beepArray.push("Won't you be my neighbor?");
    } else if (element.toString().indexOf("2") > -1) {
      beepArray.push("boop");
    } else if (element.toString().indexOf("1") > -1) {
      beepArray.push("beep");
    } else {
      beepArray.push(element);
    }
  })
  const beepString = beepArray.join(" ");
  return beepString;
}

// UI Logic

function formHandler(event) {
  event.preventDefault();
  document.querySelector("h5#result").innerText = ""
  document.body.style.backgroundImage = "url('../img/binary.gif')"
  document.body.style.backgroundSize = "100%"
  document.querySelector("img#kick").removeAttribute("class");
  document.querySelector("h2#comingRightUp").removeAttribute("class");
  document.querySelector("div#results").removeAttribute("class");
  const userInput = document.querySelector("input#neighborInput").value;
  document.querySelector("h5#result").append(roger(userInput));
  window.scrollTo({
    top: 550,
    behavior: "smooth",
  });
  setTimeout(scrollToResults, 2600)
  function scrollToResults() {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#neighbor").addEventListener("submit", formHandler);


});