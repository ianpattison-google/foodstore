module.exports = function() {
    return {
        categories: ["Fruit", "Vegetables", "Meat"],
        products: [
            { id: 1, name: "Apple", category: "Fruit", description: "Pink Lady", price: 0.60 },
            { id: 2, name: "Orange", category: "Fruit", description: "Seville", price: 0.70 },
            { id: 3, name: "Strawberries", category: "Fruit", description: "Spanish", price: 2.00 },
            { id: 4, name: "Carrot", category: "Vegetables", description: "", price: 0.30 },
            { id: 5, name: "Broccoli", category: "Vegetables", description: "Purple sprouting", price: 1.00 },
            { id: 6, name: "Onions", category: "Vegetables", description: "3 pack", price: 0.50 },
            { id: 7, name: "Bananas", category: "Fruit", description: "Free trade", price: 2.50 },
            { id: 8, name: "Ham", category: "Meat", description: "4 thick slices", price: 2.75 },
            { id: 9, name: "Sausages", category: "Meat", description: "Caramelised Onion", price: 3.00 }
        ],
        orders: []
    }
}