<template>
  <nav class="navbar navbar-light justify-content-center bg-danger shadow-sm">
    <span class="navbar-brand m-0 h1 font-weight-bold text-white">{{ title }}</span>
  </nav>
</template>

<script>
import router from '@/router/router';

export default {
  data() {
    return {
      route: null
    }
  },
  computed: {
    title() {
      return this.route.meta.name.toUpperCase()
    }
  },
  watch: {
    '$route': {
      handler: 'onRouteChange',
      immediate: true
    }
  },
  methods: {
    onRouteChange(to) {
      const routes = router.options.routes
      this.route = routes.find(route => to.fullPath.includes(route.name))
    }
  }
}
</script>
