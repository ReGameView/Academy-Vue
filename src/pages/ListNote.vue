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
        Создатель записи
      </th>
    </tr>

    <tr v-for="note in store.Notes" v-bind:key="note.title">
      <td>
        {{ note.title }}
      </td>
      <td>
        {{ note.description }}
      </td>
      <td>
        {{ note.user.full_name }}
      </td>
    </tr>

  </table>

</template>

<script>
import { store } from "@/store.js";

export default {
  name: "ListNote",
  data() {
    return {
      store
    }
  },
}

</script>

<style scoped>

</style>