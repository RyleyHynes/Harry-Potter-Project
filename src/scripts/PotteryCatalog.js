//here we are creating an empty array and assigning it to the variable pottery sold.
let potteryToSell = [];

//we then create and export a function which is responsible for determining if a piece of pottery should be sold
export const toSellOrNotToSell = (potteryObj) => {
//if the pottery is not cracked then we want to push it up into the pottery sold array.
    if (potteryObj.cracked === false) {
        potteryToSell.push(potteryObj)
//if the weight of the pottery is greater than or equal to 6 then the price is $40
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else {
//if the weight is less than 6 than the price is $20
            potteryObj.price = 20
        }
    }
//we then return the potteryObj because that is what we want 
        return potteryObj
}

//here we define and export a function named usePottery which returns a copy or the items to be sold
export const usePottery = () => {
    return Array.from(potteryToSell)
}