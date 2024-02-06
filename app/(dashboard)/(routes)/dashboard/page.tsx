import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";



const Dashboard = () => {
  return (
    <div>
      <Button> click me </Button>
      <UserButton afterSignOutUrl="/"></UserButton>

    </div>
  )
}

export default Dashboard;
