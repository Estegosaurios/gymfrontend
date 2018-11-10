<template>
  <div id="app">
    <router-view name="header" />
    <div class="content">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import router from '@/router/router';

export default {
  data() {
    return {
      transitionName: null
    };
  },
  watch: {
    '$route' (to, from) {
      const routes = router.options.routes
        .filter(route => route.path !== '*')
        .map(route => route.path)
      const toPostion = _.indexOf(routes, to.path);
      const fromPostion = _.indexOf(routes, from.path);
      this.transitionName = toPostion < fromPostion ? 'slide-right' : 'slide-left';
    }
  }
}
</script>

<style lang="scss" scoped>
.content > div {
  width: 100%;
}

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  position: absolute;
  top: 0;
  transition: left .5s;
}

.slide-right-enter, .slide-left-leave-to {
  left: -100vw;
}

.slide-right-enter-to, .slide-right-leave,
.slide-left-enter-to, .slide-left-leave {
  left: 0vw;
}

.slide-left-enter, .slide-right-leave-to {
  left: 100vw;
}
</style>
