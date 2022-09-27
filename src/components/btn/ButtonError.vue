<template>
  <ButtonDefault type="button" title="Удалить" ></ButtonDefault>
</template>

<script>
import ButtonDefault from "@/components/btn/ButtonDefault";

export default {
  name: "ButtonError",
  components: {
    ButtonDefault
  }

}
</script>

<style scoped>
button {
  background: #ff5757;
}
</style>