const { it, expect, test } = require("@jest/globals");
const { describe } = require("yargs");
const product = require('./productDetails');



test('should add item to the list', () => {
    product.addItemToCart("01002")
    expect(product.skuList).toStrictEqual([{ "barCode": "01002", "item": { "Price": 1.3, "name": "Apple" } }])

})

test('should remove item to the list', () => {
    product.addItemToCart("01003")
    product.removeItemToCart("01003")
    product.removeItemToCart("01002");
    expect(product.skuList).toHaveLength == 0;

})


test('should show total bill amount', () => {
    product.addItemToCart("01001")
    expect(product.cartTotal()).toEqual([0.99, "<div>Final Bill </div><div id=Banana>1 * Banana @0.99 = 0.99</div>"])

})

test('should show total bill amount', () => {
    product.addItemToCart("01002")
    product.addItemToCart("01003")
    expect(product.cartTotal()).toStrictEqual([3.95, `<div>Final Bill </div><div id=Banana>1 * Banana @0.99 = 0.99</div><div id=Apple>1 * Apple @1.3 = 1.3</div><div id=Carrot>1 * Carrot @1.66 = 1.66</div>`])

})