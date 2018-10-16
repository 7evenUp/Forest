<template lang="pug">
  tr.work-item
    td.work-item__name Сайт школы онлайн образования
    td.work-item__technologies C++, C#, Python, Excel, Word
    td.work-item__link
      a(href="" target="_blank") porn.hub
    td.work-item__image
      img(src="" alt="Изображение проекта")
    td.work-item__buttons
      button(

      ).button.button--edit
      button(

      ).button.button--delete
</template>

<script>
  export default {
    props: {
      
    }
  }
</script>

<style lang="scss" scoped>
  .work-item {

    td {
      text-align: left;
      padding: 30px 0 30px 25px;
      font-size: 14px;
      color: #455a64;
    }

    &__name {

    }
    &__technologies {
      text-transform: uppercase;
    }

    &__link a {
      color: #455a64;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      padding: 30px 40px !important;
    }
    
    .button {
      width: 20px;
      height: 20px;  
      border: none;
      cursor: pointer;

      &:focus-within {
        outline: none;
      }

      &:hover {
        transform: scale(1.05);
      }
      &--edit {
        background: url(../content/pencil.png) no-repeat center;
        margin-bottom: 10px;
      }
      &--delete {
        background: url(../content/cancel.png) no-repeat center;
      }
    }
  }
</style>