<template lang="pug">
  ul.tabs-list
    li.tabs-list__item
      button(type="button").tabs-list__button Мои работы
    li.tabs-list__item.tabs-list__item--active
      button(type="button").tabs-list__button Обо мне
    li.tabs-list__item
      button(type="button").tabs-list__button Блог
</template>

<style lang="scss">
  .tabs-list {
    display: flex;
    align-items: center;
    height: 100%;

    @media (min-width: 1200px) {
      width: 1190px;
      margin: 0 auto;
    }

    &__item {
      background-color: #f0efe9;
      width: 180px;
      heigth: 100%;
      text-align: center;
      transition: all 0.25s ease-in-out;
      border-right: 2px solid white;

      &:hover {
        background-color: #e5ede5;
        cursor: pointer;
      }

      &:first-child {
        @media (min-width: 1200px) {
          border-left: 2px solid white;
        }
      }
      
      &--active {
        background-color: white;

        .tabs-list__button {
          color: #6c9c5a;
        }
      }
    }

    &__button {
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      text-transform: uppercase;
      line-height: 60px;
      cursor: pointer;
      color: #566358;
      font-family: 'Roboto', Helvetica, sans-serif;
      font-weight: 600;
      font-size: 16px;
    }
  }
</style>