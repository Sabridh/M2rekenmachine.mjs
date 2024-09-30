import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("geef een getal "))
let getal2 = parseFloat(await userInput.question("geef een getal "))

let som = getal1 + getal2
let aftrekken = getal1 - getal2
let vermenigvuldigen = getal1 * getal2
let delen = getal1 / getal2

let calculator = await userInput.question("kies welke rekening dat je wil doen ")

if(calculator == "som"){
    console.log(som);
    
}else if(calculator == "aftrekken"){
    console.log(aftrekken);
    
}else if(calculator == "vermenigvuldigen"){
    console.log(vermenigvuldigen);
    
}else if(calculator == "delen"){
    console.log(delen);
    
} 
process.exit()