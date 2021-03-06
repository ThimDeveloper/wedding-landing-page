import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { checkAuthCode } from "@/db/index";
import { randomUUID } from "crypto";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        authcode: {
          label: "Hemlig kod",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const authcode = credentials?.authcode;
        let user = null;

        if (authcode) {
          const isCodeValid = await checkAuthCode(authcode);
          if (isCodeValid) {
            user = {
              id: randomUUID(),
              name: "authenticated-wedding-guest",
            };
          }
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
});
