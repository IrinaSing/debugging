let userInput = '';
while (true) {
  userInput = prompt('enter your name:');
  
  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    console.log("user did not input anything =", typeof userInput, userInput)
    continue;
  }

  let userDidConfirm = confirm('is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    console.log("user confirmed the name")
    console.log('user name:', userInput)
    break;
  }
}

alert('your name is: "' + userInput + '"');
