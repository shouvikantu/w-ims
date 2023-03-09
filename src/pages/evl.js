import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import EventRegistration from "@/components/Registration";
import Link from "next/link";

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
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      {events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="border-b border-gray-300 pb-4">
              <h2 className="text-lg font-bold">{event.eventName}</h2>
              <p className="text-gray-600">
                {event.eventDate} at {event.time}
              </p>
              <p className="text-gray-600">{event.eventLocation}</p>
              <p className="mt-2">{event.eventDescription}</p>
              <Link href={`/registration/${event.id}`}
                 className="text-blue-500 hover:text-blue-700">
                  Register for this event
               
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No upcoming events.</p>
      )}

      <EventRegistration />
    </div>
  );
}

export default EventListing;
