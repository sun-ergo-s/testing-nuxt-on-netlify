<script setup>

definePageMeta({
    auth: {
        navigateAuthenticatedTo: '/',
    }
})

const { status, signIn } = useAuth()

</script>
<template>
    <div>
        <button @click="signIn('google', { callbackUrl: 'https://whimsical-biscotti-346a06.netlify.app/api/auth/callback/google' })">Google Sing-In</button><br/>
        {{ status }}
    </div>
</template>