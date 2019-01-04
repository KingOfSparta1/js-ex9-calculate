var multiple = document.getElementById('pomnoz');
var divide = document.getElementById('podziel');

multiple.addEventListener('click', function (){
    var num1 = document.getElementById('first_number').value;
var num2 = document.getElementById('second_number').value;
   var wynik = num1 * num2;
    document.getElementById("result").textContent=wynik;
});

divide.addEventListener('click', function(){
      var num1 = document.getElementById('first_number').value;
var num2 = document.getElementById('second_number').value;
    document.getElementById("result").innerHTML = num1 / num2;
});
