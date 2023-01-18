
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



// LOWER SLIDING PAGE

