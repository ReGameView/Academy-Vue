<template>
  <div>
    <TextBoxDefault type="text" :placeholder=this.placeholder :value=this.value></TextBoxDefault>
  </div>
</template>

<script>
import TextBoxDefault from "@/components/textbox/TextBoxDefault";

export default {
  name: "TextBox",
  components: {
    TextBoxDefault
  },
  props: {
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
  border-color: #2575ed;
}
</style>