import { useSession } from "next-auth/client"
import Image from "next/image";


function InputBox() {
    const [session] = useSession();


    return (
        <div  className="bg-purple-200 p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
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
                     placeholder={`What's on your Mind, kluivert Ssali?`}
                     className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none text-purple-700" 
                    />
                    <button hidden onClick={sendPost}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InputBox
