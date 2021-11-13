import { useSession } from 'next-auth/client';
import { 
    CakeIcon,
    UserGroupIcon,
    ChevronDownIcon,

} from "@heroicons/react/outline";
import { 
    HomeIcon,
    AcademiccapIcon,
    UsersIcon,
   

} from "@heroicons/react/solid";
import SidebarRow from './SidebarRow';


function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow  Icon={UsersIcon} title="Friends" />
            <SidebarRow  Icon={UserGroupIcon} title="Groups" />
            <SidebarRow  Icon={HomeIcon} title="Schools" />
            <SidebarRow  Icon={CakeIcon} title="Events" />
            <SidebarRow  Icon={CakeIcon} title="Academic" />
            <SidebarRow  Icon={CakeIcon} title="Trends" />
            <SidebarRow  Icon={ChevronDownIcon} title="See More" />

            
        </div>
    )
}


export default Sidebar
