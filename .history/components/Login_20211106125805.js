import img from '../Logo/The zone logo.png';
import Image from "next/image";


function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
              src={img}
              height={400}
              width={400}
              objectFit="contain"
            />
            <h1 className="p-5 bg-purple-300">Login with Facebook</h1>
        </div>
    )
}

export default Login
