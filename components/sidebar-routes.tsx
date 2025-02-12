'use client'

import SidebarItem from "@/components/sidebar-item"

const setRoutes = [
    {
        label: 'コンテンツ',
        href: '/contents',
    },
    {
        label: '収益',
        href: '/revenue',
    },
    {
        label: '依頼',
        href: '/requests',
    },
]

const SidebarRoutes = () => {
    return ( 
        <div className="flex flex-col w-full">
            {setRoutes.map((route) => (
                <SidebarItem
                    key={route.href}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}
 
export default SidebarRoutes