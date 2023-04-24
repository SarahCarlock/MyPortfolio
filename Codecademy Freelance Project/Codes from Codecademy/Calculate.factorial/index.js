const Calculate = {
    factorial(inputNumber) {
  
  // checking if number is negative
  if (inputNumber < 0) {
      console.log('Error! Factorial for negative number does not exist.');
  }
  // if number is 0 console.log(`The factorial of ${inputNumber} is 1.`);
  else if (inputNumber === 0) {
      return 1;
  }
  // if number is positive console.log(`The factorial of ${inputNumber} is ${fact}.`);
  else {
      let fact = 1;
      for (i = 1; i <= inputNumber; i++) {
          fact *= i;
      }
      return fact;
  }
  }
  }
  module.exports = Calculate;
  console.log(Calculate.factorial(5));