function roger(input) {
  const one = [1]
  const inputArray = [];
  for (let i = 0; i <= input; i += 1) {
    inputArray.push(i);
  }
  const inputStringArray = inputArray.map(String);
  console.log(inputStringArray);
  const boopArray = [];
  
  // forEach loop option
  inputArray.forEach(function(element) {
    if (one.includes(element)) {
      boopArray.push("boop");
    } else {
      boopArray.push(element);
    }
    console.log(boopArray);
  })
  }

  // for loop option
//   for (let i = 0; i < inputStringArray.length; i += 1) {
//     if (one.includes(i)) {
//       boopArray.push("boop");
//     } else {
//       boopArray.push(i);
//     }
//   }
//   console.log(boopArray);
// }