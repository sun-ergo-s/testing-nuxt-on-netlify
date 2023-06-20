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
      pkceCodeVerifier: {
        name: "__Host-next-auth.pkce.code_verifier",
        options: {
          httpOnly: true,
          sameSite: "none",
          path: "/",
          secure: true,
        },
      },
      state: {
        name: `__Host-next-auth.state`,
        options: {
          httpOnly: true,
          sameSite: "lax",
          path: "/",
          secure: true,
          maxAge: 900
        },
      },
    }
})