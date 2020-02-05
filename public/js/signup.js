/* eslint-disable require-jsdoc */
$(document).ready(function() {
  // Setting up automation for signup and login forms
  $('.login-form').hide();
  $('.login').css('background', 'none');

  $('.login').click(function() {
    $('.signup-form').hide();
    $('.login-form').show();
    $('.signup').css('background', 'none');
    $('.login').css('background', 'rgba(85,171,189, 0.7)');
  });

  $('.signup').click(function() {
    $('.signup-form').show();
    $('.login-form').hide();
    $('.signup').css('background', 'rgba(85,171,189, 0.7)');
    $('.login').css('background', 'none');
  });

  // Getting references to our form and input
  const signUpForm = $('form.signup');
  const firstNameInput = $('input#firstname-input');
  const lastNameInput = $('input#lastname-input');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  // When the signup button is clicked, we validate the email and
  // password are not blank
  signUpForm.on('submit', function(event) {
    event.preventDefault();
    const userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.firstName || !userData.lastName ||
      !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password,
        userData.firstName, userData.lastName);
    firstNameInput.val('');
    lastNameInput.val('');
    emailInput.val('');
    passwordInput.val('');
  });

  // Does a post to the signup route. If successful
  // we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, first, last) {
    $.post('/api/signup', {
      email: email,
      password: password,
      firstName: first,
      lastName: last,
    })
        .then(function(data) {
          window.location.replace('/homepage');
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        // .catch(handleLoginErr);
        .catch((err)=>{
          console.log(err);
        });
  }

//   function handleLoginErr(err) {
//     $('#alert .msg').text(err.responseJSON);
//     $('#alert').fadeIn(500);
//   }
});


