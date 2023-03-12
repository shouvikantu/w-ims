// import Head from "next/head";
// import Header from "@/components/Header";
// import EventCreation from "@/components/EventCreation";
// import Login from "@/components/Login";

// export default function Home() {
//   const user = null;

//   return (
//     <>
//       <Head>
//         <title>ITS</title>
//         <meta
//           name="description"
//           content="A tracking & Management system for Willamette University's intramural Program"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="text-amber-800">
//         {!user ? (
//           <Login />
//         ) : (
//           <div>
//             <Header />
//             <EventCreation />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import Head from "next/head";
import Header from "@/components/Header";
import EventCreation from "@/components/EventCreation";
import Login from "@/components/Login";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Head>
        <title>ITS</title>
        <meta
          name="description"
          content="A tracking & Management system for Willamette University's intramural Program"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-amber-800">
        {user ? (
          <div>
            <Header onLogout={handleLogout} />
            <EventCreation />
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </>
  );
}