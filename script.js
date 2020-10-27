//playerData for saves.
var playerData = [
     money = 10,
     AutoPrinters = 0
]

//Displaying The total money earned.
document.getElementById("TotalMoney").innerHTML = money;

//Incrementing the money and illegal money.
function getrich() {
    money++;
    document.getElementById("TotalMoney").innerHTML = money;
}

//Toggles between Dark and Light mode. (ew light mode)
function ThemeToggle() {
    var element = document.body;
    element.classList.toggle("theme-toggle");
  };
  var Auto_Print;
  function AutoPrint() {
    Auto_Print = setInterval(getrich, 1000);
  };

//reduces money by cost of printer and increments printer (something here is fucked)
function BuyAutoPrinters() {
    var AutoPrinterCost = 10;
    if (money >= AutoPrinterCost) {
      money = money -= AutoPrinterCost;
      AutoPrinters++;
      document.getElementById("TotalMoney").innerHTML = money;
      document.getElementById("TotalAutoPrinters").innerHTML = AutoPrinters;
    var NewAutoPrinterCost = math.pow(1.5 , AutoPrinterCost);
    document.getElementById("AutoPrinterCost").innerHTML = NewAutoPrinterCost
    }
}

  //Cost of the auto printer
  var AutoPrinterCost = 10
  function AutoPrinterCostFunc() {
  AutoPrinterCost == math.floor(math.pow(1.5 , AutoPrinterCost));
  }

//Buys an Auto Printer and activates it
 function BuyAndPrint() {
  BuyAutoPrinters();
  AutoPrint();
 };





