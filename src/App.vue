<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.name;
      }
    },
  }
}
</script>

<style>
  .content {
    margin: 0;
    left: 0;
    top: 0;
    position: relative;
  }

</style>