<template>
  <div>
    <v-card
      v-for="program in programs"
      :key="program.id"
      class="mt-3"
      :title="program.name"
    />
    <v-button
      class="button-fab mb-3 mr-3"
      @click="handleModal"
    />
    <program-form-modal
      v-if="showModal"
      @close="handleModal"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VCard from '@/core/VCard';
import VButton from '@/core/VButtonFloating';
import ProgramFormModal from '@/programs/ProgramFormModal';

export default {
  components: {
    VCard,
    VButton,
    ProgramFormModal
  },
  data() {
    return {
      showModal: false
    }
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
    }),
    handleModal() {
      this.showModal = !this.showModal;
    }
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
