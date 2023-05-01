import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = [
    'dtii@willamette.edu',
    'sahmed@willamette.edu',
    'hcheng@willamette.edu',
    'mmheine@willamette.edu',
    'gcallahan@willamette.edu',
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
          // Check if the user's email address is in the allowed list
          if (allowedEmails.includes(user.email)) {
            // User is allowed, return true
            return true;
          } else {
            // User is not allowed, return false
            return false;
          }
        },
      },
    secret : process.env.NEXTAUTH_SECRET
});