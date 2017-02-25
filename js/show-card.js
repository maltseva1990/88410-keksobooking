'use strict';

window.showCard = (function () {

  return function (currentPin, cuttentIndex) {
    var PIN_ACTIVE_CLASS_NAME = 'pin--active';
    var currentElement = window.similarApartments[cuttentIndex];

    var tokyo = document.querySelector('.tokyo');
    var dialogTemplate = document.querySelector('#dialog__template');
    var dialogToClone = dialogTemplate.content.querySelector('.dialog');
    var dialogCurrentCard = dialogToClone.cloneNode(true);
    var dialogClose = dialogCurrentCard.querySelector('.dialog__close');
    var photos = dialogCurrentCard.querySelector('.lodge__photos');
    var onDialogClose = null;

    currentElement.offer.photos.forEach(function (newPhoto, index, array) {
      var newPhotoElement = document.createElement('img');
      newPhotoElement.src = newPhoto;
      newPhotoElement.setAttribute('alt', 'photo');
      newPhotoElement.setAttribute('width', 50);
      newPhotoElement.setAttribute('height', 50);
      photos.appendChild(newPhotoElement);
    });

    dialogCurrentCard.querySelector('.lodge__title').textContent = currentElement.offer.title;
    dialogCurrentCard.querySelector('img').src = currentElement.author.avatar;
    dialogCurrentCard.querySelector('.lodge__address').textContent = currentElement.offer.address;
    dialogCurrentCard.querySelector('.lodge__price').textContent = currentElement.offer.price;
    dialogCurrentCard.querySelector('.lodge__rooms-and-guests').textContent = currentElement.offer.rooms +
      ' комнаты для ' + currentElement.offer.guests + ' гостей';
    dialogCurrentCard.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + currentElement.offer.checkin +
      ', выезд до ' + currentElement.offer.checkout;
    dialogCurrentCard.querySelector('.lodge__description').textContent = currentElement.offer.description;

    var dialog = document.querySelector('.dialog');
    if (dialog) {
      tokyo.removeChild(dialog);
    }
    var hideDialog = function () {
      if (typeof onDialogClose === 'function') {
        var activePinElement = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
        onDialogClose(activePinElement);
        onDialogClose = null;
      }
      window.hideCard(dialogCurrentCard);
    };
    tokyo.appendChild(dialogCurrentCard);

    dialogClose.addEventListener('click', function () {
      window.cardHideHandler(dialogCurrentCard);
    });
    dialogClose.addEventListener('click', function () {
      hideDialog();
    });
    dialogClose.addEventListener('keydown', function (event) {
      if (window.utils.isDiactivateEvent(event) || window.utils.isActivateEvent(event)) {
        hideDialog();
      }
    });
  };

})();

