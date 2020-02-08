/* eslint-disable linebreak-style */
$(document).ready(function() {
  const addDogBtn = $('#add-dog-btn');
  const modal = $('#modal');
  const close = $('.modal-close');

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
});
