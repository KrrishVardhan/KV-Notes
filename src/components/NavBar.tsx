import { Badge } from "@/components/ui/8bit/badge"

function NavBar() {
    return (
        <div className="flex retro justify-between border-b border-dashed border-gray-300  bg-gray-100 px-10 py-5">
            <h1 className="text-2xl">KV-Notes</h1>
            <Badge className="hidden md:block">B-Section Only</Badge>
        </div>
    )
}

export default NavBar