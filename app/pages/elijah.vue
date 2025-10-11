<template>
    <div id="splash-content-wrap">

        <section style="background-image: url('/splash-background.png');"
            class="flex justify-center pt-12 w-full h-screen bg-cover bg-center">

            <div class="w-8/12">
                <h2 class="text-4xl text-center mb-6 text-white drop-shadow">What I bring to Collaborating Docs
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X52WjOuNG1A?si=5JqVSZAf0Zw4tvVS"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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