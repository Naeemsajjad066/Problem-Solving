import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let asciiCodes = {};

rl.question('Enter a character: ', (char) => {
    let output = 0;
    for (let i = 0; i < char.length; i++) {
        const asciiCode = char.charCodeAt(i);
        if (asciiCode < 0 || asciiCode > 127) {
            console.log("Invalid character. Please enter a valid ASCII character.");
            rl.close();
            return;
        }
        if (asciiCode > 99) {
            output = output * 1000 + asciiCode
        } else {
            output = output * 100 + asciiCode
        }
    }
    asciiCodes[output] = char;
    console.log(`The ASCII code for '${char}' is: ${output}`);


    rl.question('Enter ascii code: ', (code) => {
        if (asciiCodes[code]) {
            console.log(`The character for ASCII code ${code} is: ${asciiCodes[code]}`);
        }else{
         console.log(`No character found for ASCII code ${code}`);

        }
    })
}
)
