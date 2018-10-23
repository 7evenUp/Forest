<template lang="pug">
  tr.work-item
    td.work-item__name {{ work.title }}
    td.work-item__technologies {{ work.techs }}
    td.work-item__link
      a(:href="work.link" target="_blank")  {{ work.link }}
    td.work-item__image
      img#image(:src="`https://webdev-api.loftschool.com/${work.photo}`" alt="Изображение проекта")
    td.work-item__buttons
      button(
        @click="handleClick"
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
    data() {
      return {
        editMode: false
      }
    },
    methods: {
      ...mapActions({
        editWork: 'works/edit',
        removeWork: 'works/remove'
      }),
      handleClick() {
        this.$emit('fillFormData', this.work)      }
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
      height: 100%;
    }

    #image {
      max-width: 90%;
      max-height: 90%;
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
        background: url(/pencil.png) no-repeat center;
        margin-bottom: 10px;
      }
      &--delete {
        background: url(/cancel.png) no-repeat center;
      }
    }
  }
</style>