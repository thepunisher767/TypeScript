interface Mountain {
    name: String,
    height: number
}

function buildMountains() {
    let mtOne = {
        name: 'Kilimanjaro',
        height: 19341,
    }
    let mtTwo = {
        name: 'Everest',
        height: 29029,
    }
    let mtThree = {
        name: 'Denali',
        height: 20310,
    }

    let mountains: Mountain[] = [
        mtOne,
        mtTwo,
        mtThree
    ]
    return mountains;
}
//////////////////////////////////////////

interface Product {
    name: String,
    price: number
}

function getProducts() {
    let product1 = {
        name: 'motor',
        price: 10.00,
    }
    let product2 = {
        name: 'sensor',
        price: 12.50,
    }
    let product3 = {
        name: 'LED',
        price: 1.00,
    }

    let products: Product[] = [
        product1,
        product2,
        product3
    ]
    return products;
}
///////////////////////////////////////////


interface InventoryItem {
    product: Product,
    quantity: number
}

function inventoryCheck(products: Product[]) {
    let inventoryItem1 = {
        product: products[0],
        quantity: 10,
    }
    let inventoryItem2 = {
        product: products[1],
        quantity: 4,
    }
    let inventoryItem3 = {
        product: products[2],
        quantity: 20,
    }

    let inventory: InventoryItem[] = [
        inventoryItem1,
        inventoryItem2,
        inventoryItem3
    ]
    return inventory;
}
///////////////////////////////////////////

function findNameOfTallestMountain() {
    let max = null;
    let tallest = null;
    let mountains = buildMountains();
    for (let mountain of mountains) {
        if (mountain.height > max) {
            max = mountain.height;
            tallest = mountain.name;
        }
    }
    console.log(tallest);
}

function calcAverageProductPrice() {
    let products = getProducts();
    let total = null;
    for (let product of products) {
        total += product.price;
    }
    let avg = total / products.length;
    console.log(avg);
}

function calcInventoryValue() {
    let inventory = inventoryCheck(getProducts());
    let total:number = 0;
    for (let item of inventory) {
        total += (item.product.price * item.quantity);
    }
    console.log(total);
}