/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
$(document).ready(function() {
//   const initialAddForm = $('form.initial-adds-form');
  const nameInput = $('#dog-name');
  const ageInput = $('#dog-age');
  const sexInput = $('#dog-sex');
  const breedInput = $('#dog-breed');
  const submitbtn = $('#nextBtn');

  submitbtn.click(function(event) {
    event.preventDefault();
    if (submitbtn.html() == 'Submit') {
      console.log('I was touched');
      const dogData = {
        name: nameInput.val().trim(),
        age: ageInput.val().trim(),
        sex: sexInput.val().trim(),
        breed: breedInput.val().trim(),
      };
      if (!dogData.name || !dogData.age || !dogData.sex || !dogData.breed) {
        return;
      }
      addDog(dogData.name, dogData.age, dogData.sex, dogData.breed);
      nameInput.val('');
      ageInput.val('');
      sexInput.val('');
      breed.val('');
    } else {
      nextPrev(1);
    }
  });


  function addDog(name, age, sex, breed) {
    $.post('/api/pets', {
      name: name,
      age: age,
      sex: sex,
      breed: breed,
    }) .then(function(data) {
      window.location.replace('/homepage');
      // If there's an error, handle it by throwing up a bootstrap alert
    })
        .catch((err)=>{
          console.log(err);
        });
  }
});
