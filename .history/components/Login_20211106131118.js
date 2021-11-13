import img from '../Logo/The zone logo.png';
import Image from "next/image";
import { signIn } from "next-auth/client";


function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
              src={img}
              height={400}
              width={400}
              objectFit="contain"
            />
            <h1 onClick={signIn} className="p-5 bg-purple-300 rounded-full text-gray-900 text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
