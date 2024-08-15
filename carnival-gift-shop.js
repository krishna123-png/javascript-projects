const input = require('sync-input');
function Gift(name, price, id){
  this.name = name;
  this.price = price;
  this.id = id;
}

const listOfGifts = {
  gift1: new Gift("Teddy Bear", 10, 1),
  gift2: new Gift("Big Red Ball", 5, 2),
  gift3: new Gift("Huge Bear", 50, 3),
  gift4: new Gift("Candy", 8, 4),
  gift5: new Gift("Stuffed Tiger", 15, 5),
  gift6: new Gift("Stuffed Dragon", 30, 6),
  gift7: new Gift("Skateboard", 100, 7),
  gift8: new Gift("Toy Car", 25, 8),
  gift9: new Gift("Basketball", 20, 9),
  gift10: new Gift("Scary Mask", 75, 10)
};

let totalTickets = 0;

function buy() {
  if (Object.keys(listOfGifts).length === 0){
    console.log(`Wow! There are no gifts to buy.`);
  }
  else {
    let number = Number(input("Enter the number of the gift you want to get: "));
    let gift = Object.values(listOfGifts).find((e) => e.id === number);
    if(Number.isNaN(number)){
      console.log(`Please enter a valid number!`);
      }
    else if(!(Object.values(listOfGifts).some((gift) => gift.id === number))){
      console.log(`There is no gift with that number!`);
    }
    else if(totalTickets < gift.price){
      console.log(`You don't have enough tickets to buy this gift.`);
    }
    else {
      console.log(`Here you go, one ${gift.name}!`);
      totalTickets -= gift.price;
      console.log(`Total tickets: ${totalTickets}`);;
      delete listOfGifts[`${Object.keys(listOfGifts).find((key) => listOfGifts[key] === gift)}`];
}
}
}

function addTickets() {
  let amount = Number(input("Enter the ticket amount: "));
  if ((Number.isNaN(amount)) || (amount < 0) || (amount > 1000)){
    console.log(`Please enter a valid number between 0 and 1000.`);
  }
  else {
    totalTickets += amount;
    console.log(`Total tickets: ${totalTickets}`);
    }
}

function checkTickets(){
  console.log(`Total tickets: ${totalTickets}`);
}

function showGifts(){
  if(Object.keys(listOfGifts).length === 0){
    console.log("Here's the list of gifts:\n");
    console.log("Wow! There are no gifts to buy.\n");
  }
  else {
    console.log(`Here's the list of gifts:
`);
    for (const gift of Object.values(listOfGifts)){
      console.log(gift.id + '- ' + gift.name + ', Cost: ' + gift.price + ' tickets');
  }
  }
}

function welcome() {
  console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!`);
  console.log(`Hello friend! Thank you for visiting the carnival!`);
  console.log(`Here's the list of gifts:\n`);
  for (const value of Object.values(listOfGifts)){
    console.log(`${value.id}- ${value.name}, Cost: ${value.price} tickets`);
    }
  let option = null;
  do {
    console.log(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`);
    option = Number(input());
    switch(option){
      case 1:
        buy();
        break;
      case 2:
        addTickets();
        break;
      case 3:
        checkTickets();
        break;
      case 4:
        showGifts();
        break;
      case 5:
        console.log(`Have a nice day!`);
        break;
      default:
        console.log(`Please enter a valid number!`);
        continue;
    }
  } while(option !== 5)
}
welcome();
