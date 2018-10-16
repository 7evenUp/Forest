<template lang="pug">
  div
    form.form
      h3.form__title Добавить работу
      input.form__input(type="text" placeholder="Название проекта")
      input.form__input(type="text" placeholder="Технологии")
      input.form__input(type="text" placeholder="Ссылка")
      label.file(for="file")
        input.file__input(type="file" id="file" name="file")
        img.file__image(src="../content/download_img.png" alt="Загрузить картинку")
        span.file__label Загрузить картинку
      button.form__button(type="button") Добавить

</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__title {
      font-size: 16px;
      margin: 0;
      margin-bottom: 15px;
    }

    &__input {
      width: 300px;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;

      &::placeholder {
        color: rgba(55, 62, 66, 0.5);
      }

      &:nth-child(4) {
        margin-bottom: 60px;
      }
    }

    &__button {
      background-color: #6c9c5a;
      padding: 10px 20px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 60px;
      font-weight: 600;

      &:hover {
        background-color: #4e8839;
      }
    }
  }

  .file {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &__input {
      display: none;
    }

    &__image {
      fill: #6c9c5a;
      margin-right: 10px;
    }

    &__label {
      color: #6c9c5a;
    }

    &:hover::before {
      opacity: 1;
      transform: translateY(0);
    }
    &:hover::after {
      opacity: 1;
      transform: translateY(0);
    }

    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #4e8839;
      transition: all 0.2s;
    }
    &::before {
      top: -11px;
      transform: translateY(-20px);
      opacity: 0;
    }
    &::after {
      top: calc(100% + 6px);
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>