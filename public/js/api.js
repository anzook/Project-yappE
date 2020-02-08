/* eslint-disable require-jsdoc */
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(function(data) {
    $('.user-name').text(data.email);
  });
  $.get('/api/pets/id').then(function(dogdata) {
    $('.dog-name').text(dogdata.name);
    dogApi(dogdata.breed, `dogPic${dogdata.id}`);
  });

});


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
    $('#imagediv').empty();
    const strStart = dogData.message.search('breed') + 6;
    const strEnd = dogData.message.indexOf('/', strStart);
    const stringBreed = dogData.message.splice(strStart, strEnd);
    const dogImg = $('<img />'); // Equivalent: $(document.createElement('img'))
    dogImg.attr('src', dogData.message);
    dogImg.attr('id', imgId);
    dogImg.attr('alt', stringBreed);

    dogImg.appendTo('#imagediv');
  }
}

