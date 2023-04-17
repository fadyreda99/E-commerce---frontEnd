// navbar

const nav = document.getElementById('navbar');
const bar = document.getElementById('bar');
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })

  
}

if(close){
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}

/*------------------------------------------------------*/

//shop pages add link of product details to all products in shop page
var shopProducts = document.getElementsByClassName('shopProducts')
console.log(shopProducts);
for(var i=0; i < shopProducts.length; i++){
 

    shopProducts[i].addEventListener('click', function(){
       window.location.href='product.html';
    })
}
/*------------------------------------------------------*/
//single product details slider
var mainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');

for(var i=0; i < smallImg.length; i++){
 

    smallImg[i].addEventListener('click', function(){
        mainImg.src =  this.src;
    })
}