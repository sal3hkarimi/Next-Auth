import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { password, email } = req.query;

        if (password === "133" && email === "azim@gmail.com") {
          console.log("authorize");

          return {
            email,
            password,
            id: 123456,
          };
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
