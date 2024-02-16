
import { UserButton } from "@clerk/nextjs";
import MoblieSibeBar from "@/components/mobile-sidebar";

const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
            <MoblieSibeBar/>
            <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/"></UserButton>
            </div>
        </div>
        );

        
                
}
 
export default Navbar;