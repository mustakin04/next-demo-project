import { Button } from "@/components/ui/button"
import Link from "next/link"

const AnalyticsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Button render={<Link href="/dashboard/analytics/monthly"></Link>}>
        Monthly
    </Button>
    <Button render={<Link href="/dashboard/analytics/weekly"></Link>}>Weekly</Button>
    {children}
    </div>
  )
}

export default AnalyticsLayout
