const menuBar = document.getElementById('drop-menu');
const menuDetail = document.getElementById('tab-detail');
const sortBar = document.getElementById('sort-menu');
const sortBarDetail = document.getElementById('sort-tab');

function activeTab(){
    menuDetail.classList.add('activeBox')
}
function activeSortTab(){
    sortBarDetail.classList.add('activeSortBox')
}

menuBar.onclick = activeTab;
sortBar.onclick = activeSortTab;

const cartBtn = document.querySelectorAll('.dog-things .row .col-md-9 .row .col-md-3 .foot .footer-btn button:last-child');

cartBtn.forEach(function(button,index){
   button.addEventListener("click", function(event){
    var btnItem = event.target;
    var product = btnItem.parentElement.closest('.col-md-3');
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("a").innerText;
    var productPrice = product.querySelector("span").innerText;
    addToCart(productImg,productName,productPrice);
   })
})


function addToCart(productImg,productName,productPrice){
    var addTr =document.createElement('tr');
    var cartItem = document.querySelectorAll('tbody tr');
    for (let i=0; i<cartItem.length; i++){
      var productCheck = document.querySelectorAll('.shopping-cart tbody td:nth-child(2)');
      if (productCheck[i].innerHTML == productName){
        alert('Already have this item');
        return
      }
    }
    
    var trContent = '<tr><td><img src="'+productImg+'" alt=""></td><td>'+productName+'</td><td><p>'+productPrice+'</p></td><td><input type="number" value="1" min="1"></td><td><i class="fa-solid fa-xmark"></i></td></tr>';
    addTr.innerHTML = trContent;
    var cartTable = document.querySelector('tbody');
    cartTable.append(addTr)
    deleteItem()
    cartTotal()
    
}

function cartTotal(){
    var total = 0;
    var cartItem = document.querySelectorAll('tbody tr');
    for (let i=0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector('input').value;
        var productPrice = cartItem[i].querySelector('p').innerHTML.slice(1);
        totalProductPrice = inputValue * productPrice;
        total += totalProductPrice;
    }
    var shoppingBill = document.querySelector('.cart-total-price span');
    shoppingBill.innerHTML = '$' + total;
    var cartCountNumb = document.querySelector('.header-container .col-md-2:last-child .cart-icon span').innerHTML;
    cartCountNumb = cartItem.length;
    inputChange()
}



function deleteItem(){
    var cartItem = document.querySelectorAll('tbody tr');
    for (let i=0; i<cartItem.length; i++){
        var deleteIcon = document.querySelectorAll('.shopping-cart tbody td i');
        deleteIcon[i].addEventListener("click", function(event){
            var deleteCart = event.target;
            var delCart = deleteCart.parentElement.parentElement;
            delCart.remove()
            cartTotal()
        })
        
    }   
}


function inputChange(){
    var cartItem = document.querySelectorAll('tbody tr');
    for (let i=0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector('.shopping-cart tbody td input');
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }   
}

 
const showShoppingCart = document.querySelector('.header-container .col-md-2:last-child .cart-icon:last-child');
const escapeCart = document.querySelector(".shopping-cart .escape-btn i");
showShoppingCart.addEventListener("click", function(){
    document.querySelector('.shopping-cart').style.right = "0";
})
escapeCart.addEventListener("click", function(){
    document.querySelector('.shopping-cart').style.right = "-100%";
})

// for (let i = l; i< cartBtn.length;i++){
//     cartBtn[i].addEventListener('click', () =>{
//         cartCount()
//     })
// }
// function cartCount(){
//     let prdCount = localStorage.getItem('cartsCount');
//     let cartShow = document.querySelector('.header-container .col-md-2:last-child .cart-icon span');
//     prdCount = parseInt(prdCount);
//     if(prdCount){
//         localStorage.setItem('cartsCount', prdCount +1);
//         cartShow.textContent = prdCount +1;
//     } else {
//         localStorage.setItem('cartsCount', 1)
//         cartShow.textContent = prdCount = 1;
//     }
// }

// function displayCart(){
//     let prdCount = localStorage.getItem('cartsCount');
//     if(prdCount){
//         cartShow.textContent = prdCount;
//     }
// }
// displayCart();

