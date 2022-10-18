<template>
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
import ButtonError from "@/components/btn/ButtonError";
import { notes } from "@/models/Notes";

export default {
  name: "PageNotes",
  components: {
    ButtonError
  },
  data() {
    return {
      notes
    }
  }
}
</script>

<style scoped>

</style>