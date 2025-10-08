<template>
  <div id="splash-content-wrap">

    <section style="background-image: url('/splash-background.png');"
      class="flex justify-center pt-12 w-full h-screen bg-cover bg-center">

      <div class="w-5/12 h-[80%] pr-6 text-white drop-shadow-sm">

        <span><b>Connecting Health Professionals with Solutions</b></span>
        <h3 class="text-4xl pb-3">Build Your NP & PA Workforce From Hiring to Collaboration Coverage</h3>

        <div class="h-[1px] bg-gray-200 w-full mb-3" />

        <p style="font-size: 1.25em;"><b>Industry leader in Collaborating Physician Matchmaking</b>. We help employers
          <b>hire top
            NPs & PAs</b> while ensuring they have the <b>right collaboration coverage</b> to practice safely and
          compliantly.
        </p>
        <br />
        <u-button to="/elijah" icon="mdi-video-vintage" size="xl" class="whitespace-nowrap">Watch my Video</u-button>
      </div>

      <div class="w-3/12 h-[80%] pl-6>">

        <u-page-card>
          <img src="https://collaboratingdocs.com/wp-content/uploads/2025/09/dr-annie-depasquale-portrait.jpg"
            class="w-full" />
        </u-page-card>

      </div>

    </section>

  </div>
</template>

<script setup lang="ts">
import Login from '@/components/forms/Login.vue'
let route = useRoute()
</script>

<style lang="scss">
.left-splash-border {
  background-color: rgba($color: #fff, $alpha: .50);
  width: 100%;
  padding: 20px 30px;

  .left-splash-image {
    background-image: url("https: //collaboratingdocs.com/wp-content/uploads/2025/09/dr-annie-depasquale-portrait.jpg");
    background-position: top center;
    background-size: cover;
    height: 300px;
    width: 100%;
  }

  .left-splash-caption {
    position: absolute;
    bottom: 0;
    transform: translateY(-100%);
    background-color: rgba($color: #fff, $alpha: .25);
  }
}
</style>