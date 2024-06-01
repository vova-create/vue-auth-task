<template>
  <div v-if="visible" class="popup">
    {{ message }}
  </div>
</template>

<script>
export default {
  name:'PopupForm',
  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    }
  }
};
</script>
<style scoped lang="sass">
.popup
  position: fixed
  top: 20px
  left: 50%
  transform: translate(-50%)
  background-color: rgba(0, 0, 0, 0.7)
  color: #fff
  padding: 10px 20px
  border-radius: 5px
  z-index: 1000
  text-align: center
</style>
