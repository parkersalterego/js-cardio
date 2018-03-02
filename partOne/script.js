// js cardio exercises part one

// 1) reverse a string

function reverseString(str) {
  let output = '';
  for (let i = str.length -1; i >= 0; i--) {
    output = output.concat(str.charAt(i));
  }
  console.log(output);
}

// reverseString('No Way Man');

// 2) validate palindrome 

function isPalindrome(str) {
  let backwards = '';

  for (let i = str.length -1; i >= 0; i--) {
    backwards = backwards.concat(str.charAt(i));
  }

  if (str === backwards) {
    console.log('The string is a palendrome');
  }
}

// isPalindrome('racecar');

// 3) reverce an integer

function reverseInt(int) {
  let numString = '';

  for (let i = int.toString().length; i >= 0; i --) {
    numString = numString.concat(int.toString().charAt(i));
  }
  console.log(parseInt(numString));
}

// reverseInt(4576839247);

// 4) cammel case a sentance

function cammelCase(s) {
  let words = s.split(' ');
  let output = '';
  for ( let i = 0; i < words.length; i ++) {
    words[i] = words[i].charAt(0).toUpperCase().concat(words[i].slice(1, words[i.length]));
    if (i < words.length ) {
      output = output.concat(`${words[i]} `);
    } else {
      output = output.concat(words[i]);
    }
  }
  console.log(output);
}

// cammelCase('sally sold sea shells by the sea shore.');

// 5) return the character that is most common in a string other than spaces

function maxCharacter(str) {
  let noSpace = [];
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach((char) => {
    if (char !== ' ') {
      noSpace.push(char);
    }
  });

  noSpace.forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  
  for (let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  console.log(charMap);
  console.log(maxChar);
  console.log(maxNum);
}

// maxCharacter('this is a string and we will find out which character is used the most.. probably a vowell?');

// 6) fizzbuzz

function fizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    }
  }
}

fizzBuzz();