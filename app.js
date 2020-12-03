document.querySelector('.btn').addEventListener('click', function()
 { 
  var weight = document.getElementById('weight').value;   
  var height = document.getElementById('height').value; 
  var bmi = weight / (height*height);

  if ( !isNaN(weight) && !isNaN(height) ) {
    if(height > 2.50) { alert ("The hight is probably to high !");
    } else {
    bmiInterpratation(bmi);
  }
} else { alert ("weight and height must be numbers !!!"); }


 
  bmiInterpratation(bmi);
});

function bmiInterpratation(bmi) 
{
var result;
if(bmi<18.5)
{ 
  result = " - underweight";
  document.getElementById('result').classList.add("under-weight");
}
else if (bmi>=18.5 && bmi<24.9){result = " - normal weight.";
document.getElementById('result').classList.add("normal-weight");
} 
else if (bmi>=25 && bmi< 29.0){ result = " - overweight.";
document.getElementById('result').classList.add("over-weight");
}
else{
  result = "- obesity";
document.getElementById('result').classList.add("obesity");
} 
document.getElementById('result').innerHTML = 
'Your BMI is ' + Math.round(bmi * 100) / 100 + ' ' + result;
}
