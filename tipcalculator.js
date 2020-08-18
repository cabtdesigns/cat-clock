function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  
  //validate input
  
 if (billAmt === "" || serviceQual == 0) {
   alert ("Please enter Values");
   return;
 }
 //check to see if this input is empty or less than or equl to 1
 if (numOfPeople === "" || numOfPeople <= 1) {
   numOfPeople = 1;
   document.getElementById("each").style.display = "none";
 } else {
   document.getElementById("each").style.display = "block";
 }
  
 //Clacuate Tip
 var total = (billAmt * serviceQual) / numOfPeople;
 //round to two decimal places
 total = Math.round(total * 100) /100;
 //next line allows us to always have 2 numbers after the decimal point
  total = total.toFixed(2);
  //Display tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
 
}

//Hide the tip ampunt on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};

