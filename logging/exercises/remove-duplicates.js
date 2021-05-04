let phrase = null;
while (phrase === null || phrase === '') {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed'
  );

}
console.log('user input:', phrase, phrase.length, 'letters')
let previous = '';

let noRepetitions = '';

for (let next of phrase) {
  console.log(next);
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    console.log(noRepetitions);
  }
  previous = next;
  
}
console.log('final result:', noRepetitions, noRepetitions.length, 'letters')
alert(noRepetitions);
