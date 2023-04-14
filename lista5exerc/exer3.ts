const entrada3 = require('readline-sync');
let l: number = entrada3.question('!');
for (let i = l - 1; 1 < i ; i--) {
               l = l*i;
}
 console.log(l);