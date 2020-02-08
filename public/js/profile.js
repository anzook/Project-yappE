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

  $.get('/api/user_data').then(function(data) {
    $('.user-name').text(data.name);
  });
  $.get('/api/pets/id', {
    pet_id: 1}).then(function(dogdata) {
    $('#dog-name').text(dogdata.name);
    dogApi(dogdata.breed, `dogPic${dogdata.id}`);
  });

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


  function dogApi(breed, imgId) {
  // queryURL is the url we'll use to query the API
    const dogBreed = breed.val().trim();
    const queryURL = 'https://dog.ceo/api/breed/'+ dogBreed +'/images/random';

    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then( (data) => updatePage(data, imgId) );
  };

  function updatePage(dogData, imgId) {
  // log response data for testing
    console.log(dogData);

    if (dogData.status == 'success') {
      $('#image-div').empty();
      const strStart = dogData.message.search('breed') + 6;
      const strEnd = dogData.message.indexOf('/', strStart) -1;
      const stringBreed = dogData.message.splice(strStart, strEnd);
      const dogImg = $('<img />'); // Equivalent: $(document.createElement('img'))
      dogImg.attr('src', dogData.message);
      dogImg.attr('id', imgId);
      dogImg.attr('alt', stringBreed);

      dogImg.appendTo('#imagediv');
    }
  }
});
