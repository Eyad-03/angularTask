let products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },

    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },

    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];

function loadProducts(): void {

    let container = document.getElementById("products");

    if (container == null) {
        return;
    }

    for (let i = 0; i < products.length; i++) {

        container.innerHTML += `
            <div>
                <h3>${products[i].name}</h3>
                <p>${products[i].description}</p>
                <p>Price: ${products[i].price} USD</p>
            </div>
            <hr>
        `;

    }

}