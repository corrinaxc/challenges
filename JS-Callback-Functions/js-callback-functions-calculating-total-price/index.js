const products = [
    { name: "Saffron", price: 50 },
    { name: "Cinnamon", price: 6 },
    { name: "Cardamom", price: 12 },
    { name: "Turmeric", price: 9 },
    { name: "Paprika", price: 4 },
    { name: "Garam Masala", price: 10 },
    { name: "Vanilla Bean", price: 15 },
    { name: "Coriander", price: 6 },
];

function extractPrice(product) {
    return product.price;
}

function calculateTotalPrice(products, extractPrice) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice += extractPrice(products[i]);
    }
    console.log("Total Price:", totalPrice);
    return totalPrice;
}

calculateTotalPrice(products, extractPrice);