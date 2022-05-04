//defining a constant variable of primary key with the value of 1
let primaryKey = 1

//creating and exporting a function with 3 parameters(shape, weight, height)
export let makePottery = (shape, weight, height) => {
    //here we create an empty pottery object
    let potteryObj = {}
//we are then using dot notation to add properties to the pottery object that we have created
potteryObj.shape = shape,
potteryObj.weight = weight,
potteryObj.height = height,
potteryObj.id = primaryKey; 
// the id for each pottery object needs to be unique so we use ++ to increase the pottery id (primary key we already created) by one everytime the function is run
primaryKey++
//next we return the pottery object because this is what we are trying to log
return potteryObj
}

