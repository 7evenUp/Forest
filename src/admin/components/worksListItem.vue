<template lang="pug">
  tr.work-item
    td.work-item__name tetsd
    td.work-item__technologies tetsd
    td.work-item__link
      a(href="" target="_blank")  asdasd
    td.work-item__image
      img(src="" alt="Изображение проекта")
    td.work-item__buttons
      button(
        @click="editWork(work.id)"
        type="button"
      ).button.button--edit
      button(
        @click="removeWork(work.id)"
        type="button"
      ).button.button--delete
</template>

<script>
  import { mapActions } from 'vuex';
  
  export default {
    props: {
      work: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      ...mapActions({
        editWork: 'works/edit',
        removeWork: 'works/remove'
      })
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

      &.active {
        background-color: #daf2d1;
      }
    }

    &__technologies {
      text-transform: uppercase;
    }

    &__link {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      a {
        color: #455a64;
      }
    }

    &__image {
      max-width: 90%;
      max-height: 90%;
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