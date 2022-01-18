const spinnerArr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let timer = 0;
let times = 3;

for (let i = 0; i <= times; i++) {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, (timer += 200));

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, (timer += 200));

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, (timer += 200));

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r\\   ");
  }, (timer += 200));
}
