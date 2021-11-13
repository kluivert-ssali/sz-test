import { useSession } from "next-auth/client"
import Image from "next/image";
import { EmojiHappyIcon, DocumentIcon } from "@heroicons/react/outline";
import { CameraIcon } from "@heroicons/react/solid";



function InputBox() {
    const [session] = useSession();

    const sendPost = (e) => {
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

            <div  className="flex justify-evenly p-3 border-t">
                <div  className="inputIcon">
                    <DocumentIcon  className="h-7 text-red-500" />
                    <p  className="text-xs sm:text-sm xl:text-base">Documents</p>
                </div>

                <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p  className="text-xs sm:text-sm xl:text-base">Photo/video</p>
                </div>

                <div  className="inputIcon">
                    <EmojiHappyIcon  className="h-7 text-yellow-300" />
                    <p  className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
