<template lang="pug">
  tr.category(v-if="editMode === false")
    td
      input.category__name(
        v-if="!mode"
        v-model="skill.title"
        disabled
      )
      input.category__name.category__name--active(
        v-else
        v-model="skill.title"
      )
    td 
      input.category__percent(
        v-if="!mode"
        v-model="skill.percents"
        disabled
      )
      input.category__percent(
        v-else
        v-model="skill.percents"
      )
      span %
    td
      .buttons
        button(
          @click="mode ? editExistedSkill(skill) : activateEditMode()"
          type="button"
        ).button.button--edit
        button(
          @click="removeSkill(skill.id)"
          type="button"
        ).button.button--delete

  tr(v-else).additor
    td
      input(
        v-model="newSkill.title"
        type="text"
        placeholder="new category"
      ).additor__category-input
    td
      input(
        v-model="newSkill.percents"
        type="text"
        placeholder="%"
      ).additor__percent-input
    td
      button(
        type="button"
        @click="addNewSkill(newSkill)"
      ).additor__add-button Добавить
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      skill: {
        type: Object,
        default: () => {}
      },
      typeId: {
        type: Number,
        default: 0
      },
      editMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        newSkill: {
          title: '',
          percents: 0,
          category: this.typeId
        },
        mode: false
      }
    },
    methods: {
      ...mapActions({
        addNewSkill: 'skills/add',
        removeSkill: 'skills/remove',
        editSkill: 'skills/edit'
      }),
      activateEditMode() {
        console.log(this.skill)
        this.mode = true;
      },
      editExistedSkill(skill) {
        this.editSkill(skill).then(() => {
          this.mode = false;
        }).catch(error => {
          alert(error);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    height: 42px;

    &:last-child {
      margin: 0;
    }

    &__name {
      margin-right: 30px;
      background-color: transparent;
      border: none;
      font-size: 16px;
      max-width: 100px;
      &--active {
        background-color: white;
        padding: 8px;
        border: none;
        border-radius: 5px;
      }
    }
    &__percent {
      padding: 8px;
      background-color: white;
      border-radius: 5px;
      font-size: 16px;
      width: 34px;
      height: 34px;
      border: none;
      margin-right: 2px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
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
      margin-right: 5px;
    }
    &--delete {
      background: url(/cancel.png) no-repeat center;
    }
  }

  .additor {

    &__category-input {
      width: 100px;
      padding: 5px;
      border-radius: 5px;
      border: none;
    }

    &__percent-input {
      width: 32px;
      padding: 5px;
      text-align: center;
      border-radius: 5px;
      border: none;
    }

    &__add-button {
      background-color: #6c9c5a;
      color: white;
      border: none;
      cursor: pointer;
      transition: backgroundColor 0.25s ease-in-out;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        background-color: #4e8839;
      }
    }
  }
</style>