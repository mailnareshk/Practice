const TAX_RATE = 0.09;
const PHONE_PRICE = 98.99;
const PHONE_ACCESSORY_PRICE = 9.9999;
const SPENDING_THRESHOLD=5000;

var bankAccountBalance = 989;
var amount=0;
console.log(" Step1");

function formatPrice(amt){

    console.log(amt);

}

while ((amount+PHONE_PRICE+PHONE_ACCESSORY_PRICE) < bankAccountBalance)  {

amount=amount+PHONE_PRICE+PHONE_ACCESSORY_PRICE;
console.log(amount);

}

formatPrice(amount);
console.log(" Step3");