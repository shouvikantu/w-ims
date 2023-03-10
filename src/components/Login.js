// import { useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import google from "../../public/google.png"



const Login = () => {
//   const { currentUser, loginWithGoogle } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (currentUser) {
//       router.push('/');
//     }
//   }, [currentUser]);

//   const handleLogin = async () => {
//     try {
//       await loginWithGoogle();
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <div className="bg-cover bg-center bg-container">
  <div className="bg-gray-800 bg-opacity-75 min-h-screen flex items-center justify-center">
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <h2 className="text-lg font-medium mb-4">Intramural Staff</h2>
      <p className="text-gray-700 mb-4">Login with your school email</p>
      <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">
        <Image src={google} alt="Google Logo" width={24} height={24} className="mr-2" />
        Sign in with Google
      </button>
    </div>
  </div>
</div>

  );
};

export default Login;
