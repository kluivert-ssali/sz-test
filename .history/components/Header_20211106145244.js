import img from '../Logo/The zone logo.png';
import Image from "next/image";
import { 
    BellIcon,
    ChatIcon,
    ChevronIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon

} from "@heroicons/react/solid";
import { 
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut } from 'next-auth/client';
import { useSession } from 'next-auth/client';


function Header() {
    const [session] = useSession();



    return (
        <div className="sticky top-0 z-50 bg-purple-200 flex items-center p-2 lg:px-5 shadow-md">

            {/* left */}
            <div className="flex items-center">
                <Image 
                 src={img}
                 width={60} 
                 height={60}
                 layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Szone"/>
                </div>
            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                    <HeaderIcon Icon={ChatIcon} />

                </div>
            </div>
 
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile pic */}
                <Image 
                  onClick={signOut}
                  className="rounded-full cursor-pointer"
                //   src={session.user.image}
                  width="40"
                  height="40"
                  layout="fixed"
                />

                <p className="whitespace-nowrap font-semibold pr-3">Kluivert Ssali</p>
                

            </div>

        </div>
    )
}

export default Header
