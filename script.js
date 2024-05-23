document.addEventListener('DOMContentLoaded', function () {

    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const emailInput = document.getElementById('emailInput');

function openPopup() {
    popupOverlay.style.display = 'block';
}

function closePopupFunc() {
    popupOverlay.style.display = 'none';
}

function submitForm() {
    const email = emailInput.value;
    console.log(`Email submitted: ${email}`);
    closePopupFunc(); 
}
openPopup();
closePopup.addEventListener('click', closePopupFunc);

popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
        closePopupFunc();
}
});
});
//popup signup
function submitForm() {
    var userEmail = document.getElementById("emailInput").value;
    document.getElementById("popup").style.display = "none";
    var username = userEmail.split("@")[0];
    alert("Successfully signed-up");
    document.getElementById("welcomeMessage").innerHTML = "Welcome, " + username + "!";
}
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
    setInterval(() => {
      plusSlides(1);
    }, 2000); 
