'use strict';

window.showCard = (function () {

  return function (currentPin, currentIndex) {
    var PIN_ACTIVE_CLASS_NAME = 'pin--active';
    var currentDataElement = window.similarApartments[currentIndex];

    var tokyo = document.querySelector('.tokyo');
    var dialogTemplate = document.querySelector('#dialog__template');
    var dialogToClone = dialogTemplate.content.querySelector('.dialog');
    var dialogCurrentCard = dialogToClone.cloneNode(true);
    var dialogClose = dialogCurrentCard.querySelector('.dialog__close');
    var photos = dialogCurrentCard.querySelector('.lodge__photos');
    var onDialogClose = null;

    currentDataElement.offer.photos.forEach(function (newPhoto, index, array) {
      newPhoto = document.createElement('img');
      newPhoto.src = currentDataElement.offer.photos[index];
      newPhoto.setAttribute('alt', 'photo');
      newPhoto.setAttribute('width', 50);
      newPhoto.setAttribute('height', 50);
      photos.appendChild(newPhoto);
    });

    dialogCurrentCard.querySelector('.lodge__title').textContent = currentDataElement.offer.title;
    dialogCurrentCard.querySelector('img').src = currentDataElement.author.avatar;
    dialogCurrentCard.querySelector('.lodge__address').textContent = currentDataElement.offer.address;
    dialogCurrentCard.querySelector('.lodge__price').textContent = currentDataElement.offer.price;
    dialogCurrentCard.querySelector('.lodge__rooms-and-guests').textContent = currentDataElement.offer.rooms +
      ' комнаты для ' + currentDataElement.offer.guests + ' гостей';
    dialogCurrentCard.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + currentDataElement.offer.checkin +
      ', выезд до ' + currentDataElement.offer.checkout;
    dialogCurrentCard.querySelector('.lodge__description').textContent = currentDataElement.offer.description;

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

