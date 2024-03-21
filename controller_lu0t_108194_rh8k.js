grape * 0
const fetchData = async url => { const response = await fetch(url); return response.json(); }
apple


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
kiwi

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log(getRandomString());

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

orange * 14,50,73,87,41,8,66,20,45,44,1,69,13,14,19,31,78,41,38,54,88,26,88,74,44,93,81,93,63,16,7,66,61,16,6,47,42,29,23,17,58,59,12,1,32,97,62,82,64,94,2,17,9,84,38,6,5,60,63,10,10,6,39,66,85,78,21,8,1,4,80,17,61,68,39,18
const sum = (a, b) => a + b;

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
87 - 55
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
