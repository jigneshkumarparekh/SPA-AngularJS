function findLongestWord(sentence: string) {
  const words = sentence.split(' ');
  let longestWord = '';
  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

function findLongestWordUsingReduce(sentence: string) {
  return sentence.split(' ').reduce(
    (longest, curentWord) => curentWord.length > longest.length ? curentWord : longest
    , ''); // <== This is an initial value...
}

const sen = 'My name is Jigneshkumar Parekh';

console.log(`--> Longest word is: ${findLongestWord(sen)}`);

console.log(`--> Longest word using reduce: ${findLongestWordUsingReduce(sen)}`);
