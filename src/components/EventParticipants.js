import React, { useState, useEffect } from 'react';
import {db} from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore" ;

const EventParticipants = ({ ParentDocId }) => {
    const participantsRef = collection(db, "events", ParentDocId, "registrations")
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        const participantscollection = onSnapshot(participantsRef, (snapshot) => {
            const newParticipants = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setParticipants(newParticipants);
        });

        return () => participantscollection
    }, []);

    return (
        <>
            {participants.length > 0 ? (
                <>
                    <td className="text-gray-900 mb-2 border-2 border-black p-2">
                        {participants.map((participant) => (
                            <p key={participant.id}>({participant.name} ({participant.pronoun})  DOB: {participant.dob})</p>
                        ))}
                    </td>
                    <td className="text-gray-900 mb-2 border-2 border-black p-2">
                        {participants.map((participant) => (
                            <p key={participant.id}>({participant.name} &lt;{participant.email}&gt; {participant.tel})</p>
                        ))}
                    </td>
                </>

            ):(
                <>
                    <td className="text-gray-900 mb-2 border-2 border-black p-2">
                    <p>No Registrations</p>
                </td>
                <td className="text-gray-900 mb-2 border-2 border-black p-2">
                    <p>No Registrations</p>
                </td>
                </>
            )}

        </>
    )
}

export default EventParticipants;
