export class Basket {
    constructor(productName, priceTag, pid) {
        this.productName = productName;
        this.priceTag = priceTag;
        this.pid = pid;
    }
    finalPrice() {
        return `in supermarket, product name is ${this.productName} , price is ${this.priceTag}$`;
    }
}
