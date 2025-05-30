import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/hello"; // redirect to /hello on success
    },
  },
  pages: {
    signIn: "/", // your custom login page
  },
});

export { handler as GET, handler as POST };
