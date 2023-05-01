import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = [

    'sahmed@willamette.edu',

    // ... more email addresses
  ];

export default NextAuth({ 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn(user, account, profile) {
          
            if (allowedEmails.includes(user.email)) {
              return false;
            } else {
              return true;
            }
        },
      },
    
    secret : process.env.NEXTAUTH_SECRET
});