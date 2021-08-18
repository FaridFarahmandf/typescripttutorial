export class OnlineShop {
    constructor(productName, priceTag, pid) {
        this.productName = productName;
        this.priceTag = priceTag;
        this.pid = pid;
    }
    ;
    finalPrice() {
        return `in Onlineshop, the product name is ${this.productName} , price is ${this.priceTag}$`;
    }
}
