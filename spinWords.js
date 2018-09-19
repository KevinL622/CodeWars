/*
This function takes a string and reverses all words with five or more
letters.

Write a function that takes in a string of one or more words, and returns
the same string, but with all five or more letter words reversed (Just
like the name of this Kata). Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(str){
  //split string into array of words
  var array = str.split(" ");
  //check each word for length
  for (var i=0; i<array.length; i++){
      //if word has more than 4 letters then split, reverse string and rejoin
      if (array[i].split("").length > 4){
         array[i] = array[i].split("").reverse().join("");
      }
  }
  //rejoin array into a string
  return array.join(" ");
};

spinWords("This is another test");
