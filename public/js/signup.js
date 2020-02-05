$(document).ready(function () {
    // Getting references to our form and input
    let signUpForm = $("form.signup");
    let firstNameInput = $("input#firstname-input");
    let lastNameInput = $("input#lastname-input");
    let emailInput = $("input#email-input");
    let passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        let userData = {
            firstName : firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password);
        firstNameInput.val("");
        lastNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        })
            .then(function (data) {
                window.location.replace("/homepage");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch( err =>{
                throw (err);
            });
    }

    // function handleLoginErr(err) {
    //   $("#alert .msg").text(err.responseJSON);
    //   $("#alert").fadeIn(500);
    // }
});
