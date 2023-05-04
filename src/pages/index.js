import EventListing from "@/components/EventListing";
import { getSession } from "next-auth/react";
import EventCreation from "@/components/EventCreation";

export default function Home({ user }) {
  if (!user) {
    return (
    <div className="bg-container">
      <EventListing />
    </div>
    )     
  }

  return (
    <div className="bg-container">
      <EventCreation />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      user: session,
    },
  };
}

