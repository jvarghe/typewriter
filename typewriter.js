/* CHALLENGE [MODULE 1, WEEK 4] 
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

  // This is the sentence to be printed.
  const sentence = "hello there from lighthouse labs";
  
  // This is the delay. It starts at 0 ms.
  let delay = 0;


  // This for-loop iterates over the `sentence` array...
  for (const char of sentence) {

    // ... and calls the `printChar` predicate and passes in the character
    // to be printed and the delay interval.
    printChar(char, delay);
    delay += 50;
  }

  console.log("\n");
}


const printChar = function(char, delay) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}



typeWriter();