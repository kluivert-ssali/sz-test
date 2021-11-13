import { useSession } from "next-auth/client"
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";



function InputBox() {
    const [session] = useSession();

    const sendPost = e => {
        e.preventDefault();
    };


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
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
            </div>

            <div>
                <div>
                    <VideoCameraIcon  className="h-7 text-red-500" />
                    <p  className="text-xs sm:text-sm xl:text-base">Live Vidoe</p>
                </div>

                <div></div>

                <div>
                    <EmojiHappyIcon  className="h-7 text-yellow-300" />
                    <p  className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
