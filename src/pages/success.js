import Link from 'next/link';

const success = () => {
  return (
    <div className="bg-container min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Thank You!</h1>
        <p className="text-gray-700 text-center mb-6">
          Thank you for registering. We appreciate your participation.
        </p>
        <Link href="/"
           className="block bg-blue-500 text-white text-center font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            Back to Home
        </Link>
      </div>
    </div>
  );
};

export default success;
