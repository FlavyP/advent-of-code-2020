const input = require('./input.js').split('\n').map(x => x.split(''));
const columns = input[0].length;
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

const trees = function (right, down) {
    let trees = 0, row = 0, column = 0;
    while (column != input.length - down + 1) {
        if (input[column][row] === '#') {
            trees++;
        }
        row = (row + right) % columns;
        column += down;
    }
    return trees;
}

const totalTrees = () => {
    let totalTrees = 1;
    for (var i = 0; i < slopes.length; i++) {
        totalTrees *= trees(slopes[i][0], slopes[i][1]);
    }
    return totalTrees;
}

console.log(trees(3, 1));
console.log(totalTrees());