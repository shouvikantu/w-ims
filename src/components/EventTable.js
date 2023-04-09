import React, { useState, useEffect } from 'react';
import {db} from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore" ;

const eventsRef = collection(db, "events")

const EventTable = () => {
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
        <div className="px-4">
            <h1 className="text-3xl font-bold text-white mb-4 lg:mb-6">Events Summary</h1>
            {events.length > 0 ? (
                <table border = "2">
                    <tr>
                        <td className="text-white mb-2">Event Name</td>
                        <td className="text-white mb-2">Event Description</td>
                        <td className="text-white mb-2">Event Location</td>
                        <td className="text-white mb-2">Event Date and Time</td>
                    </tr>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td className="text-gray-400 mb-2">{event.eventName}</td>
                            <td className="text-gray-400 mb-2">{event.eventDescription}</td>
                            <td className="text-gray-400 mb-2">{event.eventLocation}</td>
                            <td className="text-gray-400 mb-2">{event.eventDate} at {event.eventTime}</td>
                        </tr>
                    ))}
                </table>
            ) : 
            (
                <p className="text-gray-400">No scheduled events.</p>
            )}
        </div>
    )
}

export default EventTable;