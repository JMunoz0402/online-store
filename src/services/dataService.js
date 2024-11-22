
var catalog = [
    {
        "title": "Strawberry",
        "category": "Fruit",
        "price": 12.99,
        "image": "https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/how-to-grow-your-own-tasty-strawberries/strawberries-header-og.jpg",
        "_id": "2947"
    },
    {
        "title": "Carrots",
        "category": "Vegetable",
        "price": 7.89,
        "image": "/images/carrots.webp",
        "_id": "33347"
    },
    {
        "title": "Banana",
        "category": "Fruit",
        "price": 4.99,
        "image": "/images/bananas.jpg.webp",
        "_id": "9384"
    },
    {
        "title": "Tomato",
        "category": "Vegetable",
        "price": 3.49,
        "image": "/images/TOMATOES.jpg",
        "_id": "1294"
    },
    {
        "title": "Almonds",
        "category": "Nut",
        "price": 15.99,
        "image": "/images/almonds.jpg",
        "_id": "4827"
    },
    {
        "title": "Milk",
        "category": "Dairy",
        "price": 2.99,
        "image": "/images/milk.jpg",
        "_id": "7261"
    },
    {
        "title": "Blueberries",
        "category": "Fruit",
        "price": 6.99,
        "image": "https://www.health.com/thmb/CtlUl-Ka_h64xiMh7c-eZWvs87c=/724x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-670247782-33772a33262945fc97802b6ddd63e5e0.jpg",
        "_id": "5562"
    },
    {
        "title": "Spinach",
        "category": "Vegetable",
        "price": 5.49,
        "image": "/images/Spinach.jpg",
        "_id": "6738"
    },
    {
        "title": "Cheddar Cheese",
        "category": "Dairy",
        "price": 9.99,
        "image": "/images/cheddarcheese.jpg",
        "_id": "8451"
    },
    {
        "title": "Cashews",
        "category": "Nut",
        "price": 18.49,
        "image": "/images/cashews.jpg",
        "_id": "9283"
    },
    {
        "title": "Eggs",
        "category": "Dairy",
        "price": 7.49,
        "image": "/images/eggs.jpeg",
        "_id": "595959"
    },
    {
        "title": "Walnut",
        "category": "Nut",
        "price": 1.40,
        "image": "/images/walnut.jpeg",
        "_id": "89765"
    }

];

var categories = ["Fruits", "Nut", "Dairy", "Vegetable"];

class DataService {

    getProducts() {
        // todo: call the server to retrieve products

        // hardcode values
        return catalog;
    }

    getCategories() {
        // todo: call the server

        // hardcoded values
        return categories;
    }

}

export default new DataService();
