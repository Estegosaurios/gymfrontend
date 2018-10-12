<template>
  <div class="footer bg-white">
    <ul class="nav justify-content-around">
      <li
        v-for="route in routes"
        :key="route.name"
        class="nav-item flex-fill"
      >
        <router-link
          class="nav-link footer__link text-center"
          active-class="footer__link--active"
          :to="{ name: route.name }"
        >{{ route.meta.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/router/router';

export default {
  data() {
    return {
      routes: []
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
      const route = routes.find(route => to.fullPath.includes(route.name))
      this.routes = route.children
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}

.footer__link {
  border-top: .1rem solid white;

  &--active {
    border-color: red;
  }
}
</style>
