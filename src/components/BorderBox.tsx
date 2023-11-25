import { ReactNode } from "react"

type BorderBoxProps = {
  children: ReactNode
}

const BorderBox = ({ children } : BorderBoxProps) => (
  <div className="w-full lg:bg-white-03 bg-white-05 rounded-[20px] px-5 pt-2.5 pb-4 lg:text-base text-sm">
    { children }
  </div>
)

export default BorderBox