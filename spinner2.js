const spinnerArr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

let timer = 200;
let numberOfRotations = 10;
for (let n = 0; n < numberOfRotations; n++) {
  for (let i = 0; i < spinnerArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerArr[i]);
    }, (timer += 200));
  }
}

// while (i < count) {
//   setTimeout(() => {
//     process.stdout.write(spinnerArr[i]);
//   }, (timer += 200));
// }

// let timer = 0;
// let times = 10;
// let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
// for (let j = 0; j < times; j++) {
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//       process.stdout.write(spinner[i]);
//     }, (timer += 200));
//   }
// }
