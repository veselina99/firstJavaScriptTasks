const input = require('fs') // required to work with the filesystem
    .readFileSync(0) // read a buffer from stdin file descriptor
    .toString('utf8');

let permissions = input.split('')
let binaryNumber = []
for(let i = 0; i < permissions.length; i++)
{
    if(permissions[i] === 'x' || permissions[i] === 'w' || permissions[i] === 'r') binaryNumber[i] = 1
    else if(permissions[i] === '-') binaryNumber[i] = 0
}
let decimalInteger = 0
let counter = 0
for(let i = binaryNumber.length - 1; i >= 0; i--)
{
    decimalInteger += binaryNumber[i]*Math.pow(2,counter)
    counter++
}

console.log(decimalInteger)
