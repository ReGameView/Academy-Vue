<template>
<div>

</div>
  <div v-for="(locale, key) in User.Structure" v-bind:key="locale">
    {{ locale }}: <strong>{{ User.Current[key] }}</strong>
  </div>

  <button @click=this.delete>
    Удалить
  </button>

  <button>
    <router-link :to="'/user/' + this.$route.params.id + '/edit'" >
      Обновление
    </router-link>
  </button>

</template>

<script>
import {User} from "@/models/User";
export default {
  name: "UserGet",
  data() {
    return {
      User
    }
  },
  created() {
    User.Methods.get(this.$route.params.id);
  },
  methods: {
    delete() {
      console.log(this.$route.params.id);
    }
  }

}
</script>

<style scoped>

</style>