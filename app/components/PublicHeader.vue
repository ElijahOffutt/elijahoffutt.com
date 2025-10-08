<template>
    <u-header class="h-[80px]">

        <template #left>

            <u-tooltip :delay-duration="0" text="Home">
                <NuxtLink to="/">
                    <img class="h-10" src="https://collaboratingdocs.com/wp-content/uploads/2022/12/logo-retina.jpg" />
                </NuxtLink>
            </u-tooltip>

        </template>

        <template #right>

            <u-navigation-menu :unmount-on-hide="false" class="w-full justify-center" content-orientation="horizontal"
                variant="pill" highlight="false" highlight-color="primary" :items="items" />

            <div class="mr-3 ml-1 inline-block h-[25px] w-[1px] bg-neutral-300" />

            <u-modal>

                <template #default>

                    <u-tooltip :delay-duration="0" text="Log In">
                        <u-button class="cursor-pointer" icon="hugeicons:login-03" />
                    </u-tooltip>

                </template>

                <template #content>
                    <Login />
                </template>
            </u-modal>

        </template>

    </u-header>
</template>

<script setup>

import Login from "@/components/forms/Login.vue"

const items = ref([
    {
        label: 'Services',
        icon: 'i-lucide-briefcase',
        children: [
            {
                label: 'Employers: Collaborating Physician Coverage',
                description: 'Access flexible collaborating physician coverage for your organization.',
                icon: 'i-lucide-stethoscope',
                // to: '/employers/coverage'
            },
            {
                label: 'Employers: Hire NPs + PAs',
                description: 'Connect with top Nurse Practitioners and Physician Assistants for your team.',
                icon: 'i-lucide-users',
                // to: '/employers/hire'
            },
            {
                label: 'NP + PA Entrepreneurs: Collaborating Physician Coverage',
                description: 'Independent providers can secure collaborating physicians for their practices.',
                icon: 'i-lucide-user-check',
                // to: '/entrepreneurs'
            }
        ]
    },
    {
        label: 'About Us',
        icon: 'i-lucide-info',
        children: [
            {
                label: 'Our Story + Our Values',
                description: 'Learn how our mission and values drive better healthcare collaborations.',
                icon: 'i-lucide-heart',
                // to: '/about'
            },
            {
                label: 'Our Experts',
                description: 'Meet the experienced professionals powering our platform.',
                icon: 'i-lucide-award',
                // to: '/experts'
            },
            {
                label: 'Testimonials',
                description: 'Hear what our clients and partners have to say.',
                icon: 'i-lucide-message-circle',
                // to: '/testimonials'
            }
        ]
    },
    {
        label: 'Resources',
        icon: 'i-lucide-book-open',
        children: [
            {
                label: 'Services our NPs + PAs Love',
                description: 'Explore tools and services trusted by advanced practice providers.',
                icon: 'i-lucide-heart-handshake',
                // to: '/services'
            },
            {
                label: 'Blog',
                description: 'Stay informed with industry insights, news, and educational articles.',
                icon: 'i-lucide-file-text',
                // to: '/blog'
            },
            {
                label: 'Join the Physician Team',
                description: 'Collaborate with us as a licensed physician and expand your practice.',
                icon: 'i-lucide-user-plus',
                // to: '/join'
            }
        ]
    },
    {
        label: 'DASHBOARD',
        icon: 'mdi-monitor-dashboard',
        to: '/application',
        active: true
        // target: '_blank'
    }
])

</script>