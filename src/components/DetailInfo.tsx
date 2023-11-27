type DetailInfoProps = {
  date: string;
  title: string;
  company: string;
  subtitle?: string[];
  link: boolean;
  children?: string;
}

const DetailInfo = ({ date, title, company, subtitle, link, children } : DetailInfoProps) => (
  <>
    <div className="flex justify-between">

      <p className="lg:basis-1/4 basis-1/5 text-xs text-text-80 pt-1 ">
        { date }
      </p>

      <div className="basis-3/4 group">

        <div className="font-medium mb-4">

          <h1 className={ "inline-block text-base fill-text " + (link ? 'group-hover:text-primary' : '') }>
            { title } &middot; { company }&nbsp;
            { link ? 
            <svg className="inline-block fill-text transition-transform group-hover:fill-primary group-hover:-translate-y-1 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
            </svg> 
            : '' }
          </h1>

          { subtitle?.map(item =>
              <h2 key={ item } className="text-text-60 text-sm">
                { item }
              </h2>
          )}

        </div>

        <p className="text-sm">
          { children }
        </p>

      </div>

    </div>
  </>
)

export default DetailInfo