<template>
  <ShadowComponent></ShadowComponent>
  <div class="modal" v-bind:class="{ 'modal-open': hidden }">
    <div class="modal-content">
      <span class="close" @click="hide">&times;</span>
        {{ content }}
    </div>
  </div>
</template>

<script>
import ShadowComponent from "@/components/default/ShadowComponent";
import { store } from "@/store.js";


export default {
  name: "ModalWindow",
  components: {
    ShadowComponent
  },
  props: {
    content: {
      type: String,
      require: false,
      default: "Текст в модальном окне"
    }
  },
  data() {
    return {
      hidden: true,
    }
  },
  methods: {
    show: function() {
      store.shadowBoxHidden = true;
      this.hidden = true;
    },
    hide: function() {
      store.shadowBoxHidden = false;
      this.hidden = false;
    },
    trigger: function() {
      store.shadowBoxHidden = !store.shadowBoxHidden;
      this.hidden = !this.hidden;
    }
  }
}
</script>

<style scoped lang="scss">

.modal {
  z-index: 1001;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */

  &.modal-open {
    display: block;
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;

    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;

      &:hover, &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>