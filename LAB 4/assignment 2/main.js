var myproducts = document.getElementById("products");
var products 
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(function(products){
    products.forEach(function(product){
    myproducts.innerHTML +=` <div class="content"> 
    <img src= "${product.image}">
    <div class="product"> 
        <p>${product.title}</p>
        <hr>
        <p>${product.price}</p>
        <hr>
        <p>${product.category}</p>
        <hr>
    </div> 
    </div> `
    document.readyState = (function(product){
        product.style.transform = "rotate3d(1,5,1, 45deg)";
        product.style.transition = "transform .200s .200s"
        product.style.transform = "rotate3d(0,0,0, 45deg)";
    })
});}
)