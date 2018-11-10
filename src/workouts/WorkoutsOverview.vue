<template>
  <div class="workouts__container">
    <div
      v-for="workout in workouts"
      :key="workout.id"
      class="workout"
    >
      <span>{{ workout.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      workouts: 'getWorkouts'
    })
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    ...mapActions({
      fetchWorkouts: 'fetchWorkouts'
    }),
    fetchData() {
      this.fetchWorkouts()
    }
  }
}
</script>

<style lang="scss" scoped>
.workout {
  padding: 1rem;
  margin-bottom: 0.0625rem;
  background-color: $surface-color;
}
</style>
