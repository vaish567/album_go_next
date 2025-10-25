import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authHandler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Super simple demo auth (no API call)
        const demoUser = {
          id: "u1",
          name: "Ada Lovelace",
          email: "ada@example.com",
        };
        if (
          credentials?.email === "ada@example.com" &&
          credentials?.password === "password"
        ) {
          return demoUser;
        }
        return null;
      },
    }),
  ],
});

export { authHandler as GET, authHandler as POST };
