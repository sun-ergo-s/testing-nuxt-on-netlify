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
    cookies: {
        sessionToken: {
          name: `__Secure-next-auth.session-token`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: true
          }
        },
        callbackUrl: {
          name: `__Secure-next-auth.callback-url`,
          options: {
            sameSite: 'lax',
            path: '/',
            secure: true
          }
        },
        csrfToken: {
          name: `__Host-next-auth.csrf-token`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: true
          }
        },
        pkceCodeVerifier: {
          name: `__Secure-next-auth.pkce.code_verifier`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: true,
            maxAge: 900
          }
        },
        state: {
          name: `__Secure-next-auth.state`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: true,
            maxAge: 900
          },
        },
        nonce: {
          name: `__Secure-next-auth.nonce`,
          options: {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: true,
          },
        },
    }
})