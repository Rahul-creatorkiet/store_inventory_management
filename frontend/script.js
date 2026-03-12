const API = "http://localhost:8000/api/products";

async function addProduct(){

const data = {

productName: document.getElementById("productName").value,
productCode: document.getElementById("productCode").value,
category: document.getElementById("category").value,
supplierName: document.getElementById("supplierName").value,
quantityInStock: document.getElementById("quantityInStock").value,
reorderLevel: 5,
unitPrice: document.getElementById("unitPrice").value,
productType: "Non-Perishable"

};

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

alert("Product Added");

loadProducts();

}

async function loadProducts(){

const res = await fetch(API);
const products = await res.json();

const list = document.getElementById("productList");

list.innerHTML="";

products.forEach(p=>{

list.innerHTML += `
<li>
<b>${p.productName}</b> - ₹${p.unitPrice}
<button onclick="deleteProduct('${p._id}')">Delete</button>
</li>
`;

});

}

async function deleteProduct(id){

await fetch(API+"/"+id,{
method:"DELETE"
});

loadProducts();

}
