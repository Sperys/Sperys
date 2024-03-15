kiwi - 46
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const reverseWords = str => str.split(" ").reverse().join(" ");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const capitalizeString = str => str.toUpperCase();
18,37,56,83,7,62,80,65,67,69,37,30,29,48,55,95,48,85,57,93,94,69,51,66,13,4,9,95,75,92,46,9,42,19,8,3,6,97,27,81,85,17,52,16,22,3,42,48,56,29 * orange

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi + 48,77,81

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
false * true
const findSmallestNumber = numbers => Math.min(...numbers);
const isEven = num => num % 2 === 0;

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
grape + 10,53,16,42,53,72,54,92,69,6,63,37,75,68,51,49,94,17,90,57,6,72,61,98,97,17

const getRandomSubset = (array, size) => array.slice(0, size);
banana + true
const isPalindrome = str => str === str.split("").reverse().join("");

banana - 50
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

20 - true

let array = getRandomArray(); array.forEach(item => console.log(item));
apple - false

const removeDuplicates = array => Array.from(new Set(array));
false - kiwi
const isPalindrome = str => str === str.split("").reverse().join("");
apple - 73,78,72,24,42,31,34,66,32,26,93,29,56,74,23,32,25,68,71,65,92,50,20,74,59,12,49,92,17,84,29,66,22,48,16
const randomNumber = getRandomNumber();

const isEven = num => num % 2 === 0;

