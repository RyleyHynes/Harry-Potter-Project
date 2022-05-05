// **NOT MY NOTE** Imports go first

//when importing note that from is the same as = in this function
import {makePottery} from "./PotteryWheel.js"
import {firePottery} from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
// import { usePottery } from "./PotteryCatalog.js"
// **NOT MY NOTE** Make 5 pieces of pottery at the wheel

//here we are invoking the makePottery function while giving it two arguments and assigning its return value to a constant variable
const vase = makePottery("cylindrical",10,7)
const bowl = makePottery("round",4,3)
const plate = makePottery("concave",3,2)
const cup = makePottery("cup",2,4)
const mug = makePottery("mug",3,6)

// console.log(vase,bowl,plate,cup,mug)



//**NOT MY NOTE** Fire each piece of pottery in the kiln

//here we are invoking the firePottery function while giving it two arguments and assign its return value to a constant variable
const firedVase = firePottery(vase, 4300);
const firedBowl = firePottery(bowl,2000);
const firedPlate = firePottery(plate, 320);
const firedCup = firePottery(cup, 12000);
const firedMug = firePottery(mug, 2100);

console.log(firedVase,firedBowl,firedPlate,firedCup,firedMug)



// **NOT MY NOTE** Determine which ones should be sold, and their price
const toSellVase = toSellOrNotToSell(firedVase)
const toSellBowl = toSellOrNotToSell(firedBowl)
const toSellPlate = toSellOrNotToSell(firedPlate)
const toSellCup = toSellOrNotToSell(firedCup)
const toSellMug = toSellOrNotToSell(firedMug)

console.log(toSellVase,toSellBowl,toSellPlate,toSellCup,toSellMug)

// **NOT MY NOTE** Invoke the component function that renders the HTML list

//here we create a variable and use .document is an object that provides access to all HTML elements of a document.The querySelector() method allows you to select the first element that matches one or more CSS selectors.
const parentHTMLElement = document.querySelector(".potteryList")

//we then invoke the potteryList function that we imported at the top of the document and assign its return value to the parentHTMLElement variable. We then use dot notation to 
parentHTMLElement.innerHTML = PotteryList()



