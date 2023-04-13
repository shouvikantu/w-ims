import { addDoc, collection, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { db } from '../../../firebase';
import Header from '@/components/Header';


function RegisterEvent() {
    const router = useRouter();
    const {eventId}  = router.query;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [pronoun, setPronoun] = useState('');
  const [dob, setDoB] = useState('');

  const handleSubmit = async (e) => {
    console.log(eventId)
    const eventData = {
        name,
        email,
        tel, 
        pronoun, 
        dob
    };
    e.preventDefault();

    try {
      // Create a reference to the event document
      const eventRef = doc(db, 'events', eventId);

      // Create a reference to the subcollection within the event document
      const subcollectionRef = collection(eventRef, 'registrations');

      // Add the registration data to the subcollection
      await addDoc(subcollectionRef, { name, email, tel, pronoun, dob });
      alert('Registration successful!');
      setName('');
      setEmail('');
      setTel('');
      setDoB('');
      setPronoun('');
    } catch (error) {
      alert('Registration failed. Refresh the page & Please try again.');
    }
  };

  return (
    <div className='bg-container h-screen'>
        <Header />
      <div className=" py-6  ">
      <div className="max-w-md sm:mx-auto bg-white bg-opacity-90 rounded-md overflow-hidden shadow-md mx-2">
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
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone 
              </label>
              <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Pronouns 
              </label>
              <input
                type="text"
                value={pronoun}
                onChange={(e) => setPronoun(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Pronoun"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Birth 
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDoB(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="(mm/dd/year)"
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
    </div>
    
  );
}

export default RegisterEvent;
