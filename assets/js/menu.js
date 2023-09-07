const test = document.querySelector(".toggle-icon");
const test2 = document.querySelector(".nav-container");
const main= document.querySelector(".body")
const arrowButton = document.querySelector(".arrowButton")
const arrow= document.querySelector(".arrow")
test.addEventListener("click", function () {
  test2.classList.toggle("pushed");
  main.classList.toggle("active");
});

arrowButton.addEventListener("click", () => {
  arrow.classList.toggle("activeArrow")
  var targetY = 1004;
  var currentY = window.scrollY;
  console.log(currentY);

  if (currentY >= 0 && currentY < 800) {
  
    window.scrollTo({
      top: currentY + targetY,
      behavior: "smooth" 
    });
  } else if (currentY >= 800) {
  
    window.scrollTo({
      top: currentY - targetY,
      behavior: "smooth" 
    });
  }
});






// function(){
//   
//   console.log(window.scrollY);
  
  
//   }