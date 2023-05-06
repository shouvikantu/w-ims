import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { getSession } from "next-auth/react";
import EventParticipants from "@/components/EventParticipants";
import Link from "next/link";

export async function getServerSideProps(context) {6 
    const session = await getSession(context);
    if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session,
    },
  };
}

const eventsRef = collection(db, "events");
function ShowEventData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventscollection = onSnapshot(eventsRef, (snapshot) => {
      const newEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(newEvents);
    });
    return () => eventscollection;
  }, []);

  return (
    <div className="bg-container min-h-screen">
      <div className="px-4 mt-10">
        <div className="py-4">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-5 md:right-10 right-5"
          >
            Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4 lg:mb-6">
          Events Summary
        </h1>
        <div className="bg-white bg-opacity-80 overflow-x-auto">
          {events.length > 0 ? (
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="text-gray-900 border-2 border-black p-2">
                    Event Name
                  </th>
                  <th className="text-gray-900 hidden md:inline-block w-full border-black p-2">
                    Event Description
                  </th>
                  <th className="text-gray-900 border-2 border-black p-2">
                    Participants
                  </th>
                  <th className="text-gray-900 border-2 border-black p-2">
                    Contact Info
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td className="text-gray-900 border-2 border-black p-2">
                      {event.eventName}
                    </td>
                    <td className="text-gray-900 table-border hidden md:flex w-full  p-2  ">
                      {event.eventDescription} <br />
                      {event.eventLocation} <br />
                      {event.eventDate}
                    </td>
                    
                    <EventParticipants ParentDocId={event.id} key={event.id} />
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-900">No scheduled events.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowEventData;
