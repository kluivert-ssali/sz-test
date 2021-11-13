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
                    <input type="text" placeholder={`What is on your Mind, king`} />
                </form>
            </div>
        </div>
    )
}

export default InputBox
