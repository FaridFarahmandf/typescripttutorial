import {PriceOfProducts} from '../interface/GroceriesPrice.js'

export class OnlineShop implements PriceOfProducts {
    constructor(public productName:string , public priceTag:number ,private pid:number){} ;
    finalPrice() {
        return `in Onlineshop, the product name is ${this.productName} , price is ${this.priceTag}$`
    }
}