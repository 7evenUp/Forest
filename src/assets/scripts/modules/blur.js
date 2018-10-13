let blur = (function() {
  let wrapper = document.querySelector('.contact-form'),
      form = document.querySelector('.contact-form__background');

  return {
    set: function() {
      let imgWidth = document.querySelector('.criticism').offsetWidth,
          imgHeight = document.querySelector('.criticism').offsetHeight,
          posLeft = -wrapper.offsetLeft,
          criticismOffsetTop = document.querySelector('.criticism').offsetTop,
          formOffsetTop = document.querySelector('.contact-form').offsetTop,
          posTop = -(formOffsetTop - criticismOffsetTop),
          blurCSS = form.style;

      blurCSS.width = `${imgWidth}px`;
      blurCSS.height = `${imgHeight}px`;
      blurCSS.transform = `translate(${posLeft}px,${posTop}px)`;
    },
  };
}());

blur.set();

window.onresize = function() {
  blur.set();
};