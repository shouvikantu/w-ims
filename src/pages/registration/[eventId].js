import { addDoc, collection, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { db } from '../../../firebase';


function RegisterEvent() {
    const router = useRouter();
    const {eventId}  = router.query;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    console.log(eventId)
    const eventData = {
        name,
        email,
    };
    e.preventDefault();

    try {
        const eventRef = doc(db, "events" , eventId)
        await addDoc(eventRef, eventData)
      alert('Registration successful!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="py-4 px-6 bg-gray-800 text-white font-semibold uppercase tracking-wide">
          Register for Event
        </div>
        <div className="py-4 px-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterEvent;
