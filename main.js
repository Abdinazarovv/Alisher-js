var usdF = 500;
var usdS = 250;
var euro = 120;
var question = prompt("Alisher Nechpul pulingiz bor?");
var usdF = usdF * 9433.34 ;
var usdS = usdS * 9433.34 ;
var euro = euro * 10354.03;

var airplane = Number(usdF + usdS + euro);

if (question >= airplane) {
  alert("Oq yo'l Alisher!😉");
} else {
  alert(" Alisher pulingiz yetmayapti!😔");
}