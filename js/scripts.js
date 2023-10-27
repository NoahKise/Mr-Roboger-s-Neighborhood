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

// forEach loop option
// inputArray.forEach(function (element) {
//   if (one.includes(element)) {
//     beepArray.push("beep");
//   } else if (two.includes(element)) {
//     beepArray.push("boop");
//   } else if (three.includes(element)) {
//     beepArray.push("Won't you be my neighbor?");
//   } else {
//     beepArray.push(element);
//   }
//   console.log(beepArray);
// })


// for loop option
//   for (let i = 0; i < inputStringArray.length; i += 1) {
//     if (one.includes(i)) {
//       beepArray.push("boop");
//     } else {
//       beepArray.push(i);
//     }
//   }
//   console.log(beepArray);
// }
