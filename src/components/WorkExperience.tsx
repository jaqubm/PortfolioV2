import BorderBox from "./ui/BorderBox.tsx"
import Title from "./ui/Title.tsx"
import DetailInfo from "./ui/DetailInfo.tsx"

const WorkExperience = () => (
  <>
    <BorderBox>

      <Title>
        Work Experience
      </Title>

      <div className="space-y-5">

        <DetailInfo
          date="03 2025 - Present"
          link="https://us.pg.com/"
          title="AI Engineer"
          company="P&G"
          isLink={ true } />

        <DetailInfo
        date="03 2024 - 02 2025"
        link="https://us.pg.com/"
        title="Data Engineering Trainee"
        company="P&G"
        isLink={ true }
        skills={ ["Scala", "Apache Spark", "Python", "PySpark", "Apache Airflow", "Azure Databricks", "Azure", "Software Engineering", "Data Engineering", "Jira"] }>
          I was responsible for building and optimizing ETL pipelines using Scala, Python, Apache Spark,
          and PySpark, leveraging Azure Databricks and other Microsoft Azure services for large-scale data processing and analytics.
          I designed and managed workflows with Apache Airflow, wrote complex SQL queries to ensure data accuracy, and maintained
          compliance across all systems. Additionally, I collaborated effectively in English, managed tasks through Jira,
          monitored and improved data pipelines for performance and reliability, automated recurring processes,
          and implemented best practices in software and data engineering.
        </DetailInfo>

        <DetailInfo 
        date="09 2023 - 11 2023" 
        link="https://www.luxoft.com/" 
        title="Intern QA Engineer" 
        company="Luxoft Poland" 
        isLink={ true }
        skills={ ["Problem Solving", "Data Analytics", "Data Review", "Jira"] }>
          As a part of bigger project I was responsible for: digital maps data review using company's original portal,
          annotation of 2D/3D images and videos according to the provided tasks specification, working with Annotation Tools,
          data analysis and review results reports, effective communication with team members and developers.
        </DetailInfo>

        <DetailInfo 
        date="03 2023 - 09 2023" 
        link="https://htdhealth.com/" 
        title="Trainee Frontend Developer" 
        company="HTD Health" 
        isLink={ true }
        skills={ ["React", "TypeScript", "AntDesign", "Problem Solving"] }>
          Participation in "Project Innovation" organized by the Lodz University of Technology consisting in the
          implementation of a project presented by the chosen company in groups. For my team, it was HTD Health.
          The supervisors of such a project are appointed employees of this company. The aim of it is to
          get acquainted with the working model in the industry.
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