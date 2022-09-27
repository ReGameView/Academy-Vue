<template>
  <ButtonDefault :type=type :title=text_btn>
  </ButtonDefault>
</template>

<script>
import ButtonDefault from "@/components/btn/ButtonDefault";
export default {
  name: "Button_Apply",
  components: {ButtonDefault},
  props: {
    text_btn: {
      require: false,
      type: String,
      default: "Текст кнопки"
    },
    type: {
      require: false,
      type: String,
      default: 'submit'
    }
  },
}
</script>

<style scoped>
  button {
    background: #2575ed;
    color: rgba(255,255,255,0.9);
    border: 0;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>