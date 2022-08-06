import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth";

export default NextAuth({
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      })
    ]
  })

