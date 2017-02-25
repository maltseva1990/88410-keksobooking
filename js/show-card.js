'use strict';

window.showCard = (function () {

  return function (currentPin, clickedElementIndex) {
    var PIN_ACTIVE_CLASS_NAME = 'pin--active';
    clickedElementIndex = window.similarApartments[clickedElementIndex];

    var tokyo = document.querySelector('.tokyo');
    var dialogTemplate = document.querySelector('#dialog__template');
    var dialogToClone = dialogTemplate.content.querySelector('.dialog');
    var dialogCurrentCard = dialogToClone.cloneNode(true);
    var dialogClose = dialogCurrentCard.querySelector('.dialog__close');
    var photos = dialogCurrentCard.querySelector('.lodge__photos');
    var onDialogClose = null;

    clickedElementIndex.offer.photos.forEach(function (newPhoto, index, array) {
      newPhoto = document.createElement('img');
      newPhoto.src = photos[index];
      newPhoto.setAttribute('alt', 'photo');
      newPhoto.setAttribute('width', 50);
      newPhoto.setAttribute('height', 50);
      photos.appendChild(newPhoto);
    });

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
    var hideDialog = function () {
      if (typeof onDialogClose === 'function') {
        var getActive = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
        onDialogClose(getActive);
        onDialogClose = null;
      }
      window.hideCard(dialogCurrentCard);
    };
    tokyo.appendChild(dialogCurrentCard);

    dialogClose.addEventListener('click', function () {
      window.hideCard(dialogCurrentCard);
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

