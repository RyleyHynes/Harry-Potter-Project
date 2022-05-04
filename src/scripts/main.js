// **NOT MY NOTE** Imports go first

//when importing note that from is the same as = in this function
import {makePottery} from "./PotteryWheel.js"
import {firePottery} from "./Kiln.js"
// **NOT MY NOTE** Make 5 pieces of pottery at the wheel

//here we are invoking the makePottery function and assigning its return value to a constant variable
const vase = makePottery("cylindrical",10,7)
const bowl = makePottery("round",4,3)
const plate = makePottery("concave",3,2)
const cup = makePottery("cup",2,4)
const mug = makePottery("mug",3,6)

// console.log(vase,bowl,plate,cup,mug)



//**NOT MY NOTE** Fire each piece of pottery in the kiln
const firedVase = firePottery(vase);
const firedBowl = firePottery(bowl);
const firedPlate = firePottery(plate);
const firedCup = firePottery(cup);
const firedMug = firePottery(mug);

console.log(firedVase,firedBowl,firedPlate,firedCup,firedMug)



// **NOT MY NOTE** Determine which ones should be sold, and their price


// **NOT MY NOTE** Invoke the component function that renders the HTML list



