type ProjectInfoProps = {
  image: string;
  title: string;
  children: string;
}

const ProjectInfo = ({ image, title, children } : ProjectInfoProps) => (
  <>
    <div className="flex">

      <div className="basis-1/4 pt-1">
        <img src={ image } className="w-10/12 rounded-md" />
      </div>

      <div className="basis-3/4">

          <h1 className="text-base font-medium mb-4">
            { title }
          </h1>

        <p className="text-sm">
          { children }
        </p>

      </div>

    </div>
  </>
)

export default ProjectInfo