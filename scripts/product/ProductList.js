import { useProducts } from "./productDataProvider.js";
import { Product } from "./Product.js";

const contentTarget = document.querySelector(".container__product")
export const ProductList = () => {
    contentTarget.innerHTML = "<h2>Products</h2>"
    const productArray = useProducts()
    for (const productObject of productArray) {
        const productHTML = Product(productObject)
        contentTarget.innerHTML += productHTML
    }
}