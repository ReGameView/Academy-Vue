<template>
  <div v-if="hidden" class="shadow"></div>
  <div v-if="hidden" class="loading">
    {{lbl_loading}}
  </div>
</template>

<script>
export default {
  name: "OverLay",
  props: {
    lbl_loading: {
      require: false,
      type: String,
      default: 'Загрузка...'
    },
    need_loading: {
      require: false,
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      hidden: false,
    }
  },
  methods: {
    show: function() {
      this.hidden = true
    },
    hide: function() {
      this.hidden = false;
    },
    trigger: function() {
      this.hidden = !this.hidden;
    }
  }
}
</script>
<style scoped>


  .loading {
    position: absolute;
    bottom: 5%;
    right: 2.5%;
    text-align: center;
    background: #2575ed;
    padding: 1rem 2rem;
    color: white;
  }

</style>