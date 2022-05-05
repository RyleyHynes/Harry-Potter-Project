import { usePottery } from "./PotteryCatalog.js"


export const PotteryList = () => {
//must get the items to be sold from PotteryCatalog.js
const potteryCollection = usePottery()

//create string
let htmlString = "";

//use for loop to iterate 
for (const potteryObj of potteryCollection) {
    //start HTML string inside of loop and utilize properties
    htmlString += `<section class="pottery" id="pottery--${potteryObj.id}">
    <h2 class="pottery_shape">${potteryObj.shape}</h2>
    <div class="pottery_properties">
    Item weighs ${potteryObj.weight} grams and is ${potteryObj.height} cm in height
    </div>
    <div class="pottery_price">
    </div>
    </section>`
}
return htmlString
}