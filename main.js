var question = prompt("Alisher Nechpul pulingiz bor?:");
var usdF = 500;
var usdS = 250;
var euro = 120;

var usdF = usdF * 9433.34 ;
var usdS = usdS * 9433.34 ;
var euro = euro * 10354.03;

var plane = Number(usdF + usdS + euro);

if (question >= plane) {
  console.log("Oq yo'l Alisher!😉");
} else {
  console.log(" Alisher pulingiz yetmayati!😔");
}