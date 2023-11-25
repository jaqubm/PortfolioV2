type ProgressBarProps = {
  progress: number;
}

const ProgressBar = ({ progress } : ProgressBarProps) => (
  <>
    <div className="w-full h-5 bg-gray rounded-full relative">
      <div className="h-5 bg-accent rounded-full absolute top-0 left-0" style={{ width: `${progress}%`}} />
    </div>
  </>
)

export default ProgressBar