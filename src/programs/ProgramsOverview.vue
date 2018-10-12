<template>
  <div class="container-fluid py-3">
    <div
      v-for="program in programs"
      :key="program.id"
      class="py-5"
    >{{ program.name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      programs: 'getPrograms'
    })
  },
  created() {
    this.fetchPrograms();
  },
  methods: {
    ...mapActions({
      fetchPrograms: 'fetchPrograms'
    })
  }
}
</script>
