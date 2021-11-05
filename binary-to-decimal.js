const input = require('fs') // required to work with the filesystem
    .readFileSync(0) // read a buffer from stdin file descriptor
    .toString('utf8');
function binaryToDecimal(binary)
{
   let decimalInteger = 0
   let counter = 0
    for(let i = binary.length - 1; i >= 0; i--)
        {
            decimalInteger = BigInt(decimalInteger)
            let add = binary[i]*Math.pow(2,counter)
            decimalInteger += BigInt(add)
            counter++

        }
        const decimal = decimalInteger.toString()
    return decimal
}

console.log(binaryToDecimal(input))
