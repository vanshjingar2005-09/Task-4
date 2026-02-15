let products=[

{n:"iPhone 17Pro",c:"phone",p:134000,r:5,img:"iPhone 17Pro.png"},
{n:"Samsung Galaxy S23",c:"phone",p:28000,r:4,img:"Samsung Galaxy S23.png"},
{n:"Gaming Laptop Predator",c:"laptop",p:128000,r:5,img:"Gaming Laptop Predator.png"},
{n:"MacBook Air",c:"laptop",p:139000,r:5,img:"MacBook Air.png"},
{n:"Wireless Earbuds 1+",c:"audio",p:900,r:4,img:"Wireless Earbuds 1+.png"},
{n:"Bluetooth Speaker Sony",c:"audio",p:4000,r:4,img:"Bluetooth Speaker Sony.png"},
{n:"Smart Watch Noise",c:"phone",p:2500,r:5,img:"Smart Watch Noise.png"},
{n:"Mechanical Keyboard Red Gear",c:"laptop",p:1890,r:5,img:"Mechanical Keyboard Red Gear.png"},
{n:"Gaming Mouse Logitech",c:"laptop",p:3595,r:4,img:"Gaming Mouse Logitech.png"},
{n:"Noise Headphones ",c:"audio",p:4000,r:5,img:"Noise Headphones.png"},
{n:"Android Tablet Lenovo",c:"phone",p:19000,r:3,img:"Android Tablet Lenovo.png"},
{n:"Spigen USB Hub ",c:"laptop",p:900,r:4,img:"Spigen USB Hub.png"},
{n:"Monitor 27inch Dell",c:"laptop",p:15000,r:5,img:"Monitor 27inch Dell.png"},
{n:"Power Bank Boat ",c:"phone",p:1500,r:4,img:"Power Bank Boat.png"},
{n:"Studio Mic Digitek",c:"audio",p:2500,r:5,img:"Studio Mic Digitek.png"}

];

let cart=[];
let wish=[];

const search=document.getElementById("search");
const filter=document.getElementById("filter");
const sortBox=document.getElementById("sort");
const productsDiv=document.getElementById("products");
const cartPanel=document.getElementById("cart");
const wishPanel=document.getElementById("wish");

search.oninput=render;
filter.onchange=render;
sortBox.onchange=render;

function notify(text){
let n=document.getElementById("note");
n.innerText=text;
n.style.display="block";
setTimeout(()=>n.style.display="none",2000);
}

function render(){

let list=[...products];

let s=search.value.toLowerCase();
let f=filter.value;
let sort=sortBox.value;

if(s) list=list.filter(p=>p.n.toLowerCase().includes(s));
if(f!="all") list=list.filter(p=>p.c==f);

if(sort=="low") list.sort((a,b)=>a.p-b.p);
if(sort=="high") list.sort((a,b)=>b.p-a.p);

let html="";

list.forEach((p,i)=>{

html+=`
<div class="card">
<img src="${p.img}">
<h3>${p.n}</h3>
<p>₹${p.p}</p>
<p>${"⭐".repeat(p.r)}</p>
<button onclick="addCart(${i})">Add Cart</button>
<button onclick="addWish(${i})">❤️</button>
</div>
`;

});

productsDiv.innerHTML=html;

}

function addCart(i){
cart.push(products[i]);
notify("Added in your cart");
updatePanels();
}

function addWish(i){
wish.push(products[i]);
notify("Added to wishlist");
updatePanels();
}

function toggleCart(){
cartPanel.classList.toggle("show");
}

function toggleWish(){
wishPanel.classList.toggle("show");
}

function updatePanels(){

cartPanel.innerHTML="<h2>Cart</h2>"+cart.map(p=>p.n).join("<br>");
wishPanel.innerHTML="<h2>Wishlist</h2>"+wish.map(p=>p.n).join("<br>");

}

render();
