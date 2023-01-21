let maincontainer = document.querySelector(".wrapper")
let sortingdata = document.getElementById("sorting")

// price filter *************************************************
        let form = document.getElementById("pricefilter")
        form.addEventListener("submit",(e)=>{
             e.preventDefault();


            let pricefilter = data.filter((element,index)=>{
                if(element.price>=form.minprice.value && element.price<=form.maxprice.value){
                    return true;
                }else{
                    return false;
                }
             })
             appendingdata(pricefilter)
             
            
        })
 // price filter *************************************************
  // category filter *************************************************
        let tshirt = document.getElementById("tshirt");
        let shorts = document.getElementById("shorts");
        let trackpants = document.getElementById("trackpants");
        tshirt.addEventListener("change",()=>{
            if(tshirt.checked == true){
            let categoryfilter = data.filter((ele,ind)=>{
            if(ele.categories === tshirt.value){
                return true;
            }else{
                return false;
            }
         })
           appendingdata(categoryfilter)
        }else if(shorts.checked == false){
            appendingdata(data)
            
        }
        })
        shorts.addEventListener("change",()=>{
            if(shorts.checked == true){
            let categoryfilter = data.filter((ele,ind)=>{
            if(ele.categories === shorts.value){
                return true;
            }else{
                return false;
            }
         })
           appendingdata(categoryfilter)
        }else if(shorts.checked == false){
            appendingdata(data)
            
        }
        })
        trackpants.addEventListener("change",()=>{
            if(trackpants.checked == true){
            let categoryfilter = data.filter((ele,ind)=>{
            if(ele.categories === trackpants.value){
                return true;
            }else{
                return false;
            }
         })
           appendingdata(categoryfilter)
        }else if(trackpants.checked == false){
            appendingdata(data)
            
        }
        })
    // category filter *************************************************     
    



    //    side filter bar start
    var acc = document.getElementsByClassName("accordion");
     var i;

   for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
  });
}

// discoutfilter******************************************
   let discountdata = document.getElementById("discount")
   let nondiscount = document.getElementById("nondiscount")
   discountdata.addEventListener("change",()=>{
            if(discountdata.checked == true){
            let discountfilter = data.filter((ele,ind)=>{
            if(ele.discount == discountdata.value){
                return true;
            }else{
                return false;
            }
         })
           appendingdata(discountfilter)
        }else if(discountdata.checked == false){
            appendingdata(data)
            
        }
        })
        nondiscount.addEventListener("change",()=>{
            if(nondiscount.checked == true){
            let nondiscountfilter = data.filter((ele,ind)=>{
            if(ele.discount == nondiscount.value){
                return true;
            }else{
                return false;
            }
         })
           appendingdata(nondiscountfilter)
        }else if(nondiscount.checked == false){
            appendingdata(data)
            
        }
        })



// discoutfilter******************************************
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("Demo1");
var sticky = navbar.offsetHeight;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}
 
//    side filter bar end
     
// button filter 

let size32 = document.querySelector(".size32");
let size34 = document.querySelector(".size34")
size32.addEventListener("click",()=>{
    
 let filter =  data.filter((ele,index)=>{
        if(ele.size == size32.value){
            return true;
        }else{
            return false;
        }
    })
    sortingdata.addEventListener("change",()=>{
          let sortdata = filter.sort((a,b)=>{
          if(sortingdata.value == "ascending"){
           return a.price - b.price
          }else if(sortingdata.value == "descending"){
           return b.price - a.price
          }
        })
        appendingdata(sortdata)
        })
   
     
  appendingdata(filter)
  
})
size34.addEventListener("click",()=>{
    
    let filter =  data.filter((ele,index)=>{
           if(ele.size == size34.value){
               return true;
           }else{
               return false;
           }
       })
       sortingdata.addEventListener("change",()=>{
          let sortdata = filter.sort((a,b)=>{
          if(sortingdata.value == "ascending"){
           return a.price - b.price
          }else if(sortingdata.value == "descending"){
           return b.price - a.price
          }
        })
        appendingdata(sortdata)
        })
   
     appendingdata(filter)
     
   })





// button filter end

     



        
        let data = []
        const url = "https://63c636e7dcdc478e15bd1636.mockapi.io/api/v1/Clothes"
          fetch(url)
          .then((res)=>{
            return res.json()
          })
          .then((result)=>{
            data = result
            console.log(data)
            appendingdata(data)
          })
           
          sortingdata.addEventListener("change",()=>{
          let sortdata = data.sort((a,b)=>{
          if(sortingdata.value == "ascending"){
           return a.price - b.price
          }else if(sortingdata.value == "descending"){
           return b.price - a.price
          }
        })
        appendingdata(sortdata)
        })
          
          

     let cart = document.getElementById("cart")


          function appendingdata(data){
            maincontainer.innerHTML =null
            data.forEach((element,index) => {
                let division = document.createElement("div");
                division.setAttribute("class", "card");
                let image = document.createElement("img");
                 image.setAttribute("src", `${element.avatar}`);
               let para = document.createElement("p");
                para.innerText = element.name;
                let price = document.createElement("p");
                price.innerHTML = `<p class="pink">₹${element.price}  <strike id="cut">₹1600</strike> <span class="pink">70%</span> </p>`;
                let button = document.createElement("button");
                button.setAttribute("class","addtocart")
                button.innerText = "Add to Cart"
                button.addEventListener("click",()=>{
                    let arr = JSON.parse(localStorage.getItem("cartdata"))||[];
                    console.log(arr)
                    let flag = false;
                    for(let x=0; x<arr.length; x++){
                        if(arr[x].id == element.id){
                            flag = true
                        }
                    }
                    if(flag){
                        alert("Alerady in the Cart !")
                        
                    }else{
                       alert("Added to the Cart !")
                       arr.push(element);
                       
                       localStorage.setItem("cartdata",JSON.stringify(arr))
                    }
                    cart.innerHTML = `<i class="fa badge fa-lg" value=${arr.length}>&#xf07a;</i>`
                   
                })
                division.append(image,para,price,button)
                if(element.type == "Boykid"){
                maincontainer.append(division)
                }
               
            });
          }
