const input = require('./input.js').split('\n');

for(var i = 0; i < input.length-1; i++) {
    for(var j = i+1; j < input.length; j++) {
        if(+input[i] + +input[j] === 2020) {
            console.log(+input[i] * +input[j]);
        }
    }
}

for(var i = 0; i < input.length-2; i++) {
    for(var j = i+1; j < input.length-1; j++) {
        for(var k = j+1; k < input.length; k++) {
            if(+input[i] + +input[j] + +input[k]=== 2020) {
                console.log(+input[i] * +input[j] * +input[k]);
            }
        }
    }
}