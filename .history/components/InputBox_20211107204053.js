import { useSession } from "next-auth/client"
import Image from "next/image";


function InputBox() {
    const [session] = useSession();


    return (
        <div>
            <div  className="flex space-x-4 p-4 items-center"> 
                {/* <Image
                  className="rounded-full"
                  scr={session.user.image}
                  width={40}
                  height={40}
                  layout="fixed"
                /> */}
                <br />
                <form className="flex flex-1">
                    <input 
                     type="text" 
                     placeholder={`What's on your Mind`}
                     className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                    />
                </form>
            </div>
        </div>
    )
}

export default InputBox
