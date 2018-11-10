<template>
  <div class="workouts__container">
    <div
      v-for="workout in workouts"
      :key="workout.id"
    >
      {{ workout.name }}
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
