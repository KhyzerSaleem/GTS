import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/mongodb";
import mongoose from "mongoose";

// Define Admin model (or import it if you already have it)
const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDB();

        const user = await Admin.findOne({ email: credentials.email });

        if (!user) {
          console.log("❌ No user found");
          return null;
        }

        if (credentials.password !== user.password) {
          console.log("❌ Invalid password");
          return null;
        }

        // ✅ Success
        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // optional custom sign-in page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
