var num;
var number = "";
var sub;
var add;
var curr;
var total;
var first;
var op;

var calcE = function() {
  alert(total);
    
}


var sum = function(){
  total = total + (op*num);
  var input = document.getElementById("input").value = total;
  num = null;
  number = "";
}


var calcS = function() {
  if (first == null){
  total = num;
  var input = document.getElementById("input").value = total;
  num = null;
  number = "";
  first = "yes";
  op = -1;
  }
  else{
  sum();
  op = -1;
  
  }
}

var calcA = function() {
  if (first == null){
  total = num;
  var input = document.getElementById("input").value = total;
  num = null;
  number = "";
  first = "yes";
  op = 1;
  }
  else{
  sum();
  op = 1;
  }
}

var calc1 = function() {
  num = 1;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 1;
  
}

var calc2 = function() {
  num = 2;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 2;
}

var calc3 = function() {
  num = 3;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 3;
}

var calc4 = function() {
  num = 4;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 4;
}

var calc5 = function() {
  num = 5;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 5;
}

var calc6 = function() {
  num = 6;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 6;
}

var calc7 = function() {
  num = 7;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 7;
}
var calc8 = function() {
  num = 8;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 8
}

var calc9 = function() {
  num = 9;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 9;
}

var calc0 = function() {
  num = 0;
  number = number.concat(num.toString());
  num = parseInt(number);
  var input = document.getElementById("input").value = num;
  curr = 0;
}

var calcC = function() {
  num = null;
  number = "";
  curr = null;
  sub = null;
  add = null;
  total = 0;
  first = null;
  var input = document.getElementById("input").value = "";
    
}



var button = document.querySelector("#calculate1");
button.addEventListener("click", function(){
  calc1();
});

var button = document.querySelector("#calculate2");
button.addEventListener("click", function(){
  calc2();
});

var button = document.querySelector("#calculate3");
button.addEventListener("click", function(){
  calc3();
});

var button = document.querySelector("#calculate4");
button.addEventListener("click", function(){
  calc4();
});

var button = document.querySelector("#calculate5");
button.addEventListener("click", function(){
  calc5();
});

var button = document.querySelector("#calculate6");
button.addEventListener("click", function(){
  calc6();
});

var button = document.querySelector("#calculate7");
button.addEventListener("click", function(){
  calc7();
});

var button = document.querySelector("#calculate8");
button.addEventListener("click", function(){
  calc8();
});

var button = document.querySelector("#calculate9");
button.addEventListener("click", function(){
  calc9();
});

var button = document.querySelector("#calculate0");
button.addEventListener("click", function(){
  calc0();
});

var button = document.querySelector("#calculateC");
button.addEventListener("click", function(){
  calcC();
});

var button = document.querySelector("#calculateS");
button.addEventListener("click", function(){
  calcS();
});

var button = document.querySelector("#calculateA");
button.addEventListener("click", function(){
  calcA();
});

var button = document.querySelector("calculateE");
button.addEventListener("click", function(){
  calcE();
});





