// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

function makingCoffee() {
  console.log("Starting to make a coffee");
  console.log("Grinding coffee beans");
  console.log("Boiling water");
  console.log("Mixing boiled water with crushed coffee beans");
  console.log("Pouring coffee into the cup");
  console.log("Pouring some milk into the cup");
  console.log("Coffee is ready!");
}

const coffeeRequirement = {
  water : "200 ml",
  milk : "50 ml",
  coffee_beans : "15 g"
};

let waterIn_1_CupOf_Coffee = Number((coffeeRequirement['water'].split(" ",1))[0]);
let milkIn_1_CupOf_Coffee = Number((coffeeRequirement['milk'].split(" ",1))[0]);
let coffee_beansIn_1_CupOf_Coffee = Number((coffeeRequirement['coffee_beans'].split(" ",1))[0]);

let typesOfCoffee = ['espresso','latte','cappuccino'];

let currentStatusOfCoffeeMachine = {
  water : '400 ml',
  milk : '540 ml',
  coffee_beans : '120 g',
  cups : 9,
  money : '$550'
};

let infoAbout_1Cup_Espresso = {
  water : '250 ml',
  milk : '0 ml',
  coffee_beans : '16 g',
  money : '$4'
};

let waterIn_1_CupOf_Espresso = Number((infoAbout_1Cup_Espresso['water'].split(' ',1))[0]);
let milkIn_1_CupOf_Espresso = Number((infoAbout_1Cup_Espresso['milk'].split(' ',1))[0]);
let coffee_beansIn_1_CupOf_Espresso = Number((infoAbout_1Cup_Espresso['coffee_beans'].split(' ',1))[0]);
let costOf_1_CupOf_Espresso = Number((infoAbout_1Cup_Espresso['money']).slice(1));

let infoAbout_1Cup_Latte = {
  water : '350 ml',
  milk : '75 ml',
  coffee_beans : '20 g',
  money : '$7'
};

let waterIn_1_CupOf_Latte = Number((infoAbout_1Cup_Latte['water'].split(' ',1))[0]);
let milkIn_1_CupOf_Latte = Number((infoAbout_1Cup_Latte['milk'].split(' ',1))[0]);
let coffee_beansIn_1_CupOf_Latte = Number((infoAbout_1Cup_Latte['coffee_beans'].split(' ',1))[0]);
let costOf_1_CupOf_Latte = Number((infoAbout_1Cup_Latte['money']).slice(1));

let infoAbout_1Cup_Cappuccino = {
  water : '200 ml',
  milk : '100 ml',
  coffee_beans : '12 g',
  money : '$6'
};

let waterIn_1_CupOf_Cappuccino = Number((infoAbout_1Cup_Cappuccino['water'].split(' ',1))[0]);
let milkIn_1_CupOf_Cappuccino = Number((infoAbout_1Cup_Cappuccino['milk'].split(' ',1))[0]);
let coffee_beansIn_1_CupOf_Cappuccino = Number((infoAbout_1Cup_Cappuccino['coffee_beans'].split(' ',1))[0]);
let costOf_1_CupOf_Cappuccino = Number((infoAbout_1Cup_Cappuccino['money']).slice(1));

let currentAmountOfWater = Number((currentStatusOfCoffeeMachine['water'].split(' ',1))[0]);
let currentAmountOfMilk = Number((currentStatusOfCoffeeMachine['milk'].split(' ',1))[0]);
let current_coffee_beans = Number((currentStatusOfCoffeeMachine['coffee_beans'].split(' ',1))[0]);
let numOfCups = currentStatusOfCoffeeMachine['cups'];
let currentMoney = Number((currentStatusOfCoffeeMachine['money']).slice(1));

function display_Current_Status_OfMachine() {
  console.log(`The coffee machine has:
  ${currentAmountOfWater} ml of water
  ${currentAmountOfMilk} ml of milk
  ${current_coffee_beans} g of coffee beans
  ${numOfCups} disposable cups
  $${currentMoney} of money`);
}

/*console.log(`Write how many ml of water the coffee machine has:`);
let amountOfWaterPresent = Number(input());

console.log(`Write how many ml of milk the coffee machine has:`);
let amountOfMilkPresent = Number(input());

console.log(`Write how many grams of coffee beans the coffee machine has:`);
let amountOf_coffee_beans_Present = Number(input());*/

/*function makeCoffee(amountOfWater,amountOfMilk,amountOfcoffee_beans){
  let can_coffee_be_made = true;
  if ((amountOfWater <= amountOfWaterPresent) && (amountOfMilk <= amountOfMilkPresent) && (amountOfcoffee_beans <= amountOf_coffee_beans_Present)){
    return can_coffee_be_made;
  }
  else {
    can_coffee_be_made = false;
    return can_coffee_be_made;
  }
}*/

function askForAmountOfCoffee() {
  console.log(`Write how many cups of coffee you will need:`);
}

function displayMessages(numberOfCups) {
  console.log(`For ${numberOfCups} cups of coffee you will need:
  ${(waterIn_1_CupOf_Coffee * numberOfCups)} ml of water
  ${(milkIn_1_CupOf_Coffee * numberOfCups)} ml of milk
  ${(coffee_beansIn_1_CupOf_Coffee * numberOfCups)} g of coffee beans`);
}

function actionOnBuy() {
  console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:
  `);
  let order = Number(input());
  switch(order) {
    case 1:
      if ((currentAmountOfWater >= waterIn_1_CupOf_Espresso) && (currentAmountOfMilk >= milkIn_1_CupOf_Espresso) && (current_coffee_beans >= coffee_beansIn_1_CupOf_Espresso)){
        currentAmountOfWater -= waterIn_1_CupOf_Espresso;
        currentAmountOfMilk -= milkIn_1_CupOf_Espresso;
        current_coffee_beans -= coffee_beansIn_1_CupOf_Espresso;
        numOfCups -= 1;
        currentMoney += costOf_1_CupOf_Espresso;
        console.log(`I have enough resources, making you a coffee!`);
      }
      else if(waterIn_1_CupOf_Espresso > currentAmountOfWater){
        console.log(`Sorry, not enough water!`);
      }
      else if(milkIn_1_CupOf_Espresso > currentAmountOfMilk){
        console.log(`Sorry, not enough milk!`);
      }
      else if(coffee_beansIn_1_CupOf_Espresso > current_coffee_beans){
        console.log(`Sorry, not enough coffee beans!`)
      }
      break;
    case 2:
      if ((currentAmountOfWater >= waterIn_1_CupOf_Latte) && (currentAmountOfMilk >= milkIn_1_CupOf_Latte) && (current_coffee_beans >= coffee_beansIn_1_CupOf_Latte)){
        currentAmountOfWater -= waterIn_1_CupOf_Latte;
        currentAmountOfMilk -= milkIn_1_CupOf_Latte;
        current_coffee_beans -= coffee_beansIn_1_CupOf_Latte;
        numOfCups -= 1;
        currentMoney += costOf_1_CupOf_Latte;
        console.log(`I have enough resources, making you a coffee!`);
      }
      else if(waterIn_1_CupOf_Latte > currentAmountOfWater){
        console.log(`Sorry, not enough water!`);
      }
      else if(milkIn_1_CupOf_Latte > currentAmountOfMilk){
        console.log(`Sorry, not enough milk!`);
      }
      else if(coffee_beansIn_1_CupOf_Latte > current_coffee_beans){
        console.log(`Sorry, not enough coffee beans!`);
      }
      break;
    case 3:
      if ((currentAmountOfWater >= waterIn_1_CupOf_Cappuccino) && (currentAmountOfMilk >= milkIn_1_CupOf_Cappuccino) && (current_coffee_beans >= coffee_beansIn_1_CupOf_Cappuccino)){
        currentAmountOfWater -= waterIn_1_CupOf_Cappuccino;
        currentAmountOfMilk -= milkIn_1_CupOf_Cappuccino;
        current_coffee_beans -= coffee_beansIn_1_CupOf_Cappuccino;
        numOfCups -= 1;
        currentMoney += costOf_1_CupOf_Cappuccino;
        console.log(`I have enough resources, making you a coffee!`);
      }
      else if(waterIn_1_CupOf_Cappuccino > currentAmountOfWater){
        console.log(`Sorry, not enough water!`);
      }
      else if(milkIn_1_CupOf_Cappuccino > currentAmountOfMilk){
        console.log(`Sorry, not enough milk!`);
      }
      else if(coffee_beansIn_1_CupOf_Cappuccino > current_coffee_beans){
        console.log(`Sorry, not enough coffee beans!`);
      }
      break;
    default:
      break;
  }
}

function actionOnFill() {
  console.log(`Write how many ml of water you want to add:`);
  let incrementInWater = Number(input());
  console.log(`Write how many ml of milk you want to add:`);
  let incrementInMilk = Number(input());
  console.log(`Write how many grams of coffee beans you want to add:`);
  let incrementIn_coffee_beans = Number(input());
  console.log(`Write how many disposable cups you want to add:
  `);
  let incrementInCups = Number(input());
  currentAmountOfWater += incrementInWater;
  currentAmountOfMilk += incrementInMilk;
  current_coffee_beans += incrementIn_coffee_beans;
  numOfCups += incrementInCups;
}

function actionOnTake() {
  console.log(`I gave you $${currentMoney}
  `);
  currentMoney -= currentMoney;
}

function startCoffeeMachine() {
  console.log(`Write action (buy, fill, take, remaining, exit):`);
  let action = input();
  while(action !== 'exit'){
    switch(action) {
      case "buy":
        actionOnBuy();
        break;
      case "fill":
        actionOnFill();
        break;
      case "take":
        actionOnTake();
        break;
      case "remaining":
        display_Current_Status_OfMachine();
        break;
    }
    console.log(`Write action (buy, fill, take, remaining, exit):`);
    action = input();
  }
  
  /*askForAmountOfCoffee();
  let numberOfCups = Number(input());
  
  let requiredAmountOfWater = numberOfCups * waterIn_1_CupOf_Coffee;
  let requiredAmountOfMilk = numberOfCups * milkIn_1_CupOf_Coffee;
  let requiredAmountOf_coffee_beans = numberOfCups * coffee_beansIn_1_CupOf_Coffee;
  
  if (makeCoffee(requiredAmountOfWater, requiredAmountOfMilk, requiredAmountOf_coffee_beans)){
    let amountOfWaterLeft = amountOfWaterPresent - requiredAmountOfWater;
    let amountOfMilkLeft = amountOfMilkPresent - requiredAmountOfMilk;
    let amountOf_coffee_beans_Left = amountOf_coffee_beans_Present - requiredAmountOf_coffee_beans;
    let count = 0;
    
    while ((amountOfWaterLeft >= waterIn_1_CupOf_Coffee) && (amountOfMilkLeft >= milkIn_1_CupOf_Coffee) && (amountOf_coffee_beans_Left >= coffee_beansIn_1_CupOf_Coffee)){
      count += 1;
      amountOfWaterLeft -= waterIn_1_CupOf_Coffee;
      amountOfMilkLeft -= milkIn_1_CupOf_Coffee;
      amountOf_coffee_beans_Left -= coffee_beansIn_1_CupOf_Coffee;
    }
    
    if (count === 0){
      console.log(`Yes, I can make that amount of coffee`);
    }
    else {
      console.log(`Yes, I can make that amount of coffee (and even ${count} more than that)`);
    }
  }
  else {
    let count = 0;
    while((amountOfWaterPresent >= waterIn_1_CupOf_Coffee) && (amountOfMilkPresent >= milkIn_1_CupOf_Coffee) && (amountOf_coffee_beans_Present >= coffee_beansIn_1_CupOf_Coffee)){
      count += 1;
      amountOfWaterPresent -= waterIn_1_CupOf_Coffee;
      amountOfMilkPresent -= milkIn_1_CupOf_Coffee;
      amountOf_coffee_beans_Present -= coffee_beansIn_1_CupOf_Coffee;
    }
    console.log(`No, I can make only ${count} cups of coffee`);
  }*/
}
startCoffeeMachine();
