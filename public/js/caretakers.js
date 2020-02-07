/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
// $(document).ready(function() {
// //   const nameInput = $('#caretaker-name');
//   const roleInput = $('#caretaker-role');
//   const emailInput = $('#caretaker-email');
//   const initSubmitbtn = $('#nextBtn');

//   initSubmitbtn.click(function(event) {
//     event.preventDefault();
//     if (initSubmitbtn.html() == 'Submit') {
//       const caretakerData = {
//         name: roleInput.val().trim(),
//         email: emailInput.val().trim(),
//       };
//       if (!caretakerData.name || !caretakerData.breed) {
//         return;
//       }
//       addCaretaker(caretakerData.name, caretakerData.email);
//   });


//   function addDog(name, email) {
//     $.post('/api/caretaker', {
//       name: name,
//       email: email,
//     }) .then(function(data) {
//       window.location.replace('/homepage');
//       // If there's an error, handle it by throwing up a bootstrap alert
//     })
//         .catch((err)=>{
//           console.log(err);
//         });
//   }
// });
