/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const btn = document.querySelectorAll("button");
//console.log(btn);

btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;

        var productName = product.querySelector("H1").innerText;
        var productPrice = product.querySelector("span").innerText;


        addCart(productImg, productName, productPrice);


    });
});

function addCart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title");
        if (productT[i].innerHTML == productName) {
            alert("Your product had been in cart");
            return
        }
    }
    var trcontent = '<tr><td style="display:flex; align-items: center"><img style="width:70px;" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td><td><p><span class="price">' + productPrice + '</span><sup>VND</sup></p></td><td><input style="width: 30px; outline: none" type="number" value="1" min="1"></td><td style="cursor:pointer"><span class="cartDelete">Delete</span></td></tr>';



    addtr.innerHTML = trcontent;

    var cartTable = document.querySelector("tbody");

    cartTable.append(addtr);
    cartTotal();
    deleteCart();


}
// ----------tinh total Price
function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalRes = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".price").innerText;

        var total = inputValue * productPrice * 1000;


        totalRes = totalRes + total;
        inputChange();
//        console.log(totalRes);

    }

    var totalResult = document.querySelector(".price-total span");
    var cartPrice = document.querySelector(".ok btn-header span");

    totalResult.innerHTML = totalRes.toLocaleString('de-DE');
    cartPrice.innerHTML = totalResult.toLocaleString('de-DE');

}


function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cartDelete");
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target;
            var cartItemR = cartDelete.parentElement.parentElement;
            cartItemR.remove();
            cartTotal();

        });

    }
}

function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            cartTotal();
        });
    }
}

const cartBtn = document.querySelector(".close-cart");
const cartShow = document.querySelector(".ok");
cartShow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0"
})

cartBtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%";
});
