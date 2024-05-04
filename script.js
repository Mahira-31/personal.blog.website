document.addEventListener('DOMContentLoaded', function () {

    const popupOverlay = document.getElementById('popupOverlay');

    const popup = document.getElementById('popup');

    const closePopup = document.getElementById('closePopup');

    const emailInput = document.getElementById('emailInput');


    function openPopup() {

        popupOverlay.style.display = 'block';

    }

    function myFunction(x) {
        x.classList.toggle("change");
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