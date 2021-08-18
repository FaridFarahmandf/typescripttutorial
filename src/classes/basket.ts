import {PriceOfProducts} from '../interface/GroceriesPrice.js'

export class Basket implements PriceOfProducts {
    constructor(public productName:string , public priceTag:number ,private pid:number){}
    finalPrice(){
        return `in supermarket, product name is ${this.productName} , price is ${this.priceTag}$`
    }

} 