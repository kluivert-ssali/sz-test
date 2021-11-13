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

function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <siderbarRow  Icon={UsersIcon} title="Friends" />
            <siderbarRow  Icon={UserGroupIcon} title="Groups" />
            <siderbarRow  Icon={ShoppingBagIcon} title="Marketplace" />
            <siderbarRow  Icon={DesktopComputerIcon} title="Watch" />
            <siderbarRow  Icon={CalenderIcon} title="Events" />
            <siderbarRow  Icon={ClockedIcon} title="Memories" />
            <siderbarRow  Icon={ChevronDownIcon} title="See More" />

            
        </div>
    )
}

export default Sidebar
