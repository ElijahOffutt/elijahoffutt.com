<template>
  <!-- SVG OVERLAY -->
  <!-- CONTENT -->
  <div id="content_wrap">
    <v-app>
      <v-main style="background: transparent !important;"></v-main>
    </v-app>
  </div>
  <canvas ref="Background" id="Background" style="height: 100vh; width: 100vw;" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createScene } from "./services/background";
const Background = ref(null);

onMounted(() => {
  if (Background.value) {
    createScene(Background.value);
  }
});
</script>

<style lang="scss">
body,
html,
document {
  display: block;
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#content_wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#Background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.v-application,
.v-main {
  background-color: transparent !important;
  /* remove default opaque backgrounds */
  box-shadow: none !important;
  /* optional: remove any shadow */
}
</style>