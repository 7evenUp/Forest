(function () {
  'use strict';

  const form = document.querySelector('.contact-form__content');
  const modalClass = 'form-message';
  const modal = document.querySelector(`.${modalClass}`);
  const errorTitle = modal.querySelector('.form-message__title');
  const closeButton = modal.querySelector('.form-message__button');
  const sendURL = '#';
  const xhrTimeout = 10000;
  const removeModalTimeout = 5000;
  const okStatus = 200;

  function addClickEventListener (target) {
    target.addEventListener('click', () => {
      modal.classList.forEach((item) => {
        if (item !== modalClass) modal.classList.remove(item);
      })
    });
  }

  function onLoad () {
    modal.classList.add('form-message--succeeded');
    addClickEventListener(closeButton);
    setTimeout(() => {
      modal.classList.remove('form-message--hidden');
    }, removeModalTimeout)
  }

  function onError (errorMessage) {
    errorTitle.textContent = errorMessage;
    modal.classList.add('form-message--failed');
    addClickEventListener(closeButton);
    setTimeout(() => {
      modal.classList.remove('form-message--failed');
    }, removeModalTimeout)
  }

  function sendFormData (onLoad, onError) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = xhrTimeout;

    xhr.addEventListener('load', () => {
      if (xhr.status === okStatus) {
        onLoad(xhr.response)
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`)
      }
    });

    xhr.addEventListener('error', () => onError('Произошла ошибка соединения'));
    xhr.addEventListener('timeout', () => onError(`Запрос не успел выполниться за ${xhr.timeout} мс`))
  
    xhr.open('POST', sendURL);
    xhr.send(new FormData(form));
  }

  function onFormSubmit (evt) {
    evt.preventDefault();
    sendFormData(onLoad, onError);
    form.reset();
  }

  form.addEventListener('submit', onFormSubmit);

})();