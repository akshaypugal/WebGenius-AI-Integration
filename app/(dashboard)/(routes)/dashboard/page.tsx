
import { UserButton } from "@clerk/nextjs";



const Dashboard = () => {
  return (
    <div>
      
      <UserButton afterSignOutUrl="/"></UserButton>

    </div>
  )
}

export default Dashboard;
