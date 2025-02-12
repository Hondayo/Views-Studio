"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const HomeButton = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onClick = () => {
        setIsLoading(true)
        router.push('/contents')
        setIsLoading(false)
    }
    return (
        <Button
            onClick={onClick}
            className="mt-8 px-8 py-6"
        >
            はじめる
        </Button>
    )
}
 
export default HomeButton