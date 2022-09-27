<template>
  <div>
    <TextBoxDefault type="password" :placeholder=this.placeholder :value=this.value></TextBoxDefault>
  </div>
</template>

<script>
import TextBoxDefault from "@/components/textbox/TextBoxDefault";

export default {
  name: "PasswordBox",
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
  },
}
</script>

<style scoped>
  input {
    border-color: #2575ed;
  }


</style>