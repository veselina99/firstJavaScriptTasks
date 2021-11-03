const input = require('fs') // required to work with the filesystem
    .readFileSync(0) // read a buffer from stdin file descriptor
    .toString('utf8');

function binary(decimal)
{
    let reversedBinaryNumber = ''
    while(decimal !== 0)
    {
        reversedBinaryNumber += (decimal % 2)
        decimal = parseInt(decimal / 2)
    }
    let binaryNumber = ''
    for(let i = reversedBinaryNumber.length-1; i >= 0; i--)
    {
        binaryNumber=binaryNumber + reversedBinaryNumber[i]
    }
    return binaryNumber
}

console.log(binary(parseInt(input)))
