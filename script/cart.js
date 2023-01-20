
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


// ---------------ONLY IMAGE SECTION------------------------

let obj=[{
  "id": 1,
  "img": "https://assets0.mirraw.com/images/11035169/camel_shirt_small_webp.webp?1672146325"
},
{
  "id": 2,
  "img": "https://assets0.mirraw.com/images/6860739/GFSD_1_small.jpg?1552902665"
},
{
  "id": 3,
  "img": "https://assets0.mirraw.com/images/9011371/image_small_webp.webp?1621517117"
},
{
  "id": 4,
  "img": "https://assets0.mirraw.com/images/9208444/W20150MSH001_%281%29_small_webp.webp?1625661781"
},
{
  "id": 5,
  "img": "https://assets0.mirraw.com/images/10208157/3Q1A0955-1_small_webp.webp?1660628095"
},
{
  "id": 6,
  "img": "https://assets0.mirraw.com/images/10208133/3Q1A0715-1_small_webp.webp?1660628398"
},
{
  "id": 7,
  "img": "https://assets0.mirraw.com/images/9864515/image_small_webp.webp?1642413296"
},
{
  "id": 8,
  "img": "https://assets0.mirraw.com/images/9654759/image_small_webp.webp?1634390790"
},
{
  "id": 9,
  "img": "https://assets0.mirraw.com/images/9217641/W20161MSH001_%281%29_small_webp.webp?1625910014"
},
{
  "id": 10,
  "img": "https://assets0.mirraw.com/images/8767014/image_small_webp.webp?1614774670"
},
{
  "id": 11,
  "img": "https://assets0.mirraw.com/images/10383259/IMG_2105_small_webp.webp?1660022698"
},
{
  "id": 12,
  "img": "https://assets0.mirraw.com/images/10553045/SFCHDRS021_1_small_webp.webp?1657186336"
},
{
  "id": 13,
  "img": "https://assets0.mirraw.com/images/10568255/MSH2103a_small_webp.webp?1660225344"
},
{
  "id": 14,
  "img": "https://assets0.mirraw.com/images/8946202/S20045WSH004_%281%29_small_webp.webp?1620359592"
},
{
  "id": 15,
  "img": "https://assets0.mirraw.com/images/11047263/IMG_3962_720x_small_webp.webp?1672642704"
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

        })

    }
    data(obj);

