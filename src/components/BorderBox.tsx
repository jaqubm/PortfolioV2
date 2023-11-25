import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const BorderBox = ({children} : Props) => (
  <div className="w-full bg-white rounded-[20px] px-5 py-2.5">
    { children }
  </div>
)

export default BorderBox