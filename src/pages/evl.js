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
    <>    
  <div className="bg-container2 min-h-screen rounded-lg shadow-lg">
    <Header />
    <div className="px-4">

    
  <h1 className="text-3xl font-bold text-white mb-4 lg:mb-6">Upcoming Events</h1>
  {events.length > 0 ? (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {events.map((event) => (
        <li key={event.id} className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-4 lg:p-6 ">
          <h2 className="text-xl font-bold text-white mb-2">{event.eventName}</h2>
          <p className="text-gray-400 mb-2">
            {event.eventDate} at {event.time}
          </p>
          <p className="text-gray-400 mb-4 lg:mb-6">{event.eventLocation}</p>
          <p className="text-gray-300">{event.eventDescription}</p>
          <Link href={`/registration/${event.id}`} className="inline-block mt-4 text-blue-500 hover:text-blue-300">
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
</>


  );
}


export default EventListing;
