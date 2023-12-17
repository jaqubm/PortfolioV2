type TitleProps = {
  children: string
}

const Title = ({ children } : TitleProps) => (
  <div className="text-primary lg:text-xl text-lg font-bold lg:mb-5 mb-4">
    { children }&#8250;
  </div>
)

export default Title