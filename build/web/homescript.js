/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const btn = document.querySelectorAll("button");
//console.log(btn);

btn.forEach(function(button, index){
   button.addEventListener("click", function(event){
       var btnItem = event.target;
       var product = btnItem.parentElement;
       var productImg = product.querySelector("img").src;
       
       var productName = product.querySelector("H1").innerText;
       var productPrice = product.querySelector("span").innerText;
       
       
       addCart(productImg,productName,productPrice);
       
   });
});

function addCart(productImg,productName,productPrice){
    var addtr = document.createElement("tr");
    var trcontent = '<tr><td style="display:flex; align-items: center"><img style="width:70px;" src="'+productImg+'" alt="">'+productName+'</td><td><span>'+productPrice+'</span><sup>VND</sup></td><td><input style="width: 30px; outline: none" type="number" value="1" min="0"></td><td style="cursor:pointer">Xoa</td></tr>';
    
                        
                            
                            
                            
                            

                        
                        
    addtr.innerHTML = trcontent;
    
    var cartTable = document.querySelector("tbody");
    
    cartTable.append(addtr);
    cartTotal();
    
}
// ----------tinh total Price
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr");
    var totalRes = 0;
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector("span").innerText;
        
        var   total = inputValue * productPrice*1000;
        
        
        totalRes +=total;
        console.log(totalRes);
        
    }
    
    var totalResult = document.querySelector(".price-total span");
    
    totalResult.innerHTML = totalRes;
    
}