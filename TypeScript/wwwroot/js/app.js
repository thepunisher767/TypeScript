function buildMountains() {
    var mtOne = {
        name: 'Kilimanjaro',
        height: 19341,
    };
    var mtTwo = {
        name: 'Everest',
        height: 29029,
    };
    var mtThree = {
        name: 'Denali',
        height: 20310,
    };
    var mountains = [
        mtOne,
        mtTwo,
        mtThree
    ];
    return mountains;
}
function getProducts() {
    var product1 = {
        name: 'motor',
        price: 10.00,
    };
    var product2 = {
        name: 'sensor',
        price: 12.50,
    };
    var product3 = {
        name: 'LED',
        price: 1.00,
    };
    var products = [
        product1,
        product2,
        product3
    ];
    return products;
}
function inventoryCheck(products) {
    var inventoryItem1 = {
        product: products[0],
        quantity: 10,
    };
    var inventoryItem2 = {
        product: products[1],
        quantity: 4,
    };
    var inventoryItem3 = {
        product: products[2],
        quantity: 20,
    };
    var inventory = [
        inventoryItem1,
        inventoryItem2,
        inventoryItem3
    ];
    return inventory;
}
///////////////////////////////////////////
function findNameOfTallestMountain() {
    var max = null;
    var tallest = null;
    var mountains = buildMountains();
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > max) {
            max = mountain.height;
            tallest = mountain.name;
        }
    }
    console.log(tallest);
}
function calcAverageProductPrice() {
    var products = getProducts();
    var total = null;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    var avg = total / products.length;
    console.log(avg);
}
function calcInventoryValue() {
    var inventory = inventoryCheck(getProducts());
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        total += (item.product.price * item.quantity);
    }
    console.log(total);
}
//# sourceMappingURL=app.js.map