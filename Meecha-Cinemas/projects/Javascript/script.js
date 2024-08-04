// function click() {
//     // Get the input element
//     var input = document.getElementById("SearchInput");
  
//     // Get the value of the input
//     var value = input.value;
  
//     // Display the value
//     alert(value);
//     // or you can use alert(value) to display it in an alert box
//   }
// var random = Math.floor(Math.random()*100000);
// document.querySelector("#RandomNum").innerHTML = `${random} The site is under consturction`;

// document.getElementById("SearchButton");
// var inputEL = document.getElementById("search")
// function onClick(){
//     console.log(inputEL)
// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
 
