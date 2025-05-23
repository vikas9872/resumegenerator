import { useRef, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [isSignInMode, setIsSignInMode] = useState(true);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const email = emailRef.current.value;
      const pass = passRef.current.value;
      const createuserwithemailandpassword = await createUserWithEmailAndPassword(auth, email, pass);
      const user = createuserwithemailandpassword.user;
      alert("User created")
    } catch (error) {
      console.log(error);
    }
  }
  const handleLogIn=async (e)=>{
    e.preventDefault();
    try{
      const email=emailRef.current.value;
      const pass=passRef.current.value;
      const loginuserwithemailandpassword=await signInWithEmailAndPassword(auth,email,pass);
      const loguser=loginuserwithemailandpassword.loguser;
      alert("User logged in")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-50">
      <div className="border-2 rounded-lg w-[90%] md:w-[50%] lg:w-[40%] p-6 bg-white shadow-lg">
        <h2 className="font-extrabold text-4xl text-center mb-6">
          {isSignInMode ? 'Sign In' : 'Login'}
        </h2>
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-xl mb-1">Email</label>
            <input
              type="email"
              className="h-12 w-full px-4 border-b-2 outline-none text-md"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Password</label>
            <input
              type="password"
              className="h-12 w-full px-4 border-b-2 outline-none text-md"
              placeholder="Enter your password"
              ref={passRef}
              required
            />
          </div>
          <div className="flex justify-center">
            {isSignInMode
              ? <button
                className="text-white px-6 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
                onClick={handleSignIn}
              >
                Sign in
              </button>
              : <button
                className="text-white px-6 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
                onClick={handleLogIn}
              >
                Log in
              </button>
            }

          </div>
        </form>
        <div className="flex items-center justify-center mt-4">
          {isSignInMode
            ? <p>Already have an account?</p>
            : <p>Don't have an account?</p>
          }
          <button
            onClick={() => setIsSignInMode(!isSignInMode)}
            className="text-sm text-violet-500 hover:underline font-semibold cursor-pointer"
          >
            {isSignInMode
              ? "Log in"
              : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
