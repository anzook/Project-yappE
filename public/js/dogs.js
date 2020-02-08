/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
$(document).ready(function() {
//   const initialAddForm = $('form.initial-adds-form');
  const nameInput = $('#dog-name');
  const ageInput = $('#dog-age');
  const breedInput = $('#dog-breed');
  const initSubmitbtn = $('#nextBtn');
  const initPreviousBtn = $('#prevBtn');
  const existingDogDiv = $('#existing-dog');
  const newDogDiv = $('#new-dog');
  const dogID = $('#dog-id');

  // grab user id from localstorage
  const userid = localStorage.getItem('userId');

  console.log(userid);

  initSubmitbtn.click(function(event) {
    event.preventDefault();
    if (initSubmitbtn.html() === 'Submit') {
      if (newDogDiv.is(':visible')) {
        console.log('showing add dog');
        const dogData = {
          name: nameInput.val().trim(),
          age: ageInput.val().trim(),
          sex: $('input[name="dog-sex"]:checked').val(),
          breed: breedInput.val().trim(),
        };
        if (!dogData.name || !dogData.age || !dogData.sex || !dogData.breed) {
          return;
        }
        addDog(dogData.name, dogData.age, dogData.sex, dogData.breed);
      } else if (existingDogDiv.is(':visible')) {
        const dogIdSave = dogID.val().trim();
      };
    } else if (initSubmitbtn.html() === 'Next') {
      if ($('input[name="choice"]:checked').val() === 'new') {
        existingDogDiv.hide();
        newDogDiv.show();
        fixStepIndicator(1);
      } else if ($('input[name="choice"]:checked').val() === 'existing') {
        existingDogDiv.show();
        newDogDiv.hide();
        fixStepIndicator(1);
      } else {
        return;
      };
      console.log($('input[name="choice"]:checked').val());
      nextPrev(1);
    };
  });

  initPreviousBtn.click(function() {
    nextPrev(-1);
    fixStepIndicator(0);
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
