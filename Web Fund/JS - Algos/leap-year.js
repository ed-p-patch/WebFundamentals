year = 400;
function find_leap_year(yr){
    if(yr % 4 == 0){
        if(yr % 100 == 0){
            if(yr % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}
console.log(find_leap_year(year));