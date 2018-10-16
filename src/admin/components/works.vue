<template lang="pug">
  .content-container
    .works
      h2.works__title Страница "Мои работы"

      .works__content
        works-add.works__form
        works-list
</template>

<script>
  import worksAdd from './worksAdd.vue';
  import worksList from './worksList.vue';

  export default {
    components: {
      worksAdd,
      worksList
    }
  }
</script>

<style lang="scss">
  .works {

    &__title {
      margin: 0;
      margin-bottom: 40px;
      font-size: 21px;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
    }
  }
</style>