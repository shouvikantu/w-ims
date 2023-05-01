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
        async signIn({ user, account, profile, email, credentials }) {
        if(user.email === "sahmed@willamette.edu"){
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
              } else {
                // Return false to display a default error message
                return alert("Unauthorized")
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
              }
        }
          
        }
      },
    
    secret : process.env.NEXTAUTH_SECRET
});