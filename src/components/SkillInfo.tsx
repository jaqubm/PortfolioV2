import { ReactNode } from "react"
import ProgressBar from "./ProgressBar"

type SkillProps = {
  children: ReactNode;
  progress: number;
}

const SkillInfo = ({ children, progress } : SkillProps) => (
  <div className="w-full flex items-center">

    <h1 className="w-28">
      { children }
    </h1>

    <ProgressBar progress={progress} />
    
  </div>
)

export default SkillInfo