let input = prompt('enter the word "yes", upper or lower case');

let reaction = '';
if (input === null) {
  console.log('path: user cancelled')
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  console.log('path: user typed "yes"')
  reaction = input + '!';
} else {
  console.log('path: user typed something else')
  reaction = 'baaaaad: ' + input;
}

alert(reaction);
