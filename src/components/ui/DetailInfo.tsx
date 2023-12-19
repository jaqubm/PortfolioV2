import IndividualSkill from "./IndividualSkill.tsx"

type DetailInfoProps = {
  date: string;
  link?: string;
  title: string;
  company: string;
  subtitle?: string[];
  isLink: boolean;
  children?: string;
  skills?: string[];
}

const DetailInfo = ({ date, link, title, company, subtitle, isLink, children, skills } : DetailInfoProps) => (
  <>
    <div className="flex lg:flex-row flex-col justify-between">

      <p className="lg:basis-1/4 basis-1/5 text-xs text-text-80 pt-1 cursor-default">
        { date }
      </p>

      <div className="basis-3/4">

        
          <div className="font-medium mb-2">

            <a href={ link } target="_blank" className="group">
              <h1 className={ "inline-block text-base fill-text " + (isLink ? 'group-hover:text-primary' : '') }>
                { title } &middot; { company }&nbsp;
                { link ? 
                <svg className="inline-block fill-text transition-transform group-hover:fill-primary group-hover:-translate-y-1 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
                </svg> 
                : '' }
              </h1>
            </a>

            { subtitle?.map(item =>
              <h2 key={ item } className="text-text-60 text-sm">
                { item }
              </h2>
            )}

          </div>
        

        <p className="text-sm">
          { children }
        </p>

        <div className="mt-0.5 flex items-center flex-wrap cursor-default">
          { skills?.map(item =>
            <IndividualSkill key={ item } skill={ item } />
          )}
        </div>

      </div>

    </div>
  </>
)

export default DetailInfo