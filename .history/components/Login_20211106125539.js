import img from '../Logo/The zone logo.png';
import Image from "next/image";


function Login() {
    return (
        <div>
            <Image 
              src={img}
              height={400}
              width={400}
              objectFit="contain"
            />
            <h1>Login with Facebook</h1>
        </div>
    )
}

export default Login
