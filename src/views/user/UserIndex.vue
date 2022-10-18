<template>
<div>
<!--  <button @click="getUser">-->
<!--    Получить пользователя-->
<!--  </button>-->
</div>
  <div v-for="object in User.List" v-bind:key="object.id">
    <div v-for="(locale, key) in User.Structure" v-bind:key="locale">
      {{ locale }}: <strong>{{ object[key] }}</strong>
    </div>

    <button>
      <router-link :to=" '/user/'+object.id ">
        Все данные пользователя
      </router-link>
    </button>

    <hr>
  </div>

</template>

<script>
import {User} from "@/models/User";
export default {
  name: "UserIndex",
  data() {
    return {
      User
    }
  },
  created() {
    User.Methods.index();

  },
  methods: {
    // getUser() {
    //   User.Methods.get()
    //   console.log(User.Current);
    // }
  }
}
</script>

<style scoped>

</style>