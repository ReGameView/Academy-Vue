<template>
  <div :class="{ 'hide': isHide }">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "AlertError",
  props: {
    message: {
      required: true,
      type: String
    },
    isHide: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style scoped>
  div {
    display: none;
    width: 100%;
    padding: 2rem;
    font-size: 1.15rem;
    background: #ff5757;
    color: #444;
  }

  div.hide {
    display: block;
  }
</style>