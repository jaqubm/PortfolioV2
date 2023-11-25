type DetailInfoProps = {
  date: string;
  title: string;
  company: string;
  subtitle?: string[];
  children: string;
}

const DetailInfo = ({ date, title, company, subtitle, children } : DetailInfoProps) => (
  <>
    <div className="flex justify-between">

      <p className="lg:basis-1/4 basis-1/5 text-xs text-text-80 pt-1">
        { date }
      </p>

      <div className="basis-3/4">

        <div className="font-medium mb-4">

          <h1 className="text-base">
            { title } &middot; { company }
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