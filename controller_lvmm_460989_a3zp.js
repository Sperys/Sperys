const greet = name => `Hello, ${name}!`;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
5,53,59,72,46,35,13,44,84,53,69,34,45,78,98,48,80,63,54,40,6,52,42,44,30,1,65,2,17,39,10,78,28,13,43,33,88,57,16,40,55,88,71,87,63,81,42,91,58,16,67,75,77,45,41,9,35,82,25,43,97,3,20,65,8,77,89,73,65,64,34,52,56,37,97,35 - banana
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const isEven = num => num % 2 === 0;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
orange


if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
grape / 52,49,55,25,35,9,26,76,40,84,63,0,97,3,10,9,13,8,45,59

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
