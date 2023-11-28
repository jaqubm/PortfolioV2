import BorderBox from "../BorderBox"
import Title from "../Title"
import DetailInfo from "../DetailInfo"

const WorkExperience = () => (
  <>
    <BorderBox>

      <Title>
        Work Experience
      </Title>

      <div className="space-y-5">

        <DetailInfo 
        date="09 2023 - 11 2023" 
        link="https://www.luxoft.com/" 
        title="Intern QA Engineer" 
        company="Luxoft Poland" 
        isLink={ true }>
          As a part of bigger project I was responsible for: digital maps data review using company's original portal, annotation of 2D/3D images and videos according to the provided tasks specification, working with Annotation Tools, data analysis and review results reports, effective communication with team members and developers.
        </DetailInfo>

        <DetailInfo 
        date="03 2023 - 09 2023" 
        link="https://htdhealth.com/" 
        title="Trainee Frontend Developer" 
        company="HTD Health" 
        isLink={ true }
        skills={ ["React", "TypeScript", "AntDesign"] }>
          Participation in "Project Innovation" organized by the Lodz University of Technology consisting in the implementation of a project presented by the chosen company in groups. For my team, it was HTD Health. The supervisors of such a project are appointed employees of this company. The aim of it is to get acquainted with the working model in the industry.
        </DetailInfo>

        <DetailInfo 
        date="07 2022 - 08 2022" 
        link="https://www.adecco.com/" 
        title="Warehouse employee for logistics" 
        company="Adecco" 
        isLink={ true } />

      </div>

    </BorderBox>
  </>
)

export default WorkExperience