function what_day(num1, num2){
    if((num1 == 15 && num2 == 4) || (num2 == 15 && num1 == 4)){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day....");
    }
}
what_day(4, 15); // Either order
what_day(10, 5);
what_day(15, 4); // Either order