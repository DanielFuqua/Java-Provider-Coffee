export const Product = (productObject) => {
    return `
    
    <article>
        <div>Name: ${productObject.name}</div>
        <div>Bean Type: ${productObject.beanType}</div>
        <div>RoastType: ${productObject.roastType}</div>
        <div>Price: ${productObject.price}</div>
    </article>
    `
}