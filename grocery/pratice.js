function take(n, list) {
  let late = 0;
  let wait = 0;
  let numbs = n;
  list.forEach((slip) => {
    if (slip === "TAKE") {
      late++;
      wait++;
      numbs++;
    } else if (slip === "SERVE") {
      wait--;
    } else if (slip === "CLOSE") {
      console.log(late, wait, numbs);
      wait = 0;
      late = 0;
    } else if ("EOF") {
      return;
    }
  });
}

take(23, [
  "TAKE",
  "TAKE",
  "SERVE",
  "TAKE",
  "SERVE",
  "SERVE",
  "CLOSE",
  "TAKE",
  "TAKE",
  "TAKE",
  "SERVE",
  "CLOSE",
  "TAKE",
  "SERVE",
  "TAKE",
  "SERVE",
  "TAKE",
  "TAKE",
  "TAKE",
  "TAKE",
  "TAKE",
  "TAKE",
  "SERVE",
  "CLOSE",
  "EOF",
]);
