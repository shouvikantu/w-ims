import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import Link from "next/link";
import Header from "@/components/Header";

const eventsRef = collection(db, "events");

function EventListing({onLogout}) {
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
    <div className="bg-container min-h-screen text-center">
    <Header onClick={onLogout} />
    <div className=" flex flex-col justify-center items-center min-h-screen rounded-lg shadow-lg">
    
    <div className="px-4">
      <h1 className="text-3xl font-bold text-white  mb-4 lg:mb-6">Upcoming Events</h1>
      {events.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-6">
          {events.map((event) => (
            <li key={event.id} className="bg-opacity-80 rounded-lg shadow-lg p-4 w-[300px] lg:p-6 bg-gray border-2">
              <h2 className="text-xl font-bold text-white mb-2">{event.eventName}</h2>
              <p className="text-gray-400 mb-2">
                {event.eventDate} at {event.time}
              </p>
              <p className="text-gray-400 mb-4 lg:mb-6">{event.eventLocation}</p>
              <p className="text-gray-300">{event.eventDescription}</p>
              <Link href={`/registration/${event.id}`} className="inline-block mt-4 p-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">
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
</div>

  );
}

export default EventListing;
