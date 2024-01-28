import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();

      const userExists = await User.findOne({
        email: profile.email,
      });

      if (!userExits) {
        //create is a function given by MongooseDB to create a new model
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
});
export { handler as GET, handler as POST };
