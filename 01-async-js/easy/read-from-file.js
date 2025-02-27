//## Reading the contents of a file

//Write code to read contents of a file and print it to the console. 
//You can use the fs library to as a black box, the goal is to understand async tasks. 
//Try to do an expensive operation below the file read and see how it affects the output. 
//Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs').promises; // Import the fs.promises API

// Reading the file using fs.readFile() with .then() and .catch() for error handling

fs.readFile('a.txt', 'utf-8')
  .then((data) => {
    console.log('File content:', data); // File content is available here
  })
  .catch((err) => {
    console.error('Error reading file:', err); // Handle any error that occurs
  });
