
async function getProducts(){
    const response =await fetch("https://dummyjson.com/products");

    const data=await response.json();
    const products=data.products;

    const result =products.map( function(product){

        return `
        <div class='product-card'>
    
        <img class='product-img' src=${product.thumbnail}>
        <span>${product.brand}</span>
        <h2>${product.title}</h2>
        <h3>${product.price} $ </h3>
        </div>` ;

    }

    ).join('');
    document.querySelector(".products-list").innerHTML=result;
}


getProducts() ;