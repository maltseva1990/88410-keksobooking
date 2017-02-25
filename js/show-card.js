'use strict';

var INVISIBLE = 'invisible';

window.showCard = (function () {

  return function (currentPin, clickedElementIndex) {

    clickedElementIndex = window.similarApartments[clickedElementIndex];

    var tokyo = document.querySelector('.tokyo');
    var dialogTemplate = document.querySelector('#dialog__template');
    var dialogToClone = dialogTemplate.content.querySelector('.dialog');

    var dialogCurrentCard = dialogToClone.cloneNode(true);
    // var dialogBlock = dialogCurrentCard.querySelector('.dialog');
    // var dialogClose = dialogCurrentCard.querySelector('.dialog__close');

    var photos = dialogCurrentCard.querySelector('.lodge__photos');
    photos.innerHTML = '';

    for (var i = 0; i < photos.length; i++) {
      var newPhoto = document.createElement('img');
      newPhoto.src = photos[i];
      newPhoto.setAttribute('alt', 'photo');
      photos.appendChild(newPhoto);
    }

    dialogCurrentCard.querySelector('.lodge__title').textContent = clickedElementIndex.offer.title;
    dialogCurrentCard.querySelector('img').src = clickedElementIndex.author.avatar;
    dialogCurrentCard.querySelector('.lodge__address').textContent = clickedElementIndex.offer.address;
    dialogCurrentCard.querySelector('.lodge__price').textContent = clickedElementIndex.offer.price;
    dialogCurrentCard.querySelector('.lodge__rooms-and-guests').textContent = clickedElementIndex.offer.rooms +
      ' комнаты для ' + clickedElementIndex.offer.guests + ' гостей';
    dialogCurrentCard.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + clickedElementIndex.offer.checkin +
      ', выезд до ' + clickedElementIndex.offer.checkout;
    dialogCurrentCard.querySelector('.lodge__description').textContent = clickedElementIndex.offer.description;

    var dialog = document.querySelector('.dialog');
    if (dialog) {
      tokyo.removeChild(dialog);
    }
    tokyo.appendChild(dialogCurrentCard);
  };
})();

window.hideCard = (function () {
  return function (element) {
    element.classList.add(INVISIBLE);
    element.setAttribute('aria-hidden', 'true');
  };
})();

