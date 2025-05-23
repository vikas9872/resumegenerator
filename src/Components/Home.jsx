import {auth, db} from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const handleSignIn = () =>{
    navigate('/register')
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen gap-8'>
      <div className='flex flex-col justify-center items-center'>
        <p className="font-semibold">Build a Job-Winning Resume — No Experience Needed</p>
        <p>Sign In and get your well tailored resume</p>
      </div>
      <div>
        <button 
          className='pl-8 pr-8 pt-4 pb-4 font-semibold rounded-xl text-amber-50 bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Home
