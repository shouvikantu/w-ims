import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const EventCreation = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const eventsRef = collection(db, "events");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");
    alert("Event Successfully Created!");

    const eventData = {
      eventName,
      eventDate,
      eventTime,
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
    <div className="h-screen bg-cover bg-center bg-container1">
      <div className=" px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-lg mx-auto bg-gray-900 bg-opacity-70 p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Create a new event
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block font-bold text-gray-300">
                Event Name
              </label>
              <input
                required
                type="text"
                className="form-input mt-1 w-full"
                onChange={(e) => setEventName(e.target.value)}
                value={eventName}
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300">
                Event Date
              </label>
              <input
                type="date"
                className="form-input mt-1 w-full"
                onChange={(e) => setEventDate(e.target.value)}
                value={eventDate}
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300">
                Event Time
              </label>
              <input
                type="time"
                className="form-input mt-1 w-full"
                onChange={(e) => setEventTime(e.target.value)}
                value={eventTime}
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300">
                Event Location
              </label>
              <input
                type="text"
                className="form-input mt-1 w-full"
                onChange={(e) => setEventLocation(e.target.value)}
                value={eventLocation}
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300">
                Event Description
              </label>
              <textarea
                className="form-input mt-1 w-full"
                rows="4"
                onChange={(e) => setEventDescription(e.target.value)}
                value={eventDescription}
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventCreation;
