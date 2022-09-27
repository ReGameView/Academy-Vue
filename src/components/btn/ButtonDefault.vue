<template>
  <button :type=type>
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ButtonDefault",
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value);
      }
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
  padding: 10px;
  white-space: normal;
  color: rgba(255,255,255,.9);
  background: #2575ed;
  display: inline-block;
  vertical-align: top;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.65em;
  text-align: center;
  text-decoration: none;
  outline: 0;
  margin: 0;
  border: 0;
  border-radius: 2px;
  box-shadow: none;
  cursor: pointer;
}
</style>