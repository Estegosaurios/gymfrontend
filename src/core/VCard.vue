<template>
  <div class="card border-0 shadow-sm">
    <div
      v-if="hasTitle"
      class="card-body"
    >
      <h5 class="card-title pb-5">{{ title }}</h5>
    </div>
    <slot />
    <slot name="actions" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasTitle() {
      return this.title !== ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
}
</style>

