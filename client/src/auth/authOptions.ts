import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      // =========================
      // Login User
      // =========================
      async authorize(credentials) {
        console.log("🔥🔥 AUTHORIZE FUNCTION CALLED");
        console.log("Credentials:", credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log("❌ Email or password missing");
          return null;
        }

        try {
          const user = await loginUser({
            email: credentials.email as string,
            password: credentials.password as string,
          });

          // console.log("🔥 Backend returned user:", user);

          if (!user) {
            console.log("❌ User authentication failed");
            return null;
          }

          console.log("✅ User authenticated:", user);

          return {
            id: String(user.id),
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("❌ Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  // =========================
  // Session
  // =========================
  session: {
    strategy: "jwt",
  },

  // =========================
  // Callbacks
  // =========================
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }

      return session;
    },
  },

  // =========================
  // Custom Login Page
  // =========================
  pages: {
    signIn: "/login",
  },
};
