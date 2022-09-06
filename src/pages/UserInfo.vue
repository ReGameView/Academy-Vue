<template>
  <h3>
    {{title}}
  </h3>
</template>

<script>

export default {
  name: "UserInfo",

  data() {
    return {
      title: "Пользователи"
    }
  },
  props: {
    user_id: String
  }
}
</script>

<style scoped>

</style>