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
