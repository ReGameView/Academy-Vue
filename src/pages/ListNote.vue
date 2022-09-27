<template>
  <div></div>
  <table>
    <tr>
      <th>
        Название
      </th>
      <th>
        Описание
      </th>
      <th>
        Удалить
      </th>
    </tr>

    <tr v-for="note in notes._data" v-bind:key="note.id">
      <input type="hidden" class="current_id" name="id" :value=note.id>

      <td>
        <input type="text" :value=note.title @change=changeNote>
<!--        {{ note.title }}-->
      </td>
      <td>
        {{ note.description }}
      </td>
      <td>
        <ButtonError @click=removeNote :data-id=note.id></ButtonError>
      </td>
    </tr>
  </table>

</template>

<script>
import { notes } from "@/Notes";
import ButtonError from "@/components/btn/ButtonError";

export default {
  name: "ListNote",
  components: {
    ButtonError
  },
  methods: {
    removeNote(event) {
      notes.delete(Number.parseInt(event.target.dataset.id));
    },
    changeNote(event) {
      console.log(event.target.parentNode.parentNode.children[0].value);
    }
  },
  data() {
    return {
      notes
    }
  },
}

</script>

<style scoped>
tr {
  width: 100%;
}

td, th {
  border: 1px solid #444;
  padding: 2rem
}

input {
  border: 0;
}

input:hover, input:focus, input:active {
  outline: 1px solid #cbcbcb;
}

</style>