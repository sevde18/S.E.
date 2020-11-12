var weight = document.getElementById('fweight').value;
var height = document.getElementById('fheight').value;
var calcBtn = document.getElementById('calc');
var BMI = document.getElementById('result');

calcBtn.addEventListener('click',  function() { 
    var bmi = calcBMI(80, 1.70);
    BMI.innerText = bmi;
});
function BMI(weight, height)
    {
    var bmı; 
    bmı= weight/(height*height);
    return bmı;
    }

function calcBMI(weight, height)
    {
        var bmı; 
        bmı = weight/(height*height);
        if(bmı<18.5)
        {return "underweight";}
        else if (bmı>=18.5 && bmı<24.9) return "normal weight";
        else if (bmı>=25&& bmı< 29.0) return "overweight";
        else return "obesity";        
    }