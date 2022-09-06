<template>
  <div ref="" v-bind:class="{ shadow: store.shadowBoxHidden }"></div>
</template>

<script>
import { store } from "@/store.js";


export default {
  name: "ShadowComponent",
  data() {
    return {
      store
    }
  },
  methods: {
    show: function() {
      store.shadowBoxHidden = true
    },
    hide: function() {
      store.shadowBoxHidden = false;
    },
    trigger: function() {
      store.shadowBoxHidden = !store.shadowBoxHidden;
    }
  }
}
</script>

<style scoped>
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.2;
  z-index: 1000;
}
</style>