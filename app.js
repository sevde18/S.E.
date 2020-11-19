    
      document.querySelector('.btn-new').addEventListener('click', function() { 
        var weight = document.getElementById('weight').value;   
        var height = document.getElementById('height').value; 
        var bmi = weight / (height*height);
       
        bmiInterpratation(bmi);
});

function bmiInterpratation(bmi) {
    var result;
    if(bmi<18.5)
    {result = " - underweight";}
    else if (bmi>=18.5 && bmi<24.9) result = " - normal weight.";
    else if (bmi>=25&& bmi< 29.0) result = " - overweight.";
    else result = "- obesity";
    document.getElementById('result').innerHTML = 
    'Your BMI is ' + Math.round(bmi * 100) / 100 + ' ' + result;
}