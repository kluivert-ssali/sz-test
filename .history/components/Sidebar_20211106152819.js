import { useSession } from 'next-auth/client';
import { 
    ShoppingBagIcon,
    UserGroupIcon,
    ChevronDownIcon,

} from "@heroicons/react/outline";
import { 
    CalenderIcon,
    ClockedIcon,
    UsersIcon,
    DesktopComputerIcon,

} from "@heroicons/react/solid";
import SidebarRow from './SidebarRow';


function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow  Icon={UsersIcon} title="Friends" />
            <SidebarRow  Icon={UserGroupIcon} title="Groups" />
            <SidebarRow  Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow  Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow  Icon={CalenderIcon} title="Events" />
            <SidebarRow  Icon={ClockedIcon} title="Memories" />
            <SidebarRow  Icon={ChevronDownIcon} title="See More" />

            
        </div>
    )
}

export default Sidebar
