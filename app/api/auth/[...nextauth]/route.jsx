import User from "@/models/User";
import NextAuth from "next-auth/next"
import CredentialsProviders from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { connectToDatabase } from "@/utils/db";

export const authOptions = {
    providers: [
        CredentialsProviders({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "Email",
                    placeholder: "enter email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {

                await connectToDatabase();

                if (!credentials || !credentials.password || !credentials.email) {
                    return null;
                }

                let user = await User.findOne({ email: credentials.email })
                if (!user) {
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(credentials.password, salt);
                    user = await User.create({
                        email: credentials.email,
                        password: hash,
                    });
                    return user;
                }

                const checkPass = bcrypt.compareSync(credentials.password, user.password);

                if (checkPass) {
                    return user;
                }

                return null;
            }
        })
    ],

}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };