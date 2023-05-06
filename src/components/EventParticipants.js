import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const EventParticipants = ({ ParentDocId }) => {
  const participantsRef = collection(
    db,
    "events",
    ParentDocId,
    "registrations"
  );
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantscollection = onSnapshot(participantsRef, (snapshot) => {
      const newParticipants = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParticipants(newParticipants);
    });

    return () => participantscollection;
  }, []);

  return (
    (participants.length) > 0 ? (
      <>
        <td className="text-gray-900 mb-2 border-2 border-black p-2">
          {participants.map((participant, index) => (
            <div key={participant.id}>
              <p className={index !== participants.length - 1 ? 'mb-2' : ''}>
                ({participant.name} ({participant.pronoun}) <br className="lg:hidden" /> DOB:{" "}
                {participant.dob})
              </p>
              {index !== participants.length - 1 && <hr className="border-black" />}
            </div>
          ))}
        </td>
        <td className="text-gray-900 mb-2 border-2 border-black p-2">
          {participants.map((participant, index) => (
            <div key={participant.id}>
              <p className={index !== participants.length - 1 ? 'mb-2' : ''}>
                ({participant.name} &lt;{participant.email}&gt;{" "}
                {participant.tel});
              </p>
              {index !== participants.length - 1 && <hr className="border-black" />}
            </div>
          ))}
        </td>
      </>
    ) : (
      <>
        <td className="text-gray-900 mb-2 border-2 border-black p-2">
          <p>No Registrations</p>
        </td>
        <td className="text-gray-900 mb-2 border-2 border-black p-2">
          <p>No Registrations</p>
        </td>
      </>
    )
    
  );
};

export default EventParticipants;
