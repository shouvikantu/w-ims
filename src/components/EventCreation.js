import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Header from "./Header";

const EventCreation = ({onLogout, user}) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const eventsRef = collection(db, "events");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEventName("");
    setEventDate("");
    setEventLocation("");
    setEventDescription("");
    alert("Event Successfully Created!");

    const eventData = {
      eventName,
      eventDate,
      eventLocation,
      eventDescription,
    };

    try {
      await addDoc(eventsRef, eventData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <Header user={user} />
      <div className="h-screen bg-cover bg-center">
        <div className=" px-4 py-8 md:py-12 lg:py-16">
          <div className="max-w-lg mx-auto border-2 p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl text-center font-bold mb-4 text-white">
              Create a new event
            </h1>
            <form className="space-y-4">
              <div class="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  for="Event Name"
                >
                  Event Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g. Intramural Volleyball Tournament"
                  required
                  type="text"
                  onChange={(e) => setEventName(e.target.value)}
                  value={eventName}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Date of the Event
                </label>
                <input
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setEventDate(e.target.value)}
                  value={eventDate}
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Event Location
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g. Henkle Gym"
                  onChange={(e) => setEventLocation(e.target.value)}
                  value={eventLocation}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Event Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  onChange={(e) => setEventDescription(e.target.value)}
                  value={eventDescription}
                />
              </div>
              <div>
                <button
                  type="button"
                  className=" bg-[#b4bc14] text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreation;
