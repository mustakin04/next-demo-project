import { Navbar35 } from "@/components/layout/navbar35"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar35></Navbar35>
      {children}
    </div>
  )
}

export default layout
