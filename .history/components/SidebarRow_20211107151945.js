function SidebarRow({ Icon, title }) {
    return (
        <div className="flex items-center space-x-2 hover:bg-white rounded-xl cursor-pointer">
            {
                Icon && <Icon className="h-8 w-8 text-purple-400" />
            }
            <p className="hidden sm:inline-flex font-medium">
                {title}
            </p>
        </div>
    )
}

export default SidebarRow
