<template>
  <input :type=this.type :placeholder=this.placeholder :value=this.value>
</template>

<script>
export default {
  name: "TextBoxDefault",
  props: {
    type: {
      required: false,
      type: String,
      default: "text",
    },
    placeholder: {
      required: true,
      type: String
    },
    value: {
      required: false,
      type: String
    }
  }
}
</script>

<style scoped>
input {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  transition: border ease 0.5s;
  background: #fff;
  border: 1px solid #ccc;
  position: relative;
  z-index: 2;
  -web-appearance: none;
  font-size: 1em;
  box-shadow: none;
  padding: 0.3em 0.35em;
  line-height: 1.65em;
  border-radius: 0;
  outline: 0;
}
input:focus, input:hover {
  outline: 0;
  border-color: #2575ed;
  box-shadow: 0 0 0 2px rgb(37 117 237 / 30%), 0 1px 2px rgb(0 0 0 / 20%) inset;
}
</style>