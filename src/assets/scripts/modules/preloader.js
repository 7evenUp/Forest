document.body.onload = function () {
  setTimeout(() => {
    const preloader = document.querySelector('.js-preloader');
    if (!preloader.classList.contains('preloader--done')) {
      preloader.classList.add('preloader--done');
    }
  }, 2000)
}