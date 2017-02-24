'use strict';

var INVISIBLE = 'invisible';

window.showCard = (function () {

  return function (currentPin, parentObj) {

    var tokyo = document.querySelector('.tokyo');
    var dialogTemplate = document.querySelector('#dialog__template');
    var dialogToClone = dialogTemplate.content.querySelector('.dialog');
    var dialogCurrentCard = dialogToClone.cloneNode(true);
    var features = dialogCurrentCard.querySelector('.lodge__features');
    features.innerHTML = '';
    var photo = dialogCurrentCard.querySelector('.lodge__photos');
    photo.innerHTML = '';

    // вот здесь теперь другая проблема - не могу получить parentObj.offer.title, сейчас parentObj - это elementClicked.dataset['pinIndex']
    dialogCurrentCard.querySelector('.lodge__title').textContent = parentObj.offer.title;
    dialogCurrentCard.querySelector('img').src = parentObj.author.avatar;
    dialogCurrentCard.querySelector('.lodge__address').textContent = parentObj.offer.address;
    dialogCurrentCard.querySelector('.lodge__price').textContent = parentObj.offer.price;
    dialogCurrentCard.querySelector('.lodge__rooms-and-guests').textContent = parentObj.offer.rooms + ' комнаты для ' + parentObj.offer.guests + ' гостей';
    dialogCurrentCard.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + parentObj.offer.checkin + ', выезд до ' + parentObj.offer.checkout;
    dialogCurrentCard.querySelector('.lodge__description').textContent = parentObj.offer.description;

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

