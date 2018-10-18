import axios from 'axios';
(function () {
  'use strict';

  const form = document.querySelector('.auth-form');
  const checkboxInput = form.querySelector('.auth-form__checkbox-input');
  const radioInputs = form.querySelectorAll('.auth-form__radio-input');
  const modalClass = 'login-message';
  const modal = document.querySelector(`.${modalClass}`);
  const errorTitle = modal.querySelector('.login-message__title');
  const closeButton = modal.querySelector('.login-message__button');
  const sendURL = 'https://webdev-api.loftschool.com/login';
  const xhrTimeout = 10000;
  const removeModalTimeout = 5000;
  const okStatus = 200;

  function addClickEventListener (target) {
    target.addEventListener('click', () => {
      modal.classList.add(`${modalClass}--hidden`);
    });
  }

  function onLoad (response) {
    const ttl = Math.floor(Date.now() / 1000 + response.ttl);

    localStorage.setItem('ttl', ttl);
    localStorage.setItem('token', response.token);

    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    window.location.href = "./admin";
  }

  function onError () {
    errorTitle.textContent = 'Неверный логин или пароль';
    modal.classList.remove('login-message--hidden');
    addClickEventListener(closeButton);
    setTimeout(() => {
      modal.classList.add('login-message--hidden');
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

    let flag1 = false,
        flag2 = false;
    if (!checkboxInput.checked) {
      flag1 = true;
    }

    if (!radioInputs[0].checked) {
      flag2 = true
    }

    if (flag1 || flag2) {
      let errorMsg = '';
      errorMsg += flag1 ? 'Вы забыли поставить галочку в поле "я человек"' : '';
      errorMsg += flag2 ? ' Вы забыли выбрать пункт "Да" в поле "вы точно не робот?"' : '';
      errorTitle.textContent = errorMsg;
      modal.classList.remove('login-message--hidden');
      addClickEventListener(closeButton);
      setTimeout(() => {
        modal.classList.add('login-message--hidden');
      }, removeModalTimeout)
      // form.addEventListener('submit', onFormSubmit);
    } else {
      sendFormData(onLoad, onError);
      form.reset();
    }
  }

  form.addEventListener('submit', onFormSubmit);

})();