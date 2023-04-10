import Head from "next/head";
import Header from "@/components/Header";
import EventCreation from "@/components/EventCreation";
import Login from "@/components/Login";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage on logout
  };

  return (
    <>
      <Head>
        <title>W-IMS</title>
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
