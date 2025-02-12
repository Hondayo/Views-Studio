"use client"

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    label: string
    href: string
}

const SidebarItem = ({
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = 
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname.startsWith(`${href}/`)

    const onClick = () => {
        router.push(href)
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                'flex items-center text-slate-500 text-sm font-[500] pl-6 transition-al rounded-lg hover:text-slate-600 hover:bg-slate-300/20',
                isActive && 'text-black text-base bg-gray-200/20 hover:bg-slate-200/20'
            )}
        >
            <div className="flex items-center py-4">
                {label}
            </div>
        </button>
    );
}
 
export default SidebarItem;