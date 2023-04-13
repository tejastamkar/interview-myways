function getAns(number) {
  var ansString = [];
  var getNumArra = Array.from(String(number), Number);
  //   console.log(getNumArra);
  var total = 0;
  getNumArra.forEach((num) => {
    total += num;
  });
  for (var i = 1; i <= total; i++) {
    if (i % 5 == 0 && i % 4 == 0) {
      ansString.push("FizzBuzz");
    } else if (i % 4 == 0) {
      ansString.push("Fizz");
    } else if (i % 5 == 0) {
      ansString.push("Buzz");
    } else {
      ansString.push(i);
    }
  }

  console.log(ansString.join(" "));
}

getAns(9819535276);
// getAns(9000000099);
