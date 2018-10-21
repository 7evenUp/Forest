let blur = (function() {
  let wrapper = document.querySelector('.contact-form'),
      form = document.querySelector('.contact-form__background');

  return {
    set: function() {
      let imgWidth = document.querySelector('.criticism').offsetWidth,
          imgHeight = document.querySelector('.criticism').offsetHeight,
          posLeft = -wrapper.offsetLeft,
          criticismOffsetTop = document.querySelector('.criticism').offsetTop,
          formOffsetTop = document.querySelector('.contact-form').offsetTop + criticismOffsetTop,
          posTop = criticismOffsetTop - formOffsetTop,
          blurCSS = form.style;

      blurCSS.width = `${imgWidth}px`;
      blurCSS.height = `${imgHeight}px`;
      blurCSS.transform = `translate(${posLeft}px,${posTop}px)`;

      console.log(criticismOffsetTop);
      console.log(formOffsetTop);
      console.log(posTop);
    },
  };
}());

blur.set();

window.onresize = function() {
  blur.set();
};