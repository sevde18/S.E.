// calculation 
using System;
class HelloWorld
{
    public static double BMI (double height,double weight)
    {
    double bmı; 
    bmı= weight/ (height*height);
    return bmı;
    }
    public static string Result (double bmı)
    {
        if(bmı<18.5)
        {return "underweight";}
        else if (bmı>=18.5 && bmı<24.9) return "normal weight";
        else if (bmı>=25&& bmı< 29.0) return "overweight";
        else return "obesity";
        
        
    }
  static void Main() 
  {
      
    Console.WriteLine(BMI(1.70,80)+"  "+Result(BMI(1.70,80)));
    Console.WriteLine(BMI(1.61,47)+"  "+Result(BMI(1.61,47)));
    }
}