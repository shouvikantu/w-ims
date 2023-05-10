import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({ 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
        if(user.email === "sahmed@willamette.edu" || user.email === "hcheng@willamette.edu" || user.email === "dtii@willamette.edu" || user.email==="qnottage@willamette.edu" || user.email === "gcallahan@willamette.edu"){
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
              } else {
                return alert("Unauthorized")
              }
        }
          
        }
      },
    
    secret : process.env.NEXTAUTH_SECRET
});