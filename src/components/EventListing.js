import React from 'react'
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Link from "next/link";
import { signIn } from 'next-auth/react';


const EventListing = () => {
    const eventsRef = collection(db, "events");

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
        <div className="md:h-screen">
        <div className=" text-center">
          <div className=" flex flex-col justify-center items-center min-h-screen rounded-lg shadow-lg">
            <div className="px-4">
              <h1 className="text-3xl font-bold text-white mt-[60px] md:mt-0  mb-4 lg:mb-6">
                Upcoming Events
              </h1>
              {events.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-6">
                  {events.map((event) => (
                    <div className="bg-white bg-opacity-80" key={event.id}>
                      <li
                        key={event.id}
                        className=" rounded-lg shadow-lg p-4 w-[300px] lg:p-6 bg-gray border-2"
                      >
                        <h2 className="text-xl font-bold text-black mb-2 ">
                          {event.eventName}
                        </h2>
                        <p className="text-gray-900 mb-2">
                          {event.eventDate} at {event.time}
                        </p>
                        <p className="text-gray-900 mb-4 lg:mb-6">
                          {event.eventLocation}
                        </p>
                        <p className="text-black">{event.eventDescription}</p>
                        <Link
                          href={`/registration/${event.id}`}
                          className="inline-block mt-4 p-2 bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                          Register for this event
                        </Link>
                      </li>
                     
                    </div>
                  ))}
                </ul>
              ) : (
                <p className="text-black bg-white opacity-90 p-4 ">
                  No upcoming events.
                </p>
              )}
            </div>
            
              <button onClick={signIn} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded absolute top-5 md:right-10 right-5'>
                Staff Login
              </button>
          
            <div className="absolute bottom-0 hidden md:block ">
              <p className="text-white p-2 ">
                Created by Shouvik Ahmed Antu, Douglas Li, Gregory Callahan and
                Malie Heine @ 2023
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EventListing