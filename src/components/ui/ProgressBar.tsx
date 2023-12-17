type ProgressBarProps = {
  progress: number;
}

const ProgressBar = ({ progress } : ProgressBarProps) => (
  <>
    <div className="w-full h-5 bg-gray rounded-full relative">
      <div className="h-5 bg-accent rounded-full absolute top-0 left-0 lg:text-xs text-[10px] flex justify-center items-center" style={{ width: `${progress}%`}}>
        { progress >= 90 ? "Expert" : progress > 75 ? "Advanced" : progress > 50 ? "Regular" : progress > 25 ? "Junior" : "Trainee" }
      </div>
    </div>
  </>
)

export default ProgressBar