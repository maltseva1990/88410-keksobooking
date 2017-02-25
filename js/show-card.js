'use strict';

window.showCard = (function () {

  return function (currentPin, cuttentElement) {
    var PIN_ACTIVE_CLASS_NAME = 'pin--active';
    cuttentElement = window.similarApartments[cuttentElement];

    var tokyo = document.querySelector('.tokyo');
    var dialogTemplate = document.querySelector('#dialog__template');
    var dialogToClone = dialogTemplate.content.querySelector('.dialog');
    var dialogCurrentCard = dialogToClone.cloneNode(true);
    var dialogClose = dialogCurrentCard.querySelector('.dialog__close');
    var photos = dialogCurrentCard.querySelector('.lodge__photos');
    var onDialogClose = null;

    cuttentElement.offer.photos.forEach(function (newPhoto, index, array) {
      newPhoto = document.createElement('img');
      newPhoto.src = cuttentElement.offer.photos[index];
      newPhoto.setAttribute('alt', 'photo');
      newPhoto.setAttribute('width', 50);
      newPhoto.setAttribute('height', 50);
      photos.appendChild(newPhoto);
    });

    dialogCurrentCard.querySelector('.lodge__title').textContent = cuttentElement.offer.title;
    dialogCurrentCard.querySelector('img').src = cuttentElement.author.avatar;
    dialogCurrentCard.querySelector('.lodge__address').textContent = cuttentElement.offer.address;
    dialogCurrentCard.querySelector('.lodge__price').textContent = cuttentElement.offer.price;
    dialogCurrentCard.querySelector('.lodge__rooms-and-guests').textContent = cuttentElement.offer.rooms +
      ' комнаты для ' + cuttentElement.offer.guests + ' гостей';
    dialogCurrentCard.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + cuttentElement.offer.checkin +
      ', выезд до ' + cuttentElement.offer.checkout;
    dialogCurrentCard.querySelector('.lodge__description').textContent = cuttentElement.offer.description;

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

