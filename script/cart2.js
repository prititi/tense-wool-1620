let cartdata = JSON.parse(localStorage.getItem("cartdata"))||[];
console.log(cartdata)
    let maincart = document.getElementById("container1")
    let tbody = document.getElementById("tbody")
    let totalprice = document.getElementById("totaladd")
    let discount = document.getElementById("discount")
   let priceitem = document.getElementById("priceitem")
   let total = document.getElementById("totalprice")
   let cart = document.getElementById("carticon") 
   let gst = document.getElementById("gstcal")
   function appending(cartdata){
        maincart.innerHTML = null;
       cartdata.forEach((element,index) => {
       
        let division = document.createElement("div");
        division.setAttribute("class", "card")
        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","imagediv")
        let image = document.createElement("img");
        image.setAttribute("src",element.avatar)
        let detaildiv = document.createElement("div");
        detaildiv.setAttribute("class","detaildiv")
        let name = document.createElement("h2");
        let size = document.createElement("h4");
        let category = document.createElement("p");
        let price = document.createElement("p")
        let Delivery = document.createElement("p")
        
        Delivery.innerHTML = `<b>Delivery Date</b> - Delivery by Sun Jan 22 | <span id="green">Free</span> <strike>₹40</strike>`  ;
        let remove = document.createElement("button")
        remove.setAttribute("class","removebtn")
        
        name.innerText = element.name;
        size.innerText = "SIZE:- "+element.size;
        category.innerText = "Category:- "+element.categories;
        price.innerHTML = `<b>Price:-</b>   <b>₹${element.price}</b> <strike id="cut">₹1600</strike> <span class="pink">70%</span> </p>`
          
         // for increment the price
        
        let increment = document.createElement("button");
        increment.setAttribute("class","countbtn")
        increment.innerText = "+";
        increment.addEventListener("click",()=>{
            element.quantity++;
            quantity.innerText = element.quantity
          })
         
        
        let quantity = document.createElement("span");
        quantity.innerText = 1;
        
        let decrement = document.createElement("button");
        decrement.setAttribute("class","countbtn")
        decrement.innerText = "-";
        decrement.addEventListener("click",()=>{
            if(quantity.innerText!=0){
            element.quantity--;
            quantity.innerText = element.quantity
            }
          })
        

        // increament end

        remove.innerText = "REMOVE"
        remove.addEventListener("click",()=>{
            let deleted = cartdata.filter((ele,ind)=>{
                if(index === ind){
                    return false;
                }else{
                    return true;
                }
            })
            cartdata = deleted;
            localStorage.setItem("cartdata",JSON.stringify(cartdata))
            appending(cartdata)
        })
        imgdiv.append(image);
        detaildiv.append(name,size,price,category,Delivery,decrement,quantity,increment,remove)
        division.append(imgdiv,detaildiv)
        maincart.append(division)
        
    });
    let sum = 0
    let item = 0
    cartdata.forEach((ele,ind)=>{
         total.innerHTML = `<div id="totalprice" class="price">₹ ${(sum+=ele.price).toFixed(1)}</div>`
            discount.innerHTML =`<div id="discount" class="green" class="price">-₹${(sum/100*5).toFixed(1)}</div>`   
            priceitem.innerHTML = `<div id="priceitem" class="head">Price(${cartdata.length} items)</div>`
            totalprice.innerHTML=`<div id="totaladd"  class="price">₹${Math.round(sum-=(sum/100*10))}</div>`
            gst.innerHTML=`<div class="green" id="gstcal" class="price">₹${(sum*(18/100)).toFixed(1)}</div>`
           cart.innerHTML = `<i class="fa badge fa-lg" value=${cartdata.length}>&#xf07a;</i>`   
       
     })
 
  }
   appending(cartdata)
   
 