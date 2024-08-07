// Welcome to the Currency Converter!
// I have imported the 'sync-input' package from the hyperskill website.
// I will use this for reading input from console.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));

// The project code begins below
const input = require('sync-input');
const currenciesInUSD = {   // Creating an Object which contains the currency names as keys and their conversion in "USD" as values
  USD : 1,
  JPY : 113.5,
  EUR : 0.89,
  RUB : 74.36,
  GBP : 0.75
};
let keys = Object.keys(currenciesInUSD);
function greet() {  
  console.log(`Welcome to Currency Converter!`);
}
function explainConversion() {
  for (let index in keys){
    console.log(`1 USD equals ${currenciesInUSD[keys[index]]} ${keys[index]}`);
  }
}
function beginTask() {
  console.log(`What do you want to convert?`);
}
function main(){
  greet();
  explainConversion();
  let stop_Program = false;
  while(!stop_Program){
    console.log(`What do you want to do?`);
    console.log(`1-Convert currencies 2-Exit program`);
    let choiceOfUser = Number(input());
    if((choiceOfUser !== 1)&&(choiceOfUser !== 2)){   // if choiceOfUser is not 1 or 2 , then we will ask the question of "what do you want to do?" again
      console.log(`Unknown input`);
      continue;
    }
    else if(choiceOfUser === 2){     // if choiceOfUser is 2 then we will end the program by printing a message "Have a nice day!" on console.
      console.log(`Have a nice day!`);
      break;
    }
    else if(choiceOfUser === 1){   // if choiceOfUser is 1 then we will continue running the program by applying the further logic
      while(!stop_Program){
        beginTask();
        let convertFrom = input('From: ').toUpperCase();
        if (!(convertFrom in currenciesInUSD)){
           console.log(`Unknown currency`);
           continue;
        }
        else {
          let convertTo = input('To: ').toUpperCase();
          if (!(convertTo in currenciesInUSD)){
            console.log(`Unknown currency`);
          }
          else {
            let amount = Number(input('Amount: '));
            if (Number.isNaN(amount)){
              console.log(`The amount has to be a number`);
            }
            else if(amount < 1){
               console.log(`The amount cannot be less than 1`);
            }
            else {
              let conversion = currenciesInUSD[convertTo] * amount;
              console.log(`Result: ${amount} ${convertFrom} equals ${(conversion / currenciesInUSD[convertFrom]).toFixed(4)} ${convertTo}`);
            }
         }
       }
      }
    }
  }
}
main();
