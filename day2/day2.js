const input = require('./input.js').split('\n');

var incCountP1 = input.filter(x => {
    const [_, min, max, key, password] = x.match(/(\d*)-(\d*)\s(\w):\s(\w+)/);
    var count = (password.match(new RegExp(key, 'g')) || []).length;
    return count >= +min && count <= +max;
})

var incCountP2 = input.filter(x => {
    const [_, min, max, key, password] = x.match(/(\d*)-(\d*)\s(\w):\s(\w+)/);
    var firstMatch = password.charAt(+min-1) === key;
    var secondMatch = password.charAt(+max-1) === key
    return (firstMatch && !secondMatch) || (!firstMatch && secondMatch);
})

console.log(incCountP1.length);
console.log(incCountP2.length);