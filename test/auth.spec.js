const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url('http://localhost:3000/index.html')
});

test('На странице есть кнопка "Авторизоваться"', () => {
  return client
    .isExisting('.auth-button')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName].toBe(true));
      }
    })
    .screenshot()
    .then(browsers => {
      for (const browserName in browsers) {
        fs.writeFileSync(`./screenshots/authButton_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
      }
    })
});

test('При клике на кнопку "Авторизоваться" появляется форма', () => {
  return client
    .click('.auth-button')
    .isVisible('.card-auth--active')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName].toBe(true));
      } 
    })
});

test('При клике на кнопку "На главную" форма скрывается', () => {
  return client
    .click('#toHomeButton')
    .isVisible('.card-auth--active')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName].toBe(false));
      } 
    })
});

afterAll(() => {
  return client.end();
})