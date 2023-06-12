import { NuxtAuthHandler } from '#auth'
import GoogleProvider from "next-auth/providers/google";

const config = useRuntimeConfig()

export default NuxtAuthHandler({
    secret: config.public.nuxtSecret,
    providers: [
        GoogleProvider.default({
            clientId: config.public.googleClientId,
            clientSecret: config.public.googleSecret
        })
    ]
})