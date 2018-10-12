<template>
  <div class="container-fluid">
    <v-card
      v-for="program in programs"
      :key="program.id"
      class="mt-3"
      :title="program.name"
    />
    <v-button class="button-fab mb-3 mr-3" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VCard from '@/core/VCard';
import VButton from '@/core/VButtonFloating';

export default {
  components: {
    VCard,
    VButton
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

<style lang="scss" scoped>
.button-fab {
  position: fixed;
  right: 0;
  bottom: 42px;
}
</style>
