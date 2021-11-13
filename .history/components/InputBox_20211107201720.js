import { session } from "next-auth/client"

function InputBox() {
    return (
        <div>
            <div>
                <Image
                  className="rounded-full"
                  scr={session.user.Image}
                  width={40}
                  height={40}
                  layout="fixed"
                />
            </div>
        </div>
    )
}

export default InputBox
