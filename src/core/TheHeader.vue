<template>
  <nav class="header">
    <ul class="header__list">
      <router-link
        v-for="route in routes"
        :key="route.name"
        tag="li"
        class="header__link"
        active-class="header__link--active"
        :to="{ name: route.name }"
      >
        <i :class="[classIcon(route.meta.icon)]" />
        <span>{{ route.meta.name }}</span>
      </router-link>
    </ul>
  </nav>
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
    classIcon(icon) {
      return `fas fa-${icon}`
    },
    onRouteChange() {
      this.routes = router.options.routes.filter(route => route.path !== '*')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3.75rem;
  padding: 0 1rem;
}

.header__list {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.header__link {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  color: $background-text-color;
  overflow: hidden;

  transition: flex-shrink .5s ease;
  transition: flex-grow .5s ease;

  i {
    padding: 0 .5rem;
    color: $background-icon-color;
  }

  span {
    display: none;
    padding-left: .5rem;
  }
}

.header__link--active {
  flex: 1 1 auto;
  justify-content: flex-start;

  span {
    display: block;
  }
}
</style>
