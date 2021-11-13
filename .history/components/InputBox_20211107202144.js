import { useSession } from "next-auth/client"
import Image from "next/image";


function InputBox() {
    const [session] = useSession();


    return (
        <div>
            <div>
                <Image
                  className="rounded-full"
                  scr={session.user.image}
                  width={40}
                  height={40}
                  layout="fixed"
                />
            </div>
        </div>
    )
}

export default InputBox
