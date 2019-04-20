<template>
  <v-app id="app">
    <transition name="clicked-route" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<style lang="scss">
@import "assets/styles/global";

.clicked-route-enter,
.clicked-route-leave-to {
  opacity: 0;
}
.clicked-route-enter-active {
  transition: all 0.3s ease-out;
}
.clicked-route-enter-to,
.clicked-route-leave {
  opacity: 1;
}
.clicked-route-leave-active {
  transition: all 0.3s ease-out;
  .section {
    display: none;
  }
}
</style>
