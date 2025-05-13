import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            "https://flower.elevateegy.com/api/v1/auth/signin",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          if (data.message === "success") {
            return {
              id: data.user._id,
              email: data.user.email,
              token: data.token,
            };
          } else {
            throw new Error(data.error);
          }
        } catch (error) { 
      throw new Error(error.response?.data?.error ); 
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",  
    maxAge: 30 * 24 * 60 * 60,
  },

  jwt: {
    secret: process.env.AUTH_SECRET,
    encryption: false,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      return session.user.accessToken;
    },

  },
});
export { handler as GET, handler as POST }