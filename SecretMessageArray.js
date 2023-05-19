let secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
]

secretMessage.pop()
//pop() method removes the last element from an array and returns that element.
//This method changes the length of the array.
// console.log(secretMessage.length)

secretMessage.push('to', 'Program')
//The push() method adds the specified elements to the end of an array
// returns the new length of the array.
// console.log(secretMessage)

secretMessage[7] = 'right'

// console.log(secretMessage)

secretMessage.shift()
//shift() method removes the first element from an array and returns that removed element.
//This method changes the length of the array.
// console.log(secretMessage)

secretMessage.unshift('Programming')
//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
// console.log(secretMessage)

secretMessage.splice(6, 5, 'know,')
//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// console.log(secretMessage)

console.log(secretMessage.join(' '))
