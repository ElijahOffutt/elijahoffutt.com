<template>
  <!-- SVG OVERLAY -->
  <!-- CONTENT -->
  <div id="content_wrap">
    <!-- <v-app>
      <v-main>
        <h1>check</h1>
        <v-btn variant="elevated" size="x-large" @click="startBounce">test</v-btn>
      </v-main>
    </v-app> -->
    <div id="reference" />
  </div>
  <canvas ref="Background" id="Background" style="height: 100vh; width: 100vw;" />
</template>

<script setup>

// ┌─┐
// ││
// └─┘ 

import { ref, onMounted } from "vue";
import { createScene } from "./services/background";
let Background = ref(null);
let background = {};
let bouncing = ref(false);

onMounted(async () => {
  if (Background.value) {
    let { engine, scene, bounce } = await createScene(Background.value);
    background.engine = engine;
    background.scene = scene;
    background.bounceAnimation = bounce;
  }
});

let startBounce = async () => {
  let { bounceAnimation } = background;
  if (bouncing.value) {
    bounceAnimation.pause();
    bouncing.value = false;
  } else {
    bounceAnimation.play();
    bouncing.value = true;
  }
};
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
  z-index: 10;
  pointer-events: none;

  #reference {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: pink;
    opacity: 0.25;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("@/assets/concept.webp");
  }

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