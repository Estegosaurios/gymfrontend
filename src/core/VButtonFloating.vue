<template>
  <input
    :style="size"
    class="btn btn-danger btn-lg rounded-circle shadow"
    type="button"
    value="+"
  >
</template>

<script>
export default {
  props: {
    sm: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    size() {
      return {
        height: this.sm ? '40px' : '56px',
        width: this.sm ? '40px' : '56px'
      }
    }
  }
}
</script>

