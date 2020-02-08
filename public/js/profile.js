/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
$(document).ready(function() {
  const addDogBtn = $('#add-dog-btn');
  const modal = $('#modal');
  const close = $('.modal-close');

  // Inputs from profile page
  const nameInput = $('#dog-name');
  const ageInput = $('#dog-age');
  const breedInput = $('#dog-breed');
  const submitDogAdd = $('#submit-dog');

  // grab user id from localstorage
  const userid = localStorage.getItem('userId');
  getDog(userid);

  addDogBtn.click(function() {
    modal.show();
  });

  close.click(function() {
    modal.hide();
  });

  $(window).click(function(event) {
    if (event.target.className === 'modal-background') {
      modal.hide();
    }
  });

  submitDogAdd.click(function(event) {
    event.preventDefault();
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
    nameInput.val('');
    ageInput.val('');
    breedInput.val('');
    modal.hide();
  });

  function addDog(name, age, sex, breed) {
    $.post('/api/pets', {
      name: name,
      age: age,
      sex: sex,
      breed: breed,
    })
    // If there's an error, handle it by throwing up a bootstrap alert
        .catch((err)=>{
          console.log(err);
        });
  }

  function getDog(user) {
    $.get("/api/user/" + user, function(data) {
      console.log("Dog", + data);
      dog = data;
      // if (!posts || !posts.length) {
      //   displayEmpty(author);
      // }
      // else {
      //   initializeRows();
      // }
    });
  }
});
