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
        <button @click="async () => await signIn()">Google Sing-In</button><br/>
        {{ status }}
    </div>
</template>