function SidebarRow({ Icon, title }) {
    return (
        <div className="">
            {
                Icon && <Icon className="h-8 w-8 text-blue-500" />
            }
            <p className="hidden sm:inline-flex font-medium">
                {title}
            </p>
        </div>
    )
}

export default SidebarRow
