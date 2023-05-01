import Head from "next/head";
import Header from "@/components/Header";
import EventListing from "@/components/EventListing";
import { getSession } from "next-auth/react";

export default function Home({ user }) {
  if (!user) {
    return (
    <div className="bg-container max-h-screen">
      <EventListing />
    </div>
    )     
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      user: session,
    },
  };
}