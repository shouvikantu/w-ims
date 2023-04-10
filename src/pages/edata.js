import { useState, useEffect } from "react" ;
import { collection, onSnapshot } from "firebase/firestore" ;
import { db } from "../../firebase" ;

import Header from "@/components/Header" ;
import EventTable from "@/components/EventTable";


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
            <div className="bg-container2 min-h-screen rounded-lg shadow-lg">
                <Header />
                <EventTable />
            </div>
        </>  
    ) 
}

export default ShowEventData;
