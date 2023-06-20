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
    ],
    pkceCodeVerifier: {
      name: `next-auth.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
        maxAge: 900
      }
    },
    state: {
      name: `next-auth.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
        maxAge: 900
      },
    },
    nonce: {
      name: `next-auth.nonce`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    }
})