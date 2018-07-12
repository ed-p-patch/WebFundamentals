for(var x = 1; x < 101; ++x){
    console.log(x);
    if(x % 5 == 0 && x % 10 != 0){
        console.log("Coding");
    }
    else if(x % 5 == 0 && x % 10 == 0){
        console.log("Coding Dojo");
    }
}