const input = require('fs') // required to work with the filesystem
    .readFileSync(0) // read a buffer from stdin file descriptor
    .toString('utf8');


function decimalToBinary(decimalInteger)
{
    if(decimalInteger >= 1)
    {
        return decimalToBinary(BigInt(decimalInteger)/2n) + (BigInt(decimalInteger) % 2n)
    }
    return ''
}

console.log(decimalToBinary(input))
