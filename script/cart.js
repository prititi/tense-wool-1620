
 var images = [
    "https://imagescdn.abof.com/img/app/product/7/758951-8666381.jpg?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/7/757328-8635213.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/6/691699-7361496.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/6/689120-7327971.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/7/757333-8635258.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/7/722097-7996693.jpg?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/6/691777-7362270.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/6/691701-7361516.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/6/689370-7330170.JPG?auto=format&w=320",
    "https://imagescdn.abof.com/img/app/product/6/689083-7327642.JPG?auto=format&w=320"
];

var imagesDivs = document.querySelectorAll("#slideshow > div");
var index = 0;
var setSize = 5;

setInterval(function() {
for (var i = 0; i < imagesDivs.length; i++) {
  imagesDivs[i].style.display = "none";
}
index++;
if (index > images.length - setSize) {
  index = 0;
}
for (var i = 0; i < setSize; i++) {
  imagesDivs[i].style.display = "block";
  imagesDivs[i].querySelector("img").src = images[index + i];
}
}, 1000);


// * ------------------------big image-----------------slide+click */
let previous= document.querySelector("#previous");
let next = document.querySelector("#next");

let arr=["https://assets0.mirraw.com/banner_sliders/10031/05_%281%29_main_webp.webp?1674107278",
         "https://assets0.mirraw.com/banner_sliders/10028/02_%282%29_main_webp.webp?1674107156",
         "https://assets0.mirraw.com/banner_sliders/10027/01_%281%29_main_webp.webp?1674107117",
         "https://assets0.mirraw.com/banner_sliders/10030/01_%282%29_main_webp.webp?1674107242"];

let i=0;

next.addEventListener("click", function(){
    i++;
    if (i>arr.length-1){
        i=0
    }
    document.querySelector("#slideimg").src=arr[i];
})

previous.addEventListener("click", function(){
    i--;
    if (i<0){
        i=arr.length-1
    }
    document.querySelector("#slideimg").src=arr[i];
})

function autoslide(){
    document.querySelector("#slideimg").src= arr[i];
    if (i<arr.length-1){
        i++;
    }
    else{
        i=0;
    }
}
setInterval(autoslide, 3000);


// ---------------ONLY IMAGE SECTION------------------------

let obj=[{
  "id": 1,
  "img": "https://assets0.mirraw.com/images/11035169/camel_shirt_small_webp.webp?1672146325",
  "name":"abof fashion"
},
{
  "id": 2,
  "img": "https://assets0.mirraw.com/images/6860739/GFSD_1_small.jpg?1552902665",
  "name":"abof fashion"
},
{
  "id": 3,
  "img": "https://assets0.mirraw.com/images/9011371/image_small_webp.webp?1621517117",
  "name":"abof fashion"
},
{
  "id": 4,
  "img": "https://assets0.mirraw.com/images/9208444/W20150MSH001_%281%29_small_webp.webp?1625661781",
  "name":"abof fashion"
},
{
  "id": 5,
  "img": "https://assets0.mirraw.com/images/10208157/3Q1A0955-1_small_webp.webp?1660628095",
  "name":"abof fashion"
},
{
  "id": 6,
  "img": "https://assets0.mirraw.com/images/10208133/3Q1A0715-1_small_webp.webp?1660628398",
  "name":"abof fashion"
},
{
  "id": 7,
  "img": "https://assets0.mirraw.com/images/9864515/image_small_webp.webp?1642413296",
  "name":"abof fashion"
},
{
  "id": 8,
  "img": "https://assets0.mirraw.com/images/9654759/image_small_webp.webp?1634390790",
  "name":"abof fashion"
},
{
  "id": 9,
  "img": "https://assets0.mirraw.com/images/9217641/W20161MSH001_%281%29_small_webp.webp?1625910014",
  "name":"abof fashion"
},
{
  "id": 10,
  "img": "https://assets0.mirraw.com/images/8767014/image_small_webp.webp?1614774670",
  "name":"abof fashion"
},
{
  "id": 11,
  "img": "https://assets0.mirraw.com/images/10383259/IMG_2105_small_webp.webp?1660022698",
  "name":"abof fashion"
},
{
  "id": 12,
  "img": "https://assets0.mirraw.com/images/10553045/SFCHDRS021_1_small_webp.webp?1657186336",
  "name":"abof fashion"
},
{
  "id": 13,
  "img": "https://assets0.mirraw.com/images/10568255/MSH2103a_small_webp.webp?1660225344",
  "name":"abof fashion"
},
{
  "id": 14,
  "img": "https://assets0.mirraw.com/images/8946202/S20045WSH004_%281%29_small_webp.webp?1620359592",
  "name":"abof fashion"
},
{
  "id": 15,
  "img": "https://assets0.mirraw.com/images/11047263/IMG_3962_720x_small_webp.webp?1672642704",
  "name":"abof fashion"
},]

// console.log(obj)

    function data(deta){
  
        deta.forEach((ele)=>{
          // console.log(ele.img);

           let div1=document.createElement("div");

           let img=document.createElement("img");
              img.setAttribute("src",ele.img)
          
           
          div1.append(img);
          document.querySelector("#datas").append(div1);
          let div01=document.createElement("h3");
          div01.innerText=ele.name;

          div1.append(img,div01);
          document.querySelector("#datas").append(div1);


        })

    }
    data(obj);

