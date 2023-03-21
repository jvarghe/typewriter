/* CHALLENGE: ANIMATED SENTENCE [MODULE 1, WEEK 4]
 *
 * In this activity, we are going to take a sentence and display it as an
 * animation. The tricky part will be to stagger the appearance of characters
 * by an increasing period of time. For example the delay for the first
 * character will 0 ms, the second will 50 ms, the third 100 ms, the fourth
 * 150 ms... and so on.
 */



// This function prints a sentence to screen. It takes a callback function that
// uses setTimeout() to stagger the appearance of the characters.
const typeWriter = function(printChar) {

  // This is an array containing the sentence to be printed.
  const sentence = "hello there from lighthouse labs";
  
  // This is the delay variable. It starts at 0 ms.
  let delay = 0;


  // This for-loop iterates over the `sentence` array...
  for (const char of sentence) {

    // ... and calls the `printChar` predicate and passes in the character
    // to be printed and the delay interval.
    printChar(char, delay);
    delay += 50;
  }

  // After all the characters are printed out, use `console.log` to print out
  // the newline character so that the command prompt appears on a new line.
  console.log("\n");
};



// This is a function that prints characters to console.
const printChar = function(char, delay) {
  
  // Call setTimeout and pass in a delay.
  setTimeout(() => {

    // Unlike `console.log`, `process.stdout.write` does not print a new line
    // character after every call.
    process.stdout.write(char);

  }, delay);
};



// DRIVER CODE:
typeWriter(printChar);