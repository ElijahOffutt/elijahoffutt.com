<script setup>

let route = useRoute()

const fields = [{
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
}, {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
}]

</script>

<template>
    <div class="flex flex-col items-center justify-center gap-4 px-8 py-10">
        <UAuthForm :schema="schema" title="Login" description="Enter your credentials to access your account."
            icon="i-lucide-user" :fields="fields" to="/application" />
    </div>
</template>
