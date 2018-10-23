<template lang="pug">
  form.form
    h3.form__title(v-text="mode ? 'Изменить запись' : 'Добавить запись'")
    input.form__input(
      v-model="newBlog.title"
      id="title"
      type="text"
      placeholder="Название поста"
    )
    input.form__input(
      v-model="newBlog.date"
      id="date"
      type="text"
      placeholder="Дата"
    )
    textarea.form__textarea(
      v-model="newBlog.content"
      id="textarea"
      placeholder="Чего-нибудь новенького?"
    )
    button.form__button(
      v-text="mode ? 'Сохранить изменения' : 'Добавить'"
      @click="mode ? editExistedBlog(newBlog) : addNewBlog(newBlog)"
      type="button"
    )
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      blog: {
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
        newBlog: {
          id: 0,
          title: '',
          date: '',
          content: ''
        },
        mode: this.editMode
      }
    },
    watch: {
      blog() {
        this.newBlog.id = this.blog.id;
        this.newBlog.title = this.blog.title;
        this.newBlog.date = new Date(this.blog.date * 1000).toLocaleDateString();
        this.newBlog.content = this.blog.content;
        this.mode = true;
      }
    },
    methods: {
      ...mapActions({
        addNewBlog: 'blogs/add',
        editBlog: 'blogs/edit'
      }),
      editExistedBlog(blog) {
        this.editBlog(blog).then(() => {
          Object.keys(this.newBlog).forEach(key => this.newBlog[key] = '');
          this.mode = false;
        }).catch(error => {
          alert(error);
        })
      }
    }
  }
</script>

<style lang="scss">
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
    }

    &__textarea {
      border-radius: 5px;
      padding: 12px 20px;
      min-width: 300px;
      width: 500px;
      height: 150px;
      resize: none;

      @media (max-width: 550px) {
        width: 380px;
      }
      @media (max-width: 400px) {
        width: 300px;
      }

      &::placeholder {
        color: rgba(55, 62, 66, 0.5);
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
      margin-top: 30px;
      font-weight: 600;

      &:hover {
        background-color: #4e8839;
      }
    }
  }
</style>