$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

function openPopup(title, imageSrc, description) {
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-image').src = imageSrc;
  document.getElementById('popup-description').textContent = description;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}