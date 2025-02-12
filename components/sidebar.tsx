import SidebarRoutes from "@/components/sidebar-routes"

const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="w-full flex items-center justify-center py-[20px] font-bold text-xl">
                Views Studio
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    )
}
 
export default Sidebar