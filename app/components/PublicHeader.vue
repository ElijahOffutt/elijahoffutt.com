<template>
    <u-header>

        <template #left>

            <NuxtLink to="/docs">
                <!-- <Logo class="h-6 w-auto" /> -->
                 <h1>Collaborating Docs</h1>
              </NuxtLink>

        </template>
        
        <template #right>

            <NuxtLink to="/login" class="u-header-link">
                Log in
            </NuxtLink>
            <NuxtLink to="/register" class="u-header-link u-header-link-primary">
                Sign up
            </NuxtLink>

            <u-button>sample</u-button>

        </template>

    </u-header>
</template>