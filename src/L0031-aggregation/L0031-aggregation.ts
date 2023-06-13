export class ShoppingCart {
    private readonly products: Product[] = [];

    insertProducts(...products: Product[]): void {
        for (const product of products) {
            this.products.push(product);
        }
    }

    totalProducts(): number {
        return this.products.length;
    }

    totalPrice(): number {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }
}

export class Product {
    constructor(public name: string, public price: number) {}
}

const apple = new Product('Apple', 1.99);
const cereal = new Product('Kellogs', 12.5);
const soda = new Product('Coca-Cola', 5.8);

const cart = new ShoppingCart();
cart.insertProducts(apple, apple, apple, cereal, soda, soda);
console.log(
    `Total products: ${cart.totalProducts()} | Total price: ${cart.totalPrice()}`,
);
