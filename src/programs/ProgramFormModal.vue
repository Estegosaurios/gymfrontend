<template>
  <v-modal>
    <v-card class="mt-3">
      <div class="card-body">
        <label for="program-name">Program name:</label>
        <div class="input-group mb-3">
          <input
            id="program-name"
            v-model="programData.name"
            type="text"
            class="form-control"
          >
        </div>
      </div>
      <div
        slot="actions"
        class="btn-group btn-group-lg"
        role="group"
      >
        <button
          type="button"
          class="btn btn-secondary rounded-0 flex-fill"
          @click="onCancel"
        >CANCEL</button>
        <button
          type="button"
          class="btn btn-danger rounded-0 flex-fill"
          @click="onAccept"
        >ACCEPT</button>
      </div>
    </v-card>
  </v-modal>
</template>

<script>
import { mapActions } from 'vuex';
import VCard from '@/core/VCard';
import VModal from '@/core/VModal';
import programManager from '@/managers/program'

export default {
  components: {
    VCard,
    VModal
  },
  data() {
    return {
      programData: null
    }
  },
  created() {
    this.setupData()
  },
  methods: {
    ...mapActions({
      saveProgram: 'saveProgram'
    }),
    setupData() {
      this.programData = programManager.createProgram().state
    },
    onCancel() {
      this.$emit('close');
    },
    onAccept() {
      this.saveProgram(this.programData).then(() => {
        this.$emit('close');
      });
    }
  }
}
</script>
