<template>
  <ModalWindow content="Привет, Мир!"></ModalWindow>
  <OverLay></OverLay>
  <Button_Apply text_btn="Кол-во кликов: "></Button_Apply>
</template>
<script>
import Button_Apply from "@/components/btn/ButtonApply";
import OverLay from "@/components/default/OverLay";
import ModalWindow from "@/components/modal/ModalWindow";


export default {
  name: 'App',
  components: {
    Button_Apply,
    OverLay,
    ModalWindow
  },
  data() {
    return {
    }
  },
}
</script>

<style>
</style>