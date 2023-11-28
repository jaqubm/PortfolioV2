import IndividualSkill from "./IndividualSkill"

type ProjectInfoProps = {
  image: string;
  link: string;
  title: string;
  children: string;
  skills?: string[];
}

const ProjectInfo = ({ image, link, title, children, skills } : ProjectInfoProps) => (
  <>
    <div className="flex">

      <div className="basis-1/4 pt-1 cursor-default">
        <img src={ image } className="w-10/12 rounded-md" />
      </div>

      <div className="basis-3/4">

        <a href={ link } target="_blank" className="group">
          <h1 className="text-base font-medium mb-4 group-hover:text-primary">
            { title }&nbsp;
            <svg className="inline-block fill-text transition-transform group-hover:fill-primary group-hover:-translate-y-1 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
            </svg> 
          </h1>

          <p className="text-sm">
            { children }
          </p>
        </a>

        <div className="mt-0.5 flex items-center flex-wrap cursor-default">
          { skills?.map(item =>
            <IndividualSkill key={ item } skill={ item } />
          )}
        </div>

      </div>

    </div>
  </>
)

export default ProjectInfo