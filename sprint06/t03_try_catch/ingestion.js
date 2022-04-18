exports.Ingestion = class {
    meal_type =['breakfast', 'lunch', 'dinner'];
    products = [];
    
    constructor(option) {
        this.id = option;
        this.day_of_diet = option;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(product) {
        let result;
        this.products.forEach(item => {
            if (item.name == product)
                result = item;
        });
        return result;
    }

    getFromFridge(product) {
        let productInfo = this.getProductInfo(product);
        EatException(productInfo);
    }
}