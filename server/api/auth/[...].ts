import { NuxtAuthHandler } from '#auth'
import GoogleProvider from "next-auth/providers/google";

const config = useRuntimeConfig()

export default NuxtAuthHandler({
    secret: config.nuxtSecret,
    providers: [
        GoogleProvider.default({
            clientId: config.googleClientId,
            clientSecret: config.googleSecret
        })
    ],
    cookies: {
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
                options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true,
            },
        },
    }
})