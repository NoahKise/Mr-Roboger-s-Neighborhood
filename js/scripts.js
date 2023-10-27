// Business Logic

function roger(input) {
  const inputArray = [];
  for (let i = 0; i <= input; i += 1) {
    inputArray.push(i);
  }
  console.log(inputArray)
  if (inputArray.length === 1) {
    const beepArray = [];
    beepArray.push("Well, he can't count if you don't give him something to count to!");
    const beepString = beepArray.join(" ");
    return beepString;
  } else {
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
}

// UI Logic

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function formHandler(event) {
  event.preventDefault();
  document.querySelector("h5#result").innerText = ""
  document.body.style.backgroundImage = "url('../img/binary.gif')"
  document.body.style.backgroundSize = "100%"
  document.querySelector("img#kick").removeAttribute("class");
  document.querySelector("h2#comingRightUp").removeAttribute("class");
  document.querySelector("div#results").removeAttribute("class");
  document.querySelector("div#reset").removeAttribute("class");
  const userInput = document.querySelector("input#neighborInput").value;
  document.querySelector("h5#result").append(roger(userInput));
  window.scrollTo({
    top: 935,
    behavior: "smooth",
  });
  setTimeout(scrollToResults, 2600)
  function scrollToResults() {
    window.scrollTo({
      top: 1595,
      behavior: "smooth",
    });
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#neighbor").addEventListener("submit", formHandler);
});