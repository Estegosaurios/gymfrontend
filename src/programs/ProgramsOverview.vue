<template>
  <div class="container-fluid">
    <card
      v-for="program in programs"
      :key="program.id"
      class="mt-3"
      :title="program.name"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Card from '@/core/VCard';

export default {
  components: {
    Card
  },
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
