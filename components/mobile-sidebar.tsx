import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MoblieSibeBar = () => {
    return ( 
           <Sheet>
            <SheetTrigger>
            <Button className="md:hidden" size={"icon"} variant={"ghost"}>
               <Menu/>
            </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0">
                <Sidebar/>
            </SheetContent>
            </Sheet>
     );
}
 
export default MoblieSibeBar;