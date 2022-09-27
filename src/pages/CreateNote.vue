<template>
  <form>
    <AlertError :message="messageForError" :is-hide="errorValidate"></AlertError>

    <div>
      <input @change="changeTitle" type="text" name="title" placeholder="Название записи" required>
    </div>
    <div>
      <input @change="changeDescription" type="text" name="description" placeholder="Описание записи" required>
    </div>

    <ButtonApply type="button" @click="addNote"></ButtonApply>
  </form>
</template>

<script>
import { notes, ModelNote } from "@/Notes";

import ButtonApply from "@/components/btn/ButtonApply";
import AlertError from "@/components/alert/AlertError";

export default {
  name: "CreateNote",
  components: {
    ButtonApply,
    AlertError
  },
  data() {
    return {
      notes,
      ModelNote,

      messageForError : '',
      errorValidate: false,
    }
  },
  methods: {
    validateForm() {
      if (this.ModelNote.title.length < 2) {
        this.messageForError = "Название меньше 2 символов";
        this.errorValidate = true;
        return false;
      }

      if (this.ModelNote.description.length < 5) {
        this.messageForError = "Описание меньше 5 символов";
        this.errorValidate = true;
        return false;
      }
      this.messageForError = "";
      this.errorValidate = false;
      return true;
    },

    addNote() {
      if(this.validateForm()) {
        notes.create(this.ModelNote)
      }
    },
    changeTitle(el) {
      this.ModelNote.title = el.target.value;
    },
    changeDescription(el) {
      this.ModelNote.description = el.target.value;
    }
  }
}
</script>

<style scoped>
  input {
    width: 95%;
    padding: 1rem;
  }
</style>