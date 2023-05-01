import { useState, useEffect } from "react" ;
import { collection, onSnapshot } from "firebase/firestore" ;
import { db } from "../../firebase" ;


import Header from "@/components/Header" ;
import EventParticipants from "@/components/EventParticipants";
import { signOut } from "next-auth/react";
import Link from "next/link";


const eventsRef = collection(db, "events")

function ShowEventData() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const eventscollection = onSnapshot(eventsRef, (snapshot) => {
            const newEvents = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEvents(newEvents);
        });

        return () => eventscollection
    }, []);

    return (
        <>
            <div className="bg-container min-h-screen ">
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded absolute top-5 md:right-10 right-5'" href="/">Home</Link>
                <div className="px-4 mt-10">
                    <h1 className="text-3xl font-bold text-white mb-4 lg:mb-6">Events Summary</h1>
                    <div className="bg-white bg-opacity-80">
                        {events.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <td className="text-gray-900 mb-2 border-2 border-black p-2">Event Name</td>
                                        <td className="text-gray-900 mb-2 border-2 border-black p-2">Event Description</td>
                                        <td className="text-gray-900 mb-2 border-2 border-black p-2">Event Location</td>
                                        <td className="text-gray-900 mb-2 border-2 border-black p-2">Event Date</td>
                                        <td className="text-gray-900 mb-2 border-2 border-black p-2">Participants</td>
                                        <td className="text-gray-900 mb-2 border-2 border-black p-2">Contact Info</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((event) => (
                                        <tr key={event.id}>
                                            <td className="text-gray-900 mb-2 border-2 border-black p-2">{event.eventName}</td>
                                            <td className="text-gray-900 mb-2 border-2 border-black p-2">{event.eventDescription}</td>
                                            <td className="text-gray-900 mb-2 border-2 border-black p-2">{event.eventLocation}</td>
                                            <td className="text-gray-900 mb-2 border-2 border-black p-2">{event.eventDate}</td>
                                            <EventParticipants ParentDocId={event.id}/>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) :
                        (
                            <p className="text-gray-900">No scheduled events.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowEventData;
