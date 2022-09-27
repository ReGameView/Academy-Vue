<template>
  <button style="display: none" @click="randomUser" id="btn"></button>
</template>
<script>
import { User } from "@/user.js";

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').click();
})

export default {
  name: "RandomUser",
  data() {
    return {
      User
    }
  },
  methods: {
    randomUser() {
      fetch('https://randomuser.me/api/')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            if (this.getCookie('auth'))
            {
              this.User.full_name = this.getCookie('full_name');
              this.User.full_name = this.getCookie('login');
            } else {
              this.User.full_name = data.results[0].name.title + data.results[0].name.first + data.results[0].name.last
              this.User.login = data.results[0].email
              document.cookie = "auth=1"
              document.cookie = encodeURIComponent('full_name') + "=" + encodeURIComponent(this.User.full_name)
              document.cookie = encodeURIComponent('login') + "=" + encodeURIComponent(this.User.login)
            }
          })
    },

    getCookie(name) {
      // user=John; auth=1; full_name=MsDragaKalini%C4%87; login=draga.kalinic%40example.com

      // full_name

      // Обрезаем строку до вхождения name (Переменная result)
      // Проверяем через сколько будет '=' (Переменная count_symbolic)
      // Сравниваем то ли мы нашли name.length === count_symbolic
      // Ищем ' ;'
      // Удаляем все что после ' ;'
      // result = split(result, ' ;', 2)
      // return split(result[0], '=')[1]       [0] => 'name' [1] => 'value'

      return name;

      // let matches = document.cookie.match(new RegExp(
      //     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      // ));
      // return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  }
}
</script>

<style scoped>

</style>