import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import Link from "next/link";
import Header from "@/components/Header";

const eventsRef = collection(db, "events");

function EventListing() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(eventsRef, (snapshot) => {
      const newEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(newEvents);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-screen">
  <h1 className="text-2xl font-bold text-white mb-4">Upcoming Events</h1>
  {events.length > 0 ? (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
      {events.map((event) => (
        <li key={event.id} className="bg-gray-900 rounded-lg shadow-lg p-4 h-[150px] w-[400px]">
          <h2 className="text-lg font-bold text-white">{event.eventName}</h2>
          <p className="text-gray-400">
            {event.eventDate} at {event.time}
          </p>
          <p className="text-gray-400">{event.eventLocation}</p>
          <p className="mt-2 text-gray-300">{event.eventDescription}</p>
          <Link href={`/registration/${event.id}`} className="text-blue-500 hover:text-blue-300">
            Register for this event
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400">No upcoming events.</p>
  )}
</div>

    </div>

  );
}

export default EventListing;
