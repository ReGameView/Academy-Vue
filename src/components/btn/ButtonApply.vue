<template>
  <button @click="countable">
    {{ text_btn }} {{ count }}
  </button>
</template>

<script>
export default {
  name: "Button_Apply",
  props: {
    text_btn: {
      require: false,
      type: String,
      default: "Текст кнопки"
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countable: function() {
      this.count++;
    }
  }
}
</script>

<style scoped>
  button {
    background: #2575ed;
    color: rgba(255,255,255,0.9);
    border: 0;
    width: 100%;
    padding: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }
</style>