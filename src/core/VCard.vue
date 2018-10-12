<template>
  <div class="card border-0 shadow-sm">
    <div class="card-body">
      <h5 class="card-title pb-5">{{ title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
