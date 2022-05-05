//here we are defining and exporting a constant variable firePottery with two parameters (potteryObj and temp)
export const firePottery = (potteryObj,temp) => {
//we then add a new property to the potteryObj (fired) and set it to true
    potteryObj.fired = true;
    if (temp > 2200) {
//If the the temperature of the kiln is greater than 2200 then it is cracked 
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false;
    }
//we then return the pottery object because thats the value we want
    return potteryObj
}