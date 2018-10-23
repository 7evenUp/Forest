<template lang="pug">
  form.form
    h3.form__title(v-text="editMode ? 'Изменить работу' : 'Добавить работу'")
    input.form__input(
      v-model="newWork.title"
      type="text"
      placeholder="Название проекта"
    )
    input.form__input(
      v-model="newWork.techs"
      type="text"
      placeholder="Технологии"
    )
    input.form__input(
      v-model="newWork.link"
      type="text"
      placeholder="Ссылка"
    )
    label.file(for="file")
      input.file__input(
        @change="handleFiles"
        type="file"
        id="file"
        name="file"
      )
      img.file__image(src="/download_img.png" alt="Загрузить картинку")
      span.file__label(v-text="mode ? 'Изменить картинку' : 'Загрузить картинку'")
    button.form__button(
      v-text="mode ? 'Сохранить изменения' : 'Добавить'"
      @click="mode ? editExistedWork(newWork) : addNewWork(newWork)"
      type="button"
    )

</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      work: {
        type: Object,
        default: () => {}
      },
      editMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        newWork: {
          id: 0,
          title: '',
          techs: '',
          link: '',
          photo: {}
        },
        mode: this.editMode
      }
    },
    watch: {
      work() {
        this.newWork.id = this.work.id;
        this.newWork.title = this.work.title;
        this.newWork.techs = this.work.techs;
        this.newWork.link = this.work.link;
        document.querySelector('.file__image').src = `https://webdev-api.loftschool.com/${this.work.photo}`

        this.mode = true;
      }
    },
    methods: {
      handleFiles(evt) {
        const file = evt.target.files[0];

        if (file.length === 0) return;

        this.newWork.photo = file;
      },
      ...mapActions({
        addNewWork: 'works/add',
        editWork: 'works/edit'
      }),
      editExistedWork(work) {
        this.editWork(work).then(
          () => {
            Object.keys(this.newWork).forEach(key => this.newWork[key] = '');
            document.querySelector('.file__image').src = '/download_img.png';
            this.mode = false;
          }).catch(error => {
            alert(error);
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;

    @media (max-width: 980px) {
      margin-bottom: 30px;
    }

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

        @media (max-width: 980px) {
          margin-bottom: 30px;
        }
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

      @media (max-width: 980px) {
        margin-top: 30px;
      }

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
      max-width: 250px;
      max-height: 180px;
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