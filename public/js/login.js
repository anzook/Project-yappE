/* eslint-disable require-jsdoc */
$(document).ready(function() {
  // Getting references to our form and inputs
  const loginForm = $('form.login-form');
  const signupemailInput = $('input#su-email-input');
  const loginemailInput = $('input#li-email-input');
  const signuppasswordInput = $('input#su-password-input');
  const loginpasswordInput = $('input#li-password-input');

  // When the form is submitted, validate an email and password entered
  loginForm.on('submit', function(event) {
    event.preventDefault();
    const userData = {
      email: signupemailInput.val().trim(),
      password: signuppasswordInput.val().trim(),
    };
    if (!userData.email || !userData.password) {
      return;
    }

    // with an email and password, run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    loginemailInput.val('');
    loginpasswordInput.val('');
  });

  // loginUser does a post to our "api/login" route
  /**
 * This is a function.
 *
 * @param {string} n - A string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

  function loginUser(email, password) {
    $.post('/api/login', {
      email: email,
      password: password,
    })
        .then(function() {
          window.location.replace('/homepage');
        })
        .catch(function(err) {
          // If there's an error, log the error
          console.log(err);
        });
  }
});
