<template lang="pug">
  .content-container
    .works
      h2.works__title Страница "Мои работы"

      .works__content
        works-add(
          :work="work"
          :editMode="editMode"
        )
        works-list(
          :works="works"
          @fillFormData="fillFormData"
        )
</template>

<script>
  import worksAdd from './worksAdd.vue';
  import worksList from './worksList.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    components: {
      worksAdd,
      worksList
    },
    data() {
      return {
        work: {},
        editMode: false
      }
    },
    computed: {
      ...mapState('works', {
        works: state => state.data
      })
    },
    created() {
      this.fetchWorks()
    },
    methods: {
      ...mapActions({
        fetchWorks: 'works/fetch'
      }),
      fillFormData(work) {
        this.work = work;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .works {

    &__title {
      margin: 0;
      margin-bottom: 40px;
      font-size: 21px;
    }

    &__content {
      display: flex;
      justify-content: space-between;

      @media (max-width: 980px) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }
  }
</style>